import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Report() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Obtener los documentos desde el backend
    axios.get('http://localhost:4000/traer/documentos/remitidos')
      .then(response => setDocuments(response.data))
      .catch(error => console.error('Error fetching documents:', error));
  }, []);

  return (
    <div className="report-container">

      
      <h2 className="report-title">
        Reporte de Documentos Remitidos
      </h2>
      <table className="report-table">
        <thead>
          <tr>
            <th>N°</th>
            <th>Tipo de Documento</th>
            <th>N° Documento</th>
            <th>Fecha de Documento</th>
            <th>Destino</th>
            <th>Asunto</th>
            <th>Estado</th>
            <th>¿Quién recepcionó?</th>
            <th>Fecha de Recepción</th>
          </tr>
        </thead>
        <tbody>
          {documents.map(doc => (
            <tr key={doc._id}>
              <td>{doc.numeroOrden}</td>
              <td>{doc.tipoDocumento}</td>
              <td>{doc.numeroDocumento}</td>
              <td>{doc.fechaDocumento ? new Date(doc.fechaDocumento).toLocaleDateString() : ''}</td>
              <td>{doc.destino}</td>
              <td>{doc.asunto}</td>
              <td>{doc.estado}</td>
              <td>{doc.quienRecepciono}</td>
              <td>{doc.fechaRecepcion ? new Date(doc.fechaRecepcion).toLocaleDateString() : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Report;
