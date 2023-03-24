import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Grid, Typography } from "@mui/material";
import Graph from "../components/Graph";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate()
  const dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"];
  const [datos, setDatos] = useState({
    pasos: 1200,
    objetivoPasos: 8000,
    calorías: 500,
    objetivoCalorías: 1200
  })
  useEffect(() => {
    console.log("llamada a la api para los datos")
  }, [])

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
            alignItems="flex-start"
            justifyContent="space-evenly"
          >
            {/* graficos */}
            <Grid item sx={{ width: 200, height: 200, }}>
              <Graph hecho={datos.pasos} hacer={datos.objetivoPasos - datos.pasos} />
              <Typography align="center" component={"h2"} variant="h4">Pasos</Typography>
            </Grid>
            <Grid item sx={{ width: 200, height: 200 }}>
              <Graph hecho={datos.calorías} hacer={datos.objetivoCalorías - datos.calorías} />
              <Typography align="center" component={"h2"} variant="h4">Calorías</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sx={{ bgcolor: "white", width: "70%", boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", p: 1 }}
            direction="column"
            alignItems={"center"}
            justifyContent="space-evenly"
            spacing={3}
            xs={12}
          >
            <Grid item xs={12}>
              <Typography variant="h4" component="h4">
                Tus metas diarias
              </Typography>
            </Grid>
            <Grid item direction={"row"} container xs={12}>
              {dias.map((dia, idx) => (
                <Grid container direction="column" key={idx} alignItems={"center"} xs={12} sm={1.6}>
                  <Grid item>✔</Grid>
                  <Grid item>{dia}</Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        {/* columna 2 */}
        <Grid item xs={6} maxWidth="lg" minHeight="80vh">
          <Grid container xs={12}>
            <Grid item xs={12}>
              <Typography component={"h2"} variant="h3" align="center" sx={{ width: "100%" }}>Centro de Actividades</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth onClick={() => navigate("/inicio/actividad")}>Registrar actividad</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Inicio;
