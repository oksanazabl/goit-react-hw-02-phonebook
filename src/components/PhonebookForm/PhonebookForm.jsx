// import PropTypes from 'prop-types';
import css from './PhonebookForm.module.css';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import isContactExist from '../../utils/isContactExist';

class PhonebookForm extends Component {
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

    const { name, number, contacts } = this.state;
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
      contacts: [newContact, ...prevState.contacts],
      name: '',
      number: '',
    }));
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor="name">
          Name:
        </label>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          placeholder="Name"
        />
        <label className={css.label} htmlFor="number">
          Phone number:
        </label>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          placeholder="Phone number"
        />
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}



export default PhonebookForm;
