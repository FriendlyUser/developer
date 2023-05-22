
// src/components/Car.js

import React from 'react';
import CarDetails from './CarDetails';

const Car = ({ car }) => {
  return (
    <div className="card mb-3">
      <img src={car.image} className="card-img-top" alt={car.make} />
      <div className="card-body">
        <h5 className="card-title">{car.make}</h5>
        <p className="card-text">
          <strong>Year:</strong> {car.year}
        </p>
        <p className="card-text">
          <strong>Color:</strong> {car.color}
        </p>
        <p className="card-text">
          <strong>Price:</strong> ${car.price} per day
        </p>
        <CarDetails car={car} />
      </div>
    </div>
  );
};

export default Car;
