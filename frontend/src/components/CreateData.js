import React, {useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css'
import { useNavigate } from "react-router-dom";

const CreateData = (props) => {

    const navigate = useNavigate();
    const [record, setRecord] = useState({

      firstName: '',
      lastName: '',
      city: '',
      address: '',                    
      beginDate: '',
      arivelDate: '',
      price: '',

    });

    const onChange = (e) => {
        setRecord({ ...record, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();

        axios
        .post('https://5000-meesujit-travelo-tabxmqtuw7m.ws-us93.gitpod.io/api/records', record)
         .then((res) => {
                setRecord({
                    firstName: '',
                    lastName: '',
                    city: '',
                    address: '',                    
                    beginDate: '',
                    arivelDate: '',
                    price: '',

                });
        
                // Push to /
                navigate('/');
              })
              .catch((err) => {
                console.log('Error in InsertRecord!');
                console.log('The error is -> ')
                console.log(err)
              });
          };

          return(
            <div className='CreateData'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/show-list' className='btn btn-outline-light float-left'>
              Show Entry Data
            </Link>

            <Link to='/' className='btn btn-outline-light float-right'>
             Home Page 
            </Link>

          </div>

          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Destination Details</h1>
            <p className='lead text-center'>Information of Destination</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='First Name'
                  name='firstName'
                  className='form-control'
                  value={record.firstName}
                  onChange={onChange}
                />
              </div>
              

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Last Name'
                  name='lastName'
                  className='form-control'
                  value={record.lastName}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='City'
                  name='city'
                  className='form-control'
                  value={record.city}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Address'
                  name='address'
                  className='form-control'
                  value={record.address}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='Insert Journey begin Date'
                  name='beginDate'
                  className='form-control'
                  value={record.beginDate}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='Insert Journey arivel Date'
                  name='arivelDate'
                  className='form-control'
                  value={record.arivelDate}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Enter Price'
                  name='price'
                  className='form-control'
                  value={record.price}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-light btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
          );
}

export default CreateData;