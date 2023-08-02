import React from 'react'

const CarDisplay = (car) => {

  return (
    <div className = "car">
      <h1>{car.make}</h1>
      <h3>{car.model}</h3>
    </div>
    )
  }
export default CarDisplay