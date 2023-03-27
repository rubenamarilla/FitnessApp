import { Avatar, Button, Container, CssBaseline, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const Perfil = () => {
  const id = localStorage.getItem("id")
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const [datos, setDatos] = useState({})
  const [usuario, setUsuario] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/datos/get/${id}`, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    }).then(response => {
      setDatos(response.data)
    }).catch(err => {
      console.log(err)
      window.alert(err)
    })

    axios.get(`http://localhost:8000/api/users/user`, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    }).then(response => {
      setUsuario(response.data)
    }).catch(err=> {
      window.alert(err)
    })
  }, [id, token])


  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs" sx={{ bgcolor: "#f6f6f6", p: 3, display: 'flex', minHeight: 400, alignItems: "center", flexDirection: "column", justifyContent: "space-evenly", boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)" }}>
        <Avatar alt={usuario.firstName} src={usuario.lastName} sx={{ width: 120, height: 120, mb: 2 }} />
        <Typography component={"h3"} variant="h4" >{usuario.firstName} {usuario.lastName}</Typography>
        <Typography component={"h5"} variant="body1" sx={{ mb: 2 }}>{usuario.email}</Typography>
        <Typography component={"h3"} variant="h6">Peso</Typography>
        <Typography component={"h5"} variant="body1" sx={{ mb: 2 }}>{datos.peso} kg</Typography>
        <Typography component={"h3"} variant="h6">Altura</Typography>
        <Typography component={"h5"} variant="body1" sx={{ mb: 2 }}>{datos.altura} cm</Typography>
        <Typography component={"h3"} variant="h6">Objetivo de pasos diarios</Typography>
        <Typography component={"h5"} variant="body1" sx={{ mb: 2 }}>{datos.objetivoPasos}</Typography>
        <Typography component={"h3"} variant="h6">Objetivo de calorías diarias</Typography>
        <Typography component={"h5"} variant="body1">{datos.objetivoCalorias}</Typography>
        <Container>
          <Grid container xs={12} justifyContent="center" alignItems={"center"} sx={{ m: "auto", mt: 2 }}>
            <Grid item xs={12}>
              <Button variant='outlined' fullWidth onClick={() => navigate("/inicio/perfil/editar")}>Editar Usuario</Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  )
}

export default Perfil