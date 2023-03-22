import React, { useEffect } from 'react'
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom'
import axios from 'axios'

const EditarHistorial = () => {

    const { id } = useParams();

    const [formData, setFormData] = useState({
        pasos: '',
        calorías: ''
    });

    useEffect(() => {
        axios.get('http://localhost:8000/api/test/' + id)
            .then(response => {
                setFormData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        axios.put('http://localhost:8000/api/test/' + id, formData)
    }

    return (

        <>

            <div className="container mt-5">
                <h1>Historial</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="pasos">Pasos:</label>
                        <input
                            type="number"
                            id="pasos"
                            name="pasos"
                            value={formData.pasos}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="calorías">Calorias:</label>
                        <input
                            type="number"
                            id="calorías"
                            name="calorías"
                            value={formData.calorías}
                            onChange={handleChange}
                        />
                    </div>

                    
                    <button className='btn'>Editar</button>

                </form>
                <Outlet />
            </div>
        </>
    )
}

export default EditarHistorial