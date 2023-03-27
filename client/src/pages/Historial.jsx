import React, { useEffect, useState } from "react";
import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Historial = () => {
    const token = localStorage.getItem("token")
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/fitness/items', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                window.alert(error)
                console.error(error);
            });
    }, [token]);

    return (
        <>
            <CssBaseline />
            <Grid
                container
                maxWidth="xl"
                minHeight="md"

                direction="column"
                sx={{ pt: "1rem", paddingBottom: "1rem", padding: "1rem" }}
            >
                {data.map((usuario, idx) => (
                    <Grid
                        container
                        item
                        alignItems={"center"}
                        xs={12}
                        sx={{ bgcolor: "white", marginBottom: "1rem", padding: 3, boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)" }}
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
                                {usuario.calorias}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography component="h5" variant="h5">
                                Actividad
                            </Typography>
                            <Typography component="h3" variant="h4">
                                {usuario.actividad}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography component="h3" variant="h6">
                                {usuario.fecha}
                            </Typography>
                            <Typography component="h3" variant="h6">
                                {usuario.hora}
                            </Typography>
                            <Button color="primary" variant="contained" onClick={() => navigate(`/inicio/historial/edit/${usuario._id}`)}>
                                Editar
                            </Button>
                        </Grid>

                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Historial;