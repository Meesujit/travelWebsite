import React, {useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DataCard from './DataCard'
function ShowDataList() {
    const [records, setRecords] = useState([])

    useEffect(() => {
        axios 
        .get(`/api/records`)
        .then((res)=> {
            setRecords(res.data)
        })
        .catch((err) => {
            console.log('Error From ShowDataList')
            console.log(err)
            
        })
    },[])

    const recordList =
        records.length === 0
        ? 'there is no data record! '
        : records.map((record, k) => <DataCard record={record} key={k} />)

  return (
    <div className="ShowDataList">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <br />
                    <h2 className="display-4 text-center">Records List</h2>
                </div>
                <div className="col-md-11">
                    <Link className="btn btn-outline-warning float-right" to='/create-user'>
                        + Add New Record
                    </Link>
                    <br />
                    <br />
                    <hr />
                </div>
            </div>
            <div className="list">{recordList}</div>
        </div>
    </div>
  )
}
export default ShowDataList