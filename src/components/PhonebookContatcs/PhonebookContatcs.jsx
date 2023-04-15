import PropTypes from 'prop-types';

const PhonebookContacts = ({ contacts }) => {
  return (
    
        <ul>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
};

PhonebookContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default PhonebookContacts;
