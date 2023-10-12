import { useState } from "react"
import "./CarsPage.css"

const CarsPage = () => {

 
  
  //Main form handler
  const formSubmitHandler = (event) => {
    event.preventDefault()

    let vehicleColor = color
    if(vehicleColor === 'Other'){
      vehicleColor = otherColor
    }

    const vehicle = {
      brand: brand,
      model: model,
      engine: engine,
      price,
      kilometers,
      color: vehicleColor
      // image
    }
    console.log(vehicle)
  }


  //Use states
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [engine, setEngine] = useState('Eletric')
  const [price, setPrice] = useState(0)
  const [kilometers, setKilometers] = useState(0)
  const [color, setColor] = useState('black')
  const [otherColor, setOtherColor] = useState('')

  // const [image, setImage] = useState('')


  //Input Handler functions
  const brandInputHandler = event => setBrand(event.target.value)
  const modelInputHandler = event => setModel(event.target.value)
  const engineSelectHandler = event => setEngine(event.target.value)
  const priceInputHandler = event => setPrice(event.target.value)
  const kilometersInputHandler = event => setKilometers(event.target.value)
  const colorSelectHandler = event => setColor(event.target.value)
  const otherColorHandler = event => setOtherColor(event.target.value)
  // const imageSelectHandler = event => setImage(event.target.value)













  return (
    <form id="cars-form" onSubmit={formSubmitHandler}>

      <div className="form-control">
        <label htmlFor="brand">Enter Car Brand</label>
        <input type="text" id="brand" name="brand" value={brand} onChange={brandInputHandler} />
      </div>

      <div className="form-control">
        <label htmlFor="model">Enter Car Model</label>
        <input type="text" id="model" name="model" value={model} onChange={modelInputHandler} />
      </div>

      <div className="form-control">
        <label htmlFor="engine">Select Engine</label>
        <select id="engine" name="engine" value={engine} onChange={engineSelectHandler}>
          <option value="Eletric">Eletric</option>
          <option value="Diesel">Diesel</option>
          <option value="Petrol">Petrol</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="price">Enter Car Price</label>
        <input type="number" id="price" name="price" value={price} onChange={priceInputHandler} />
      </div>

      <div className="form-control">
        <label htmlFor="kilometers">Enter Kilometers</label>
        <input type="number" id="kilometers" name="kilometers" value={kilometers} onChange={kilometersInputHandler} />
      </div>

      <div className="form-control">
        <label htmlFor="color">Select Color</label>
        <select id="color" name="color" value={color} onChange={colorSelectHandler}>
          <option value="Black">Black</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Silver">Silver</option>
          <option value="White">White</option>
          <option value="Special blue">Special Blue</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {color === 'Other' &&(
        <div className="form-control">
          <label htmlFor="other-color">Enter Car Color</label>
          <input type="text" id="other-color" name="other-color" value={otherColor} onChange={otherColorHandler} />
        </div>
      )}




      {/* <div className="form-control">
        <label htmlFor="image">Enter Car Image</label>
        <input type="number" id="image" name="image" value={image} onChange={imageInputHandler} />
      </div> */}

      <input id="main-submit" type="submit" value="Submit" />

    </form>
  )
}

export default CarsPage