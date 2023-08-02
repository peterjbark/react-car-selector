import React, { useState } from 'react'

const apiKey = "jVxxpkyGze5aZyaEk8ILog==rt9r1ILLfDoCqhp9"

const Filter = () => {

const [filter, setFilter] = useState({});


const handleChangeFuel = (event) =>{
      setFilter((currentState) =>{
        return {...currentState, fuel: event.target.value }
        })
       }

const handleChangeTransmission = (event) =>{
      setFilter((currentState) =>{
        return {...currentState, transmission: event.target.value }
 })
}

const handleChangeDrive = (event) =>{
      setFilter((currentState) =>{
        return {...currentState, drivetrain: event.target.value }
 })
}

const handleChangeMake = (event) =>{
      setFilter((currentState) =>{
        return {...currentState, make: event.target.value } 
 })
}

const handleChangeCylinders = (event) =>{
      setFilter((currentState) =>{
       return {...currentState, cylinders: event.target.value }
 })
}

const handleReset = (event) =>{
  event.preventDefault()
  setFilter("")
  console.log(filter + "reset")
}

const handleSearch = (event) =>{
        event.preventDefault();
        console.log(filter)
}


const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey
  },
  contentType: 'application/json',
}

const baseURL = "https://api.api-ninjas.com/v1/cars?limit=5&make="+ filter.make + "&transmission=" + filter.transmission + "&drive=" + filter.drivetrain + "&cylinders=" + filter.cylinders

async function getCar(event){
  try{
  event.preventDefault();
  const response = await fetch(baseURL, options)
  const data = await response.json()
  console.log(data)
  console.log(data[0].make + " " + data[0].model + " " + data[0].class )
  }catch (error){
    console.log("Car with these specifications not found")
  }
}

  return (
    <div className = "filter-menu">
        <nav>
        <form className = "car-filter">
        <div className = "make">Make
            <select onChange = {handleChangeMake} value = {filter.make} name ="make" id = "make" >
                <option value="" disabled defaultValue>Select Manufacturer</option>
                <option value = "acura" >Acura</option>
                <option value = "audi">Audi</option>
                <option value = "bmw">BMW</option>
                <option value = "cadillac">Cadillac</option>
                <option value = "chevrolet">Chevrolet</option>
                <option value = "chrysler">Chrysler</option>
                <option value = "dodge">Dodge</option>
                <option value = "ferrari">Ferrari</option>
                <option value = "gmc">GMC</option>
                <option value = "honda">Honda</option>
                <option value = "hyundai">Hyundai</option>
                <option value = "infiniti">Infiniti</option>
                <option value = "jaguar">Jaguar</option>
                <option value = "kia">Kia</option>
                <option value = "lamborghini">Lamborghini</option>
                <option value = "lexus">Lexus</option>
                <option value = "mazda">Mazda</option>
                <option value = "mclaren">McLaren</option>
                <option value = "mercedes-benz">Mercedes-Benz</option>
                <option value = "nissan">Nissan</option>
                <option value = "porsche">Porsche</option>
                <option value = "subaru">Subaru</option>
                <option value = "tesla">Tesla</option>
                <option value = "toyota">Toyota</option>
                <option value = "volkswagen">Volkswagen</option>
            </select>
        </div>
        <br></br>
        <div className = "fuel-type">Fuel Type
        <ul>
            <input type="radio" id="gas" name="fuel-type" value="gas" onChange = {handleChangeFuel} />
            <label for="fuel-type">Gas</label>
            <input type="radio" id="electricity" name="fuel-type" value="electricity"  onChange = {handleChangeFuel} />
            <label for="fuel-type">Electric</label>
            </ul>
        </div>
        <div className = "transmission">Transmission
            <ul>
            <input type="radio" id="automatic" name="transmission" value="a" onChange = {handleChangeTransmission}/>
            <label for="transmission">Automatic</label>
            <input type="radio" id="manual" name="transmission" value="m" onChange = {handleChangeTransmission}/>
            <label for="transmission">Manual</label>
            </ul>
        </div>           
        <div className = "drivetrain">Drivetrain
            <ul>
            <input type="radio" id="fwd" name="drivetrain" value="fwd" onChange = {handleChangeDrive}/>
            <label for="drivetrain">Front Wheel Drive</label>
            <input type="radio" id="rwd" name="drivetrain" value="rwd" onChange = {handleChangeDrive}/>
            <label for="drivetrain">Rear Wheel Drive</label>
            <input type="radio" id="awd" name="drivetrain" value="awd" onChange = {handleChangeDrive}/>
            <label for="drivetrain">All Wheel Drive</label>
            </ul>
        </div>
        <div className = "cylinders">Cylinders
            <ul>
            <input type="radio" id="3" name="cylinders" value="3" onChange = {handleChangeCylinders}/>
            <label for="cylinders">3 Cylinder</label>
            <input type="radio" id="3" name="cylinders" value="4" onChange = {handleChangeCylinders}/>
            <label for="cylinders">4 Cylinder</label>
            <input type="radio" id="3" name="cylinders" value="5" onChange = {handleChangeCylinders}/>
            <label for="cylinders">5 Cylinder</label>
            <input type="radio" id="3" name="cylinders" value="6" onChange = {handleChangeCylinders}/>
            <label for="cylinders">6 Cylinder</label>
            <input type="radio" id="3" name="cylinders" value="8" onChange = {handleChangeCylinders}/>
            <label for="cylinders">8 Cylinder</label>
            <input type="radio" id="3" name="cylinders" value="10" onChange = {handleChangeCylinders}/>
            <label for="cylinders">10 Cylinder</label>
            <input type="radio" id="3" name="cylinders" value="12" onChange = {handleChangeCylinders}/>
            <label for="cylinders">12 Cylinder</label>
            <input type="radio" id="any" name="cylinders" value="" onChange = {handleChangeCylinders}/>
            <label for="cylinders">Any</label>
            </ul>
        </div>
        <br></br>
        <button onClick = {getCar}>Online Search</button>
        <button onClick = {handleSearch}>Testing Filter Functionality</button>
        <button onClick = {handleReset}>Reset</button>
        </form>
        </nav>
    
    </div>
  )
}

export default Filter