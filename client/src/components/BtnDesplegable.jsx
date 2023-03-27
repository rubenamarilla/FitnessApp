import React, { useState } from 'react';
import PerderPeso from './PerderPeso';
import VidaSana from './VidaSana';
import Deportes from './Deportes';
import GanarMasaMuscular from './GanarMasaMuscular';
import DormirBien from './DormirBien';
import { Button, Typography, Container } from "@mui/material";

function BtnDesplegable() {
        const [abierto, setAbierto] = useState(false);
        const [componenteActual, setComponenteActual] = useState(null);
      
        const mostrarComponente = (componente) => {
          setComponenteActual(componente);
          setAbierto(false);
        }

  return (
    <Container maxWidth="xs">
      <Button fullWidth onClick={() => setAbierto(!abierto)} aling="center">
        {abierto ? 'Cerrar Obejtivos' : 'Abrir Objetivos'}
      </Button>
      {abierto && (
        <div className="menu-desplegable">
          <div className="menu-item" onClick={() => mostrarComponente(<PerderPeso />)}>
            {/* <img src="perdida-de-peso.png" alt="Cómo perder peso" /> */}
            {/* <h3>Cómo perder peso</h3>
            <p>Información sobre cómo perder peso de manera saludable y efectiva.</p> */}
            <Button href="#">Perder Peso</Button>
          </div>
          <div className="menu-item" onClick={() => mostrarComponente(<VidaSana />)}>
            {/* <img src="imagen-vida-sana.png" alt="Vida sana" />
            <h3>Vida sana</h3> */}
            {/* <h3>Vida Sana</h3>
            <p>Consejos para llevar un estilo de vida más saludable y equilibrado.</p> */}
            <Button href="#">Vida Sana</Button>
          </div>
          <div className="menu-item" onClick={() => mostrarComponente(<Deportes />)}>
            {/* <img src="imagen-deportes.png" alt="Deportes" /> */}
            {/* <h3>Deportes</h3>
            <p>Información sobre deportes y cómo mantenerse activo y en forma.</p> */}
            <Button href="#">Deportes</Button>
          </div>
          <div className="menu-item" onClick={() => mostrarComponente(<GanarMasaMuscular />)}>
            {/* <img src="imagen-masa-muscular.png" alt="Cómo ganar masa muscular" /> */}
            {/* <h3>Cómo ganar masa muscular</h3>
            <p>Consejos y entrenamientos para ganar masa muscular de manera efectiva.</p> */}
            <Button href="#">Ganar Masa Muscular</Button>
          </div>
          <div className="menu-item" onClick={() => mostrarComponente(<DormirBien />)}>
            {/* <img src="imagen-dormir-bien.png" alt="Cómo dormir bien" /> */}
            {/* <h3>Cómo dormir bien</h3>
            <p>Consejos para mejorar la calidad de sueño y dormir mejor.</p> */}
            <Button href="#">Hábitos saludables de sueño</Button>
          </div>
        </div>
      )}
      <Typography component={"h3"} variant="h3" align="center" sx={{ width: "100%" }}>Tips del Objetivo Seleccionado</Typography>
      {componenteActual}
    </Container>
    
  );
}

export default BtnDesplegable;