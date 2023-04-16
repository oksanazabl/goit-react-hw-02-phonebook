import { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section';
import PhonebookForm from './PhonebookForm';
import PhonebookContacts from './PhonebookContatcs';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const id = nanoid();
    const contact = { id, name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      name: '',
      number: ''
    }));
  };

  render() {
    const { name, contacts, number } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <PhonebookForm
            name={name}
            number={number}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            
          />
        </Section>

        <Section title="Contacts">
          <PhonebookContacts contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default App;
