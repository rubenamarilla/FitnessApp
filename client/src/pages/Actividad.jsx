import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import axios from "axios";

const Actividad = () => {
    const [pasos, setPasos] = useState(0);
    const [calorias, setCalorias] = useState(0);

    const handlePasosChange = (event) => {
        setPasos(event.target.value);
    };

    const handleCaloriasChange = (event) => {
        setCalorias(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const Actividad = {
            pasos: pasos,
            calorias: calorias,
        };
        axios.post("http://localhost:8000/api/test", Actividad)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
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
    );
};

export default Actividad;
