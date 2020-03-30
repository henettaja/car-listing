import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'


export default function Carlist () {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars();
    }, []);

    const getCars = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
            .then(response => response.json())
            .then(data => setCars(data._embedded.cars))
            .catch(err => console.error(err))
    };

    const columns = [
        {
            Header: 'Brand',
            accessor: 'brand'
        },
        {
            Header: 'Model',
            accessor: 'model'
        }
    ]

    return (
        <div className="App">

            <ReactTable data={cars} columns={columns}/>

        </div>
    )
}