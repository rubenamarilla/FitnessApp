import { Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const EditarPerfil = () => {
  const [usuario, setUsuario] = useState({
    usuario: "Lucia López",
    foto: "direccion",
    email: "lucia@example.com",
    objetivoPasos: 8000,
    objetivoCalorías: 600
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usuario)
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xs"
        sx={{ bgcolor: "#f6f6f6", p: 3, display: 'flex', minHeight: 400, alignItems: "center", flexDirection: "column", justifyContent: "space-evenly", boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)" }}
      >
        <Typography component={"h3"} variant="h4">Editar</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="objetivoPasos"
                name="objetivoPasos"
                label="Objetivo pasos"
                fullWidth
                value={usuario.objetivoPasos}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="objetivoCalorías"
                name="objetivoCalorías"
                label="Objetivo calorías"
                fullWidth
                value={usuario.objetivoCalorías}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Editar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  )
}

export default EditarPerfil