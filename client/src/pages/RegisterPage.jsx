import React, { useContext, useState } from 'react'
import { Avatar, Box, Button, Container, createTheme, CssBaseline, Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        FitnessApp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();

const RegisterPage = () => {
  const navigate= useNavigate();
  const { login } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = () => {
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
    } else {
      setErrorMessage('');
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = formData;
  
    const data = {
      firstName,
      lastName,
      email,
      password,
      
    };
  
    console.log(formData)
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/register', data);
      console.log(response.data);
      const { token } = response.data;
      login(token)
      navigate("/registro/datos")
    } catch (error) {
      console.error(error);
      setErrorMessage('Credenciales incorrectas');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirmar Contraseña"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={validatePassword}
                />
              </Grid>
            </Grid>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Ya tienes una cuenta? Inicia sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}

export default RegisterPage