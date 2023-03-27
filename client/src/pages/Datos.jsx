import { Button, Container, CssBaseline, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Datos = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const [datos, setDatos] = useState({
    peso: undefined,
    altura: undefined,
    objetivoPasos: 4000,
    objetivoCalorias: 1500
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = {
      peso: parseInt(datos.peso),
      altura: parseInt(datos.altura),
      objetivoPasos: datos.objetivoPasos,
      objetivoCalorias: datos.objetivoCalorias
    }
    axios.post("http://localhost:8000/api/datos/createdatos", form, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    }).then(response => {
      localStorage.setItem("id", response.data._id)
      navigate("/inicio")
    }).catch(err => { 
      window.alert(err)
      console.log(err)
     }
    )
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatos({ ...datos, [name]: value });
  };

  return (
    <Container maxWidth="xs" sx={{ height: '100vh', display: 'flex', justifyContent: "center", alignItems: "center" }}>
      <CssBaseline />
      <Grid component="form" onSubmit={handleSubmit} container xs={12} spacing={2}>
        <Grid item xs={12}>
          <Typography component="h2" variant="h4">
            Un paso más...
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            inputProps={{ type: "number" }}
            required
            fullWidth
            name="peso"
            id="peso"
            label="Peso"
            variant="filled"
            placeholder='Ingrese un valor en kilogramos'
            value={datos.peso}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            inputProps={{ type: "number" }}
            required
            fullWidth
            name="altura"
            id="altura"
            label="Altura"
            variant="filled"
            placeholder='Ingrese un valor en centímetros'
            value={datos.altura}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography component="h4" variant="body1">Objetivo de pasos diarios</Typography>
          <Select
            label="Objetivo de pasos diarios"
            fullWidth
            name="objetivoPasos"
            id="objetivoPasos"
            variant="filled"
            value={datos.objetivoPasos}
            onChange={handleChange}
          >
            <MenuItem value={4000}>4000</MenuItem>
            <MenuItem value={5000}>5000</MenuItem>
            <MenuItem value={6000}>6000</MenuItem>
            <MenuItem value={7000}>7000</MenuItem>
            <MenuItem value={8000}>8000</MenuItem>
            <MenuItem value={9000}>9000</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Typography component="h4" variant="body1">Objetivo de calorías diarias</Typography>
          <Select
            fullWidth
            name="objetivoCalorias"
            id="objetivoCalorias"
            variant="filled"
            value={datos.objetivoCalorias}
            onChange={handleChange}
          >
            <MenuItem value={1000}>1000</MenuItem>
            <MenuItem value={1500}>1500</MenuItem>
            <MenuItem value={3000}>3000</MenuItem>
            <MenuItem value={4500}>4500</MenuItem>
            <MenuItem value={6000}>6000</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth type="submit" variant="contained">Listo</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Datos