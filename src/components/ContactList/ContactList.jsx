import ContactItem from 'components/ContactItem/ContactItem';
import React from 'react';

const ContactList = ({ contacts, children, handleDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      {children}
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            handleDelete={() => handleDelete(contact.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
