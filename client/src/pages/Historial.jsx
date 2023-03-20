import React from "react";
import { Container, CssBaseline, Grid, Typography } from "@mui/material";

const Historial = () => {
  const historial = [
    {
      pasos: 5202,
      calorías: 231,
      fecha: "12/01/23",
      hora: "12:36",
    },
    {
      pasos: 5202,
      calorías: 231,
      fecha: "12/01/23",
      hora: "12:36",
    },
    {
      pasos: 5202,
      calorías: 231,
      fecha: "12/01/23",
      hora: "12:36",
    },
    {
      pasos: 5202,
      calorías: 231,
      fecha: "12/01/23",
      hora: "12:36",
    },
    {
      pasos: 5202,
      calorías: 231,
      fecha: "12/01/23",
      hora: "12:36",
    },
    {
      pasos: 5202,
      calorías: 231,
      fecha: "12/01/23",
      hora: "12:36",
    },
  ];
  return (
    <>
      <CssBaseline />
      <Grid
        container
        minWidth="xl"
        minHeight="md"

        direction="column"
        sx={{ bgcolor: "gray", pt: "1rem", paddingBottom: "1rem", padding: "1rem" }}
      >
        {historial.map((usuario, idx) => (
          <Grid
            container
            item
            alignItems={"center"}
            xs={12}
            sx={{ bgcolor: "whitesmoke", marginBottom: "1rem", padding: "0.5rem" }}
          >
            <Grid item xs={4}>
              <Typography component="h5" variant="h5">
                Pasos
              </Typography>
              <Typography component="h3" variant="h3">
                {usuario.pasos}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography component="h5" variant="h5">
                Calorías
              </Typography>
              <Typography component="h3" variant="h3">
                {usuario.calorías}
              </Typography>
            </Grid>
            <Grid item xs={4}>
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
