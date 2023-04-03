import { useState } from 'react'

const Add = (props) => {
    const [cars, setCars] = useState({year: 0, make: '', model: '', color: '', miles: 0, image: '', price: 0, type: ''})


    const handleChange = (event) => {
        setCars({...cars, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(cars)
    }




    return (
        <>
        <details>
            <summary className='add'>Add Cars</summary>
            <form onSubmit={handleSubmit}>
                <label htmlFor="make">Make: </label>
                <input type="text" name='make' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="model">Model: </label>
                <input type="text" name='model' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="year">Year: </label>
                <input type="number" name='year' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="miles">Miles: </label>
                <input type="number" name='miles' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="color">Color: </label>
                <input type="text" name='color' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="price">Price: </label>
                <input type="number" name='price' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="type">Type: </label>
                <input type="text" name='type' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="image">Image: </label>
                <input type="text" name='image' onChange={handleChange} />
                <br/>
                <br/>
                <input type="submit"/>
            </form>
            </details>
        </>
    )
}

export default Add