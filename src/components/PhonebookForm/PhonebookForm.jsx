import PropTypes from 'prop-types';

const PhonebookForm = ({ handleSubmit, name, handleNameChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameInput">
        <p>Name</p>
        <input
          type="text"
          id="nameInput"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

PhonebookForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
};

export default PhonebookForm;
