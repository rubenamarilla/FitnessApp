import React, { useState } from "react";
import { TextField, Button, Grid, CssBaseline, Container } from "@mui/material";
import axios from "axios";

const Actividad = () => {
    const [pasos, setPasos] = useState();
    const [calorias, setCalorias] = useState();
    const token = localStorage.getItem("token")

    const handlePasosChange = (event) => {
        setPasos(event.target.value);
    };

    const handleCaloriasChange = (event) => {
        setCalorias(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const now = new Date();
        const actividad = {
            pasos: pasos,
            calorias: calorias,
            fecha: now.toLocaleDateString(),
            hora: now.toLocaleTimeString(),
        };
        console.log(actividad);
        axios.post("http://localhost:8000/api/actividad/createactividad", actividad, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="pasos"
                            name="pasos"
                            label="Pasos realizados"
                            fullWidth
                            value={pasos}
                            onChange={handlePasosChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="calorias"
                            name="calorias"
                            label="Calorías quemadas"
                            fullWidth
                            value={calorias}
                            onChange={handleCaloriasChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                            Registrar actividad
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Actividad;
