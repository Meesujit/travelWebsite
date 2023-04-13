import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

function UpdateDataInfo() {
    const [record, setRecord] = useState({
      firstName: '',
      lastName: '',
      city: '',
      address: '',                    
      beginDate: '',
      arivelDate: '',
      price: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`/api/records/${id}`)
             .then((res) => {
                setRecord({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    city: res.data.city,
                    address: res.data.address,
                    beginDate: res.data.beginDate,
                    arivelDate: res.data.arivelDate,
                    price: res.data.price,
                })
            })
            .catch((err) => {
                console.log('Error from UpdateDataInfo GET request');
                console.log(err)
                console.error(err)
            })
    },[id]);

    
    const onChange = (e) => {
        setRecord({ ...record, [e.target.name]: e.target.value});
    };
    
    const onSubmit =(e) => {
        e.preventDefault();
   

    const data = {
        firstName: record.firstName,
        lastName: record.lastName,
        city: record.city,
        address: record.address,
        beginDate: record.beginDate,
        arivelDate: record.arivelDate,
        price: record.price,
    };

    axios
        .put(`/api/records/${id}`, data)
        .then((res) => {
            navigate(`/show-data/${id}`);
        })
        .catch((err) => {
            console.log('Error in UpdateDataInfo PUT request -> ');
            console.log('this is error->')
            console.error(err)
        });

    };
    
    return (
        <div className='UpdateDataInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/show-list' className='btn btn-outline-light float-left'>
              Show Data List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Data</h1>
            <p className='lead text-center'>Update Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='firstName'>Frist Name</label>
              <input
                type='text'
                placeholder='Frist Name'
                name='firstName'
                className='form-control'
                value={record.firstName}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                placeholder='Enter Last Name'
                name='lastName'
                className='form-control'
                value={record.lastName}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='city'>Depature City</label>
              <input
                type='text'
                placeholder='Enter City'
                name='city'
                className='form-control'
                value={record.city}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='address'>Destination City</label>
              <textarea
                type='text'
                placeholder='Enter the Address'
                name='address'
                className='form-control'
                value={record.address}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='begin_date'>Journey Begin Date</label>
              <input
                type='date'
                placeholder='Begin Date'
                name='begin_date'
                className='form-control'
                value={record.beginDate}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='arrivel_date'>Journey End Date</label>
              <input
                type='date'
                placeholder=' Date'
                name='arrivel_date'
                className='form-control'
                value={record.arivelDate}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='price'>Price</label>
              <input
                type='number'
                placeholder='Enter Price'
                name='price'
                className='form-control'
                value={record.price}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-light btn-lg btn-block'
            >
              Update Data
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}

export default UpdateDataInfo