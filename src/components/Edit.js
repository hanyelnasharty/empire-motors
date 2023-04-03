import {useState} from 'react'

const Edit = (props) => {
  const [cars, setCars] = useState({...props.cars})

  const handleChange = (event) => {
    setCars({...cars, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleEdit(cars)
   }

  return(
    <>
      <details>
        <summary id='edit'>Edit Car</summary>
        <form onSubmit={handleSubmit}>
                <label htmlFor="make">Make: </label>
                <input type="text" name='make' onChange={handleChange} value={cars.make}/>
                <br/>
                <br/>
                <label htmlFor="model">Model: </label>
                <input type="text" name='model' onChange={handleChange} value={cars.model}/>
                <br/>
                <br/>
                <label htmlFor="year">Year: </label>
                <input type="number" name='year' onChange={handleChange} value={cars.year}/>
                <br/>
                <br/>
                <label htmlFor="miles">Miles: </label>
                <input type="number" name='miles' onChange={handleChange} value={cars.miles}/>
                <br/>
                <br/>
                <label htmlFor="color">Color: </label>
                <input type="text" name='color' onChange={handleChange} value={cars.color}/>
                <br/>
                <br/>
                <label htmlFor="price">Price: </label>
                <input type="text" name='price' onChange={handleChange} value={cars.price}/>
                <br/>
                <br/>
                <label htmlFor="type">Type: </label>
                <input type="text" name='type' onChange={handleChange} value={cars.type}/>
                <br/>
                <br/>
                <label htmlFor="image">Image: </label>
                <input type="text" name='image' onChange={handleChange} value={cars.image}/>
                <br/>
                <br/>
                <input id='submit' type="submit"/>
            </form>
      </details>
    </>
  )
}

export default Edit