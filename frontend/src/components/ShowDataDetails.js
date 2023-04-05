import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowDataDetails(props) {
  const [record, setRecord] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-meesujit-travelo-tabxmqtuw7m.ws-us93.gitpod.io/api/records/${id}`)
      .then((res) => {
        setRecord(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowDataDetails');
        console.log('The error is => ')
        console.error(err)
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`https://5000-meesujit-travelo-tabxmqtuw7m.ws-us93.gitpod.io/api/records/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowDataDetails_deleteClick');
        console.log('The error is => ')
        console.error(err)
      });
  };

  const RecordItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>first name</td>
            <td>{record.firstName}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Last name</td>
            <td>{record.lastName}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>city</td>
            <td>{record.city}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>address</td>
            <td>{record.address}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Begin Date</td>
            <td>{record.beginDate}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>arrivel Date</td>
            <td>{record.arivelDate}</td>
          </tr>
          <tr>
            <th scope='row'>7</th>
            <td>price</td>
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
            <Link to='/show-list' className='btn btn-outline-warning float-left'>
              Show Data List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'> Records</h1>
            <p className='lead text-center'>View Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{RecordItem}</div>
          <div className='col-md-4 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(record._id);
              }}
            >
              Delete Data
            </button>
          </div>
          <div className='col-md-4 m-auto'>
            <Link
              to={`/edit-data/${record._id}`}
              className='btn btn-outline-info btn-lg btn-block'
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