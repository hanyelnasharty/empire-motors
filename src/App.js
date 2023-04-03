import { useState, useEffect  } from 'react'
import axios from 'axios'
import Cars from './components/Cars'
import Add from './components/Add'
import Edit from './components/Edit'
import './App.css'

const App = () => {
  const [cars, setCars] = useState([])

  const getCars = () => {
    axios.get('http://localhost:3000/cars')
    .then((response) => setCars(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    console.log(data)
    axios.post('http://localhost:3000/cars', data)
    .then((response) => {
      console.log(response)
      let newCars = [...cars, response.data]
      setCars(newCars)
    })
  }

  const handleDelete = (deletedCars) => {
    axios.delete('http://localhost:3000/cars/' + deletedCars._id)
    .then((response) => {
      let newCars = cars.filter((cars) => {
        return cars._id !== deletedCars._id
      })
      setCars(newCars)
    })
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/cars/' + data._id, data)
    .then((response) => {
      let newCars = setCars.map((cars) => {
        return cars._id !== data._id ? cars : data
      })
      setCars(newCars)
    })
  }

  useEffect(() => {
    getCars()
  }, [])

  return (
  <>
    <h1>Cars Showroom</h1>
    <Add handleCreate={handleCreate}/>
    <div className='container'>
    {cars.map((cars) => {
      return (
        <>
          <div className='home'>
            <Cars cars={cars} />
            <Edit cars={cars} handleEdit={handleEdit} />
            <button onClick={ () => {handleDelete(cars) } }>Delete</button>
          </div>
        </>
      )
    })}
    </div>
  </>
  )
}

export default App