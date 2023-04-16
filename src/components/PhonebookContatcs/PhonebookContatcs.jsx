import PropTypes from 'prop-types';

const PhonebookContacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
    //     <ul>
    //   {contacts.map(contact => (
    //     <li key={contact.id}>{contact.name}</li>
    //   ))}
    // </ul>
  );
};

PhonebookContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default PhonebookContacts;
