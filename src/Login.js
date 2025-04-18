// Login.js
import React, { useState } from 'react';
import './Login.css'; // Importa el archivo de estilo si es necesario

function Login({ onLogin }) {
  const [usuario, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verificar si las credenciales son correctas
    if (usuario === 'admin' && password === 'ribalu!@#') {
      onLogin(true); // Cambiar el estado para simular un login exitoso
    } else {
      alert('Usuario o contraseña incorrectas');
    }
  };

  return (
    <div id="container">
        <h1>Iniciar Sesión</h1>
      <span className="close-btn">
        <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png" alt="Close" />
      </span>

      <form>
        <input
          type="Usuario"
          name="usuario"
          value={usuario}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Usuario"
        />
        <input
          type="password"
          name="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button1 type="button" onClick={handleLogin}>Ingresar</button1>
        <div id="remember-container">
          <input type="checkbox" id="checkbox-2-1" className="checkbox" checked="checked" />
          <span id="remember">Recuerdame</span>
        </div>
      </form>
    </div>
  );
}

export default Login;
