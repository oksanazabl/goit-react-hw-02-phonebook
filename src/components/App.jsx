import { nanoid } from 'nanoid';
import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: ''
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
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
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
        </form>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;