import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import RegisterDocument from './RegisterDocument'; 
import Report from './Report'; 
import Carousel from './Carousel'; 
import Login from './Login'; // Importar el componente Login
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Scripts de Bootstrap (incluye Popper.js)
import { Button } from 'bootstrap';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para controlar la autenticación

  // Función que maneja el login exitoso
  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <div className="App">
      
        {/* Logo en la parte superior */}
        <div className="logo-container">
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </div>

 {/* Menú de navegación, se muestra solo si el usuario está autenticado */}
        {isAuthenticated && (
        
          <nav>
          <ul>
            <li1>
              <NavLink to="/" className="nav-link" activeClassName="active">INICIO</NavLink>
            </li1>
            <li1>
              <NavLink to="/registrar-documento" className="nav-link" activeClassName="active">REGISTRO</NavLink>
            </li1>
            <li1>
              <NavLink to="/reporte" className="nav-link" activeClassName="active">REPORTE</NavLink>   
            </li1>
          </ul>
        </nav>
     
        )}

        {/* Las rutas para las diferentes secciones de la aplicación */}
        <Routes>
          {!isAuthenticated ? (
            // Si no está autenticado, mostrar el login
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          ) : (
            // Si está autenticado, mostrar el contenido de la aplicación
            <>
              <Route path="/" element={<Carousel />} />
              <Route path="/registrar-documento" element={<RegisterDocument />} />
              <Route path="/reporte" element={<Report />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
