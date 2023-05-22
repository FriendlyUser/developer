
import React from 'react';
import { Form } from 'react-bootstrap';

const RangeSlider = ({ min, max, value, onChange }) => {
  return (
    <Form.Group controlId="rangeSlider">
      <Form.Label>Price Range</Form.Label>
      <Form.Range
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default RangeSlider;
