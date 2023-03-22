import React, {  useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';



const LoginPage = () => {
  
  const navigate= useNavigate();
  const [formData, setFormData] = useState({
      usuario: '',
      password: '',
  });


  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          
          
          navigate("/")
          
          
      } catch (error) {
          console.error(error);
          setErrorMessage('Credenciales incorrectas');
          
      }

  };
  return (
    <div>

      <form onSubmit={handleSubmit} className="login">
        <h2 className='h2'>Iniciar sesión</h2>
        <label className='label'>
          Usuario:
          <input type="text" name="usuario" className='input' value={formData.usuario} onChange={handleChange} />
        </label>
        <br />
        <label className='label'>
          Contraseña:
          <input type="password" name="password" className='input' value={formData.password} onChange={handleChange} />
        </label>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <br />
        <button type="submit" className='button'>Iniciar sesión</button>
        <Link to='/registro' className='button'>Registrarse</Link>
      </form>

    </div>
  )
}

export default LoginPage