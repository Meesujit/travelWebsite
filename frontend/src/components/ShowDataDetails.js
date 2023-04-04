import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowDataDetails(_props) {
  const [record, setRecord] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  

  useEffect(() => {   
    
    axios
      .get(`http://localhost:5000/api/records/${id}`)
      .then((res) => {
        setRecord(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowDataDetails');
        console.log('The error is -> ')
        console.log(err)
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:5000/api/records/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowDataDetails_deleteClick');
        console.log('The error is -> ')
        console.log(err)
      });
  };

  const recordItem = (
    <div>
      <table className='table table-hover table-light text-dark'>
        <tbody>
          <tr>
            <th scope='row '>1</th>
            <td>First Name</td>
            <td>{record.firstName}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Last Name</td>
            <td>{record.lastName}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>City</td>
            <td>{record.city}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Address</td>
            <td>{record.address}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Journey Begin Date</td>
            <td>{record.beginDate}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Arrivel Date</td>
            <td>{record.arivelDate}</td>
          </tr>
          <tr>
            <th scope='row'>7</th>
            <td>Price</td>
            <td>{record.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowDataDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/show-list/:id' className='btn btn-outline-light float-left'>
              Show Book List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Record Details</h1>
            <p className='lead text-center'>View record Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{recordItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(record._id);
              }}
            >
              Delete Book
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-book/${record._id}`}
              className='btn btn-outline-primary btn-lg btn-block'
            >
              Edit Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDataDetails;