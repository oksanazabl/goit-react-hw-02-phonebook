const isContactExist = (name, contacts) => {
    return contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  }

  export default isContactExist;
