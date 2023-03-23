import React, { useEffect, useState } from "react";
import { CssBaseline, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios'

const Historial = () => {
    const [data, setData] = useState(null);
    //const navigate = useNavigate();

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


    const getItem = () => {
        axios.get('http://127.0.0.1:8000/items')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        getItem();
    }, []);
    console.log(data);

    const eliminar = (id) => {
        axios.delete(`http://127.0.0.1:8000/${id}`)
            .then(response => {
                setData(data.filter(usuario => usuario._id !== id));
            })
            .catch(error => {
                console.error(error);
            });
    }

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
                        <Link to={`/inicio/${usuario._id}/edit`} className="text2" >Editar</Link>

                        <button onClick={() => eliminar(usuario._id)} className="btn"  >Eliminar</button>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Historial;