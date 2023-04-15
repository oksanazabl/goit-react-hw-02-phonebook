import { nanoid } from 'nanoid';
import { Component } from 'react';
import Section from './Section';
import PhonebookForm from './PhonebookForm';
import PhonebookContacts from './PhonebookContatcs';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, contacts } = this.state;
    const newContact = { id: nanoid(), name };
    this.setState({ contacts: [...contacts, newContact], name: '' });
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <PhonebookForm
            name={name}
            handleSubmit={this.handleSubmit}
            handleNameChange={this.handleNameChange}
          />
          {/* <form onSubmit={this.handleSubmit}>
            <label htmlFor="nameInput">Name</label>
            <input
              type="text"
              id="nameInput"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleNameChange}
            />
            <button type="submit">Add Contact</button>
          </form> */}
        </Section>

        <Section title="Contacts">
          <PhonebookContacts contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default App;
