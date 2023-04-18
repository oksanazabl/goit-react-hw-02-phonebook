import { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import PhonebookForm from './PhonebookForm';
import PhonebookContacts from './PhonebookContatcs';
import PhonebookFilter from './PhonebookFilter';
import filterContacts from '../utils/filterContacts';
import isContactExist from '../utils/isContactExist';

class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}, ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number,contacts } = this.state;
    const id = nanoid();
    // const contact = { id, name, number };

    if (isContactExist(name, contacts)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: id,
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContact,...prevState.contacts],
      name: '',
      number: '',
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { name, contacts, number, filter } = this.state;
    const newContacts = filterContacts(contacts, filter);
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm
          name={name}
          number={number}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <PhonebookFilter
          filter={filter}
          onFilterSet={this.handleFilterChange}
        />
        <PhonebookContacts contacts={newContacts} onDeleteContact={this.handleDeleteContact} />
      </Container>
    );
  }
}

export default App;
