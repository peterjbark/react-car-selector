import React from 'react'

const CarDisplay = (car, img) => {

 
  return (
    <div className = "car">
      <h1 className = "car-make">{car.make}</h1>
      <h3 className = "car-model">{car.model}</h3>
    </div>
    )
  }
export default CarDisplay