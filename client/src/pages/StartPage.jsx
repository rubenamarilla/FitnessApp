import { Button, CssBaseline, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom"

// la primera página que el usuario ve, va estar el boton de login y registro
// y el logo o alguna frase con información de nuestra página
const StartPage = () => {
  const Navigate = useNavigate()
  return (
    <>
      <CssBaseline />
      <Grid container xs={12} direction={"row"} alignItems="center" sx={{ height: "100vh", width: "100vw", bgcolor: "whitesmoke" }}>

        <Grid item xs={6} sx={{p: 8}}>
          <Typography component="body1" variant="body1" align='justifyj'>FitnessApp es una herramienta completa para que los usuarios puedan hacer seguimiento de sus actividades deportivas y llevar un control de su progreso. Los usuarios pueden registrarse e iniciar sesión para acceder a su perfil personalizado, donde pueden guardar sus actividades deportivas, ver su historial de entrenamientos, visualizar su progreso a través de estadísticas como los pasos dados y las calorías quemadas, y también establecer objetivos de entrenamiento para seguir motivados.</Typography>
        </Grid>

        <Grid item xs={6} >
          <Grid container direction="column" justifyContent="center" alignItems="center" sx={{height: "100vh"}}>
            <Grid item mb={6}>
              <Typography component="h1" variant="h1">FitnessApp</Typography>
            </Grid>

            <Grid item container justifyContent={"space-evenly"}>
              <Grid item>
                <Button variant='contained' onClick={() => Navigate("/login")}>Iniciar Sesión</Button>
              </Grid>
              <Grid item>
                <Button color="primary" variant='outlined' onClick={() => Navigate("/registro")}>Registrarse</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default StartPage