import React, { useState} from 'react'
import CarCard from './CarCard'

const apiKey = "jVxxpkyGze5aZyaEk8ILog==rt9r1ILLfDoCqhp9"
let make = "toyota"
let model = "camry"

const CarDisplay = () => {

    const [car, setCar] = useState()

    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey
      },
      contentType: 'application/json',
    }

    const baseURL = "https://api.api-ninjas.com/v1/cars?limit=5&make=" + make

    async function getCar(){
      const response = await fetch(baseURL, options)
      const data = await response.json()
      console.log(data)
      console.log(data[0].make + " " + data[0].model + " " + data[0].class )
    }

  return (
    <div className = "display">
        <h1>Car Specs</h1>
        <div>{car}</div>
        <button onClick = {getCar}>Search</button>
    </div>
  )
}

export default CarDisplay