import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

const Inicio = () => {
  return (
    <>
      <CssBaseline />
      <Grid container sx={{mt: "1rem"}} spacing={2} direction="row" alignItems="flex-start" justifyContent="space-evenly" xs={12}>
        <Grid item xs={5} maxWidth="lg" minHeight="80vh" sx={{ bgcolor: "#e8eaf6", borderRadius: "20px" }}>
          <Typography component="h2" variant="h3">
            Titulo
          </Typography>
          {/* graficos */}
          <Typography>
            Tus metas diarias
          </Typography>
        </Grid>
        <Grid item xs={5} maxWidth="lg" minHeight="80vh">
          <Typography >
            Titulo
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Inicio;
