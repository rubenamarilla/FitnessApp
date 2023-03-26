import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Container } from '@mui/system';
import { Button, CssBaseline, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const EditarHistorial = () => {
  const token = localStorage.getItem("token")
  const { id } = useParams();
  const navigate = useNavigate()
  const [datos, setDatos] = useState({
    pasos: 0,
    calorias: 0,
    actividad: ""
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/fitness/item/${id}`, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    }).then(response => {
      setDatos(response.data)
    })
  }, [id, token])

  const handleSelect = (value) => {
    setDatos({ ...datos, actividad: value })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:8000/api/fitness/${id}`, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    })
      .then(response => {
        navigate("/inicio/historial")
      })
      .catch(error => {
        window.alert(error)
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const actividad = {
      pasos: parseInt(datos.pasos),
      calorias: parseInt(datos.calorias),
      actividad: datos.actividad,
      fecha: datos.fecha,
      hora: datos.hora,
    };
    axios.put(`http://127.0.0.1:8000/api/fitness/${id}`, actividad, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    })
      .then((response) => {
        console.log(response.data);
        navigate("/inicio/historial")
      })
      .catch((error) => {
        window.alert(error)
        console.log(error)
      });
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="pasos"
              name="pasos"
              label="Pasos realizados"
              fullWidth
              value={datos.pasos}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="calorias"
              name="calorias"
              label="Calorías quemadas"
              fullWidth
              value={datos.calorias}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel id="actividad-label">Actividad</InputLabel>
            <Select
              required
              id="actividad"
              labelId="actividad-label"
              fullWidth
              value={datos.actividad}
              onChange={(e) => handleSelect(e.target.value)}
            >
              <MenuItem value="caminar">Caminar</MenuItem>
              <MenuItem value="correr">Correr</MenuItem>
              <MenuItem value="trotar">Trotar</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Actualizar
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Button variant="contained" color="error" fullWidth onClick={handleDelete}>
              Eliminar actividad
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default EditarHistorial