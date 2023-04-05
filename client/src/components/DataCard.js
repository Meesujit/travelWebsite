import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const DataCard = (props) => {
  const record = props.record



  return (
    <div className='info-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={ `/show-data/${record._id}` }>
            {record.city} 
          </Link>
        </h2> 
        <h3>{record.firstName}</h3> 
         <p>{record.lastName}</p>
        <p>{record.address} </p>
        <p>{record.beginDate} </p>
        <h3>{record.arivelDate} </h3>
        <h3>{record.price} </h3>        
      </div>
    </div>  
  )
}

export default DataCard