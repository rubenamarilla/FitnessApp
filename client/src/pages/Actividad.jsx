import React, { useState } from "react";
import { TextField, Button, Grid, CssBaseline, Container, MenuItem, Select, InputLabel } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Actividad = () => {
  const navigate = useNavigate()
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

  const handleSelect = (value) => {
    setDatos({ ...datos, actividad: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const now = new Date();
    const actividad = {
      pasos: parseInt(datos.pasos),
      calorias: parseInt(datos.calorias),
      actividad: datos.actividad,
      fecha: now.toLocaleDateString(),
      hora: now.toLocaleTimeString(),
    };
    axios.post("http://127.0.0.1:8000/api/fitness/create", actividad, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    })
      .then((response) => {
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
