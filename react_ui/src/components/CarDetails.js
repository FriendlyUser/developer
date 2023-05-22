
// src/components/CarDetails.js

import React from 'react';

const CarDetails = ({ car }) => {
  return (
    <div className="card-text">
      <strong>Details:</strong>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Model:</strong> {car.model}
        </li>
        <li className="list-group-item">
          <strong>Transmission:</strong> {car.transmission}
        </li>
        <li className="list-group-item">
          <strong>Mileage:</strong> {car.mileage} miles
        </li>
        <li className="list-group-item">
          <strong>Fuel Type:</strong> {car.fuelType}
        </li>
      </ul>
    </div>
  );
};

export default CarDetails;
