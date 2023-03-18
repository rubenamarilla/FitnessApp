import React, {  useState } from 'react'
import { Link} from 'react-router-dom';



const RegisterPage = () => {
  
  
  const [formData, setFormData] = useState({
    usuario: '',
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
  
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className='h2'>Registrarse</h2>
        <label className='register-form label'>
          Nombre de usuario:
          <input type="text" name="usuario" className='register-form input' value={formData.usuario} onChange={handleChange} />
        </label>
        <br></br>
        <label className='register-form label'>
          Correo electrónico:
          <input type="email" name="email" className='register-form input' value={formData.email} onChange={handleChange} />
        </label>
        <br></br>
        <label className='register-form label'>
          Contraseña:
          <input type="password" name="password" className='register-form input' value={formData.password} onChange={handleChange} />
        </label>
        <br></br>
        <label className='register-form label'>
          Confirmar contraseña:
          <input type="password" name="confirmPassword" className='register-form input' value={formData.confirmPassword} onChange={handleChange} onBlur={validatePassword} />
        </label>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <br></br>
        <button type="submit" className='button'  >Registrarse</button>
        <Link className='button' to="/login"  >Iniciar sesión</Link>
      </form>
    </div>
  )
}

export default RegisterPage