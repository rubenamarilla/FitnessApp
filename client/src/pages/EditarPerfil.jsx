import { Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditarPerfil = () => {
  const navigate = useNavigate()
  const id = localStorage.getItem("id")
  const token = localStorage.getItem("token")
  const [usuario, setUsuario] = useState({
    peso: 0,
    altura: 0,
    objetivoCalorias: 0,
    objetivoPasos: 0
  })

  useEffect(() => {
    axios.get(`http://localhost:8000/api/datos/get/${id}`, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    }).then(response => {
      setUsuario(response.data)
    }).catch(err => {
      console.log(err)
      window.alert(err)
    })
  }, [id, token])

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = {
      peso: parseInt(usuario.peso),
      altura: parseInt(usuario.altura),
      objetivoPasos: parseInt(usuario.objetivoPasos),
      objetivoCalorias: parseInt(usuario.objetivoCalorias)
    }
    console.log(usuario)
    axios.put(`http://localhost:8000/api/datos/edit/${id}`, datos, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    }).then(response=> {
      navigate("/inicio/perfil")
    }).catch(err => {
      window.alert(err)
    })
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
                InputProps={{ type: "number" }}
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
                InputProps={{ type: "number" }}
                required
                id="objetivoCalorias"
                name="objetivoCalorias"
                label="Objetivo calorías"
                fullWidth
                value={usuario.objetivoCalorias}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{ type: "number" }}
                required
                id="peso"
                name="peso"
                label="Peso"
                fullWidth
                value={usuario.peso}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{ type: "number" }}
                required
                id="altura"
                name="altura"
                label="Altura"
                fullWidth
                value={usuario.altura}
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