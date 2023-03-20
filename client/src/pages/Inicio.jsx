import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Typography } from "@mui/material";

const Inicio = () => {
  const dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"];
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
          justifyContent="space-evenly"
          maxWidth="lg"
          minHeight="80vh"
          sx={{
            bgcolor: "#e8eaf6",
            borderRadius: "3px",
            boxShadow: "-2px 3px 8px -5px black",
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
            <Grid item>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "rebeccapurple",
                  borderRadius: "50%",
                }}
              ></div>
            </Grid>
            <Grid item>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "rebeccapurple",
                  borderRadius: "50%",
                }}
              ></div>
            </Grid>
          </Grid>

          <Grid
            item
            container
            sx={{ bgcolor: "white", width: "70%" }}
            direction="column"
            alignItems={"center"}
          >
            <Grid item>
              <Typography variant="h4" component="h4">
                Tus metas diarias
              </Typography>
            </Grid>

            <Grid item container>
              {dias.map((dia, idx) => (
                <Grid
                  item
                  container
                  direction="column"
                  key={idx}
                  alignItems={"center"}
                >
                  <Grid item>✔</Grid>
                  <Grid item>{dia}</Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        {/* columna 2 */}
        <Grid item xs={6} maxWidth="lg" minHeight="80vh">
          <Typography>Titulo</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Inicio;
