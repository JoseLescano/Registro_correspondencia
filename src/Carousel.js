import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar el CSS de Bootstrap
import './App.css';

function Carousel() {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <h1>Bienvenidos al Sistema de Gestión Documental</h1>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '35px', color: '#333' }}>
        Sección Personal
      </h2>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === currentImage ? 'active' : ''}`}>
              <img src={image} className="d-block w-100" alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" onClick={prevImage}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" onClick={nextImage}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <p>Departamento Adimisnitrativo del COPERE-2025.</p>
    </div>
  );
}

export default Carousel;
