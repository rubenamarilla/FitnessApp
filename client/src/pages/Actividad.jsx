import React, { useState } from "react";
import { TextField, Button, Grid, CssBaseline, Container, MenuItem, Select, InputLabel } from "@mui/material";
import axios from "axios";

const Actividad = () => {
  const [datos, setDatos] = useState({
    pasos: undefined,
    calorias: undefined,
    actividad: "caminar"
  });
  const token = localStorage.getItem("token")

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const now = new Date();
    const actividad = {
      pasos: datos.pasos,
      calorias: datos.calorias,
      actividad: datos.actividad,
      fecha: now.toLocaleDateString(),
      hora: now.toLocaleTimeString(),
    };
    console.log(actividad);
    axios.post("http://localhost:8000/api/actividad/createactividad", actividad, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log(response.data);
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
              InputProps={{ type: "number" }}
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
              InputProps={{ type: "number" }}
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
              onChange={handleChange}
            >
              <MenuItem value="caminar">Caminar</MenuItem>
              <MenuItem value="correr">Correr</MenuItem>
              <MenuItem value="trotar">Trotar</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Registrar actividad
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Actividad;
