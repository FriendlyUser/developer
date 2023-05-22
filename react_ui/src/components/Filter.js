
// src/components/Filter.js

import React from 'react';

const Filter = ({ name, label, value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
