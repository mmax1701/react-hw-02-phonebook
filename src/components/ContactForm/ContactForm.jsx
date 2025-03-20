import React from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ handleData }) => {
  const handleSubmit = e => {
    e.preventDefault();

    handleData({
      id: nanoid(),
      name: e.target.name.value,
      number: e.target.number.value,
    });

    e.target.reset();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <p>Name</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
