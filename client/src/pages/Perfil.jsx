import { Avatar, Button, Container, CssBaseline, Typography } from '@mui/material'
import React from 'react'

const Perfil = () => {
  const usuario = {
    nombre: "Lucia",
    foto: "direccion",
    email: "lucia@example.com"
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs" sx={{ bgcolor: "#f6f6f6", p: 3, display: 'flex', minHeight: 400, alignItems: "center", flexDirection: "column", justifyContent: "space-evenly", boxShadow: "-2px 3px 8px -5px black" }}>
        <Avatar alt={usuario.nombre} src={usuario.foto} sx={{ width: 120, height: 120 }} />
        <Typography component={"h3"} variant="h4">{usuario.nombre}</Typography>
        <Typography component={"h5"} variant="body1">{usuario.email}</Typography>
        <Button color='error' variant='outlined'>Cerrar Sesión</Button>
      </Container>
    </>

  )
}

export default Perfil