import React from 'react';

const Filter = ({ handleChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Filter;
