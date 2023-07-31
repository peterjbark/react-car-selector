import React, { useEffect, useState, useParams} from 'react'

const apiKey = "jVxxpkyGze5aZyaEk8ILog==rt9r1ILLfDoCqhp9"
let model = "camry"

const Display = () => {

    const [carSpecs, setCarSpecs] = useState('')

    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey
      },
      contentType: 'application/json',
    }

    const baseURL = "https://api.api-ninjas.com/v1/cars?limit=2&model=" + model

    async function getCamry(){
      const response = await fetch(baseURL, options)
      const data = await response.json()
      console.log(data[0])
      console.log(data[0].make + " " + data[0].model + " " + data[0].class )
    }

  return (
    <div>
        <h1>Car Specs</h1>
        <h2>{carSpecs}</h2>
        <button onClick = {getCamry}>Reset</button>
    </div>
  )
}

export default Display