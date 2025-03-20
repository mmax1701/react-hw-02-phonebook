import React from 'react';

const ContactItem = ({ name, number, handleDelete }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactItem;
