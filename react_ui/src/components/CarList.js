
// src/components/CarList.js

import React from 'react';
import Car from './Car';

const CarList = ({ cars }) => {
  return (
    <div className="row">
      {cars.map((car) => (
        <div className="col-lg-4 col-md-6" key={car.id}>
          <Car car={car} />
        </div>
      ))}
    </div>
  );
};

export default CarList;
