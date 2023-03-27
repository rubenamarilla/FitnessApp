import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Grid, Typography } from "@mui/material";
import Graph from "../components/Graph";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Inicio = () => {
  const id = localStorage.getItem("id")
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const [pasos, setPasos] = useState(0)
  const [calorias, setCalorias] = useState(0)
  const [objetivoPasos, setObjetivoPasos] = useState(0)
  const [objetivoCalorias, setObjetivoCalorias] = useState(0)

  useEffect(() => {
    if (!localStorage.getItem("id")) {
      navigate("/registro/datos")
    }
  }, [navigate])

  const compareDate = () => {
    const now = new Date();    

    axios.get('http://localhost:8000/api/fitness/items', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].fecha === now.toLocaleDateString()) {
            setPasos(prevPasos => prevPasos + response.data[i].pasos)
            setCalorias(prevCalorias => prevCalorias + response.data[i].calorias)
          }
        }
      })
      .catch(error => {
        window.alert(error)
        console.error(error);
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/datos/get/${id}`, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    }).then(response => {
      setObjetivoPasos(response.data.objetivoPasos)
      setObjetivoCalorias(response.data.objetivoCalorias)
      compareDate()
    }).catch(err => {
      window.alert(err)
      console.log(err)
    })
    // eslint-disable-next-line
  }, [id, token])

  return (
    <>
      <CssBaseline />
      <Grid
        container
        sx={{ mt: "2rem" }}
        spacing={2}
        direction="row"
        alignItems="flex-start"
        justifyContent="space-evenly"
        xs={12}
      >
        {/* columna 1 */}
        <Grid
          item
          container
          spacing={2}
          direction="column"
          xs={6}
          alignItems="center"
          justifyContent="space-around"
          maxWidth="lg"
          minHeight="80vh"
          sx={{
            bgcolor: "#e8eaf6",
            borderRadius: "3px",
            boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"
          }}
        >
          <Grid
            item
            container
            direction={"row"}
            xs={12}
            alignItems="center"
            justifyContent="space-evenly"
          >
            {/* graficos */}
            <Grid item sx={{ width: 200, height: 200, }}>
              <Graph hecho={pasos / 2} hacer={objetivoPasos - (pasos / 2) < 0 ? 0 : objetivoPasos - (pasos / 2) } />
              <Typography align="center" component={"h2"} variant="h4">Pasos</Typography>
              <Typography align="center" component={"h2"} variant="h4">{pasos/2}</Typography>
            </Grid>
            <Grid item sx={{ width: 200, height: 200 }}>
              <Graph hecho={calorias / 2} hacer={objetivoCalorias - (calorias / 2) < 0 ? 0 : objetivoCalorias - (calorias / 2)} />
              <Typography align="center" component={"h2"} variant="h4">Calorías</Typography>
              <Typography align="center" component={"h2"} variant="h4">{calorias/2}</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems={"center"}
            justifyContent="space-evenly"
            spacing={3}
            xs={12}
          >
            <Grid item xs={12} sm={6}>
            </Grid>
            <Grid item xs={12} sm={6}>
            </Grid>
            
          </Grid>
        </Grid>
        {/* columna 2 */}
        <Grid item xs={6} maxWidth="lg" minHeight="80vh">
          <Grid container xs={12} spacing={2}>
            <Grid item xs={12}>
              <Typography component={"h2"} variant="h3" align="center" sx={{ width: "100%" }}>Centro de Actividades</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" fullWidth onClick={() => navigate("/inicio/actividad")}>Registrar actividad</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Inicio;
