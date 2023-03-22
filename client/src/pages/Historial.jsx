import React from "react";
import {  CssBaseline, Grid, Typography } from "@mui/material";

const Historial = () => {
  const historial = [
    {
      pasos: 5202,
      calorías: 231,
      fecha: "12/01/23",
      hora: "12:36",
      actividad: "correr"
    },
    {
      pasos: 5202,
      calorías: 231,
      fecha: "12/01/23",
      hora: "12:36",
      actividad: "correr"
    },
    {
      pasos: 5202,
      calorías: 231,
      fecha: "12/01/23",
      hora: "12:36",
      actividad: "correr"
    },

  ];
  return (
    <>
      <CssBaseline />
      <Grid
        container
        maxWidth="xl"
        minHeight="md"

        direction="column"
        sx={{ bgcolor: "#f6f6f6", pt: "1rem", paddingBottom: "1rem", padding: "1rem" }}
      >
        {historial.map((usuario, idx) => (
          <Grid
            container
            item
            alignItems={"center"}
            xs={12}
            sx={{ bgcolor: "white", marginBottom: "1rem", padding: "0.5rem", boxShadow: "-2px 3px 8px -5px black" }}
          >
            <Grid item xs={3}>
              <Typography component="h5" variant="h5">
                Pasos
              </Typography>
              <Typography component="h3" variant="h3">
                {usuario.pasos}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography component="h5" variant="h5">
                Calorías
              </Typography>
              <Typography component="h3" variant="h3">
                {usuario.calorías}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography component="h5" variant="h5">
                Actividad
              </Typography>
              <Typography component="h3" variant="h3">
                {usuario.actividad}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography component="h3" variant="h5">
                {usuario.fecha}
              </Typography>
              <Typography component="h3" variant="h5">
                {usuario.hora}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Historial;
