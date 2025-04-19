import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterDocument() {
  const [formData, setFormData] = useState({
    tipoDocumento: '',
    numeroDocumento: '',
    fechaDocumento: '',
    destino: '',
    asunto: '',
    estado: '',
    quienRecepciono: '',
    fechaRecepcion: ''
  });

  const [numeroCorrelativo, setNumeroCorrelativo] = useState(''); // Para almacenar el número correlativo generado

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/documentos/remitidos', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        toast.success('Se registró correctamente');

        // Almacenamos el número correlativo que viene de la respuesta del backend
        setNumeroCorrelativo(response.data.numeroCorrelativo);

        // Limpiar el formulario
        setFormData({
          tipoDocumento: '',
          numeroDocumento: '',
          fechaDocumento: '',
          destino: '',
          asunto: '',
          estado: '',
          quienRecepciono: '',
          fechaRecepcion: ''
        });
      }
    } catch (error) {
      console.error('Error al registrar documento:', error);
      toast.error('Hubo un error al registrar el documento');
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '45px', color: '#333',marginTop:'2%' }}>
        Registrar Documento Remitido
      </h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="tipoDocumento" className="form-label">TIPO DE DOCUMENTO</label>
          <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange}>
            <option value="">Seleccionar..</option>
            <option value="oficio">Oficio</option>
            <option value="oficiomultiple">Oficio Multiple</option>
            <option value="fax">FAX</option>
            <option value="faxmultiple">Fax Multiple</option>
            <option value="hojatramite">Hoja de tramite</option>
            <option value="ordeninterna">Orden Interna</option>
            <option value="memorandum">Memorandum</option>
            <option value="directiva">Directiva</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="numeroDocumento" className="form-label">N° DOCUMENTO</label>
          <input
            type="text"
            name="numeroDocumento"
            value={formData.numeroDocumento}
            onChange={handleChange}
            placeholder="Número de Documento"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaDocumento" className="form-label">FECHA DE DOCUMENTO</label>
          <input
            type="date"
            name="fechaDocumento"
            value={formData.fechaDocumento}
            onChange={handleChange}
            placeholder="Fecha del Documento"
          />
        </div>

        <div className="form-group">
          <label htmlFor="destino" className="form-label">DESTINO</label>
          <input
            type="text"
            name="destino"
            value={formData.destino}
            onChange={handleChange}
            placeholder="Destino"
          />
        </div>

        <div className="form-group">
          <label htmlFor="asunto" className="form-label">ASUNTO</label>
          <input
            type="text"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            placeholder="Asunto"
          />
        </div>

        <div className="form-group">
          <label htmlFor="estado" className="form-label">ESTADO DEL DOCUMENTO</label>
          <select name="estado" value={formData.estado} onChange={handleChange}>
            <option value="">Seleccionar estado</option>
            <option value="pendiente">Pendiente</option>
            <option value="entregado">Entregado</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quienRecepciono" className="form-label">RECIBIDO POR:</label>
          <input
            type="text"
            name="quienRecepciono"
            value={formData.quienRecepciono}
            onChange={handleChange}
            placeholder="¿Quién recepcionó?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaRecepcion" className="form-label">FECHA RECEPCIÓN</label>
          <input
            type="date"
            name="fechaRecepcion"
            value={formData.fechaRecepcion}
            onChange={handleChange}
            placeholder="Fecha de Recepción"
          />
        </div>

        <button type="submit" className="button-submit">Registrar Documento</button>
      </form>

      {/* Mostrar el número correlativo generado */}
      {numeroCorrelativo && (
        <div className="numero-correlativo">
          <h3>Número Correlativo Generado: {numeroCorrelativo}</h3>
        </div>
      )}

      <ToastContainer />
    </div>

  );

}

export default RegisterDocument;
