import { Avatar, Button, Container, CssBaseline, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom"

const Perfil = () => {
  const navigate = useNavigate()
  const usuario = {
    usuario: "Lucia López",
    foto: "direccion",
    email: "lucia@example.com",
    objetivoPasos: 8000,
    objetivoCalorias: 600,
    peso: 72,
    altura: 176
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs" sx={{ bgcolor: "#f6f6f6", p: 3, display: 'flex', minHeight: 400, alignItems: "center", flexDirection: "column", justifyContent: "space-evenly", boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)" }}>
        <Avatar alt={usuario.nombre} src={usuario.foto} sx={{ width: 120, height: 120 }} />
        <Typography component={"h3"} variant="h4">{usuario.usuario}</Typography>
        <Typography component={"h5"} variant="body1" sx={{mb: 2}}>{usuario.email}</Typography>
        <Typography component={"h3"} variant="h6">Peso</Typography>
        <Typography component={"h5"} variant="body1" sx={{mb: 2}}>{usuario.peso} kg</Typography>
        <Typography component={"h3"} variant="h6">Altura</Typography>
        <Typography component={"h5"} variant="body1" sx={{mb: 2}}>{usuario.altura} cm</Typography>
        <Typography component={"h3"} variant="h6">Objetivo en pasos</Typography>
        <Typography component={"h5"} variant="body1" sx={{mb: 2}}>{usuario.objetivoPasos}</Typography>
        <Typography component={"h3"} variant="h6">Objetivo en calorías</Typography>
        <Typography component={"h5"} variant="body1">{usuario.objetivoCalorias}</Typography>
        <Container>
          <Grid container xs={12} spacing={2} justifyContent="center" alignItems={"center"} sx={{ m: "auto" }}>
            <Grid item xs={12} sm={6}>
              <Button variant='outlined' onClick={() => navigate("/inicio/perfil/editar")}>Editar Usuario</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button color='error' variant='outlined'>Cerrar Sesión</Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  )
}

export default Perfil