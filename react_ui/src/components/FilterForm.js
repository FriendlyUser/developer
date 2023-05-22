
// src/components/FilterForm.js

import React from 'react';
import Filter from './Filter';
import RangeSlider from './RangeSlider';

const FilterForm = ({ filters, updateFilters }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFilters({ ...filters, [name]: value });
  };

  return (
    <form className="mb-3">
      <h4>Filters</h4>
      <div className="row g-3">
        <div className="col-md-4">
          <Filter
            name="make"
            label="Make"
            value={filters.make}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4">
          <Filter
            name="year"
            label="Year"
            value={filters.year}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4">
          <Filter
            name="color"
            label="Color"
            value={filters.color}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row g-3 mt-3">
        <div className="col-md-6">
          <RangeSlider
            name="price"
            label="Price Range"
            min={0}
            max={100}
            value={filters.price}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
