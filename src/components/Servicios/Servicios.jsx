import { useState } from 'react';
import './Servicios.css';

const Servicios = () => {
  const [activo, setActivo] = useState(null);

  const servicios = [
    { id: 1, icono: "💻", titulo: "Desarrollo Web", descripcion: "Creación de páginas web modernas y responsivas." },
    { id: 2, icono: "🎨", titulo: "Diseño UI/UX", descripcion: "Diseño de interfaces atractivas y fáciles de usar." },
    { id: 3, icono: "🗄️", titulo: "Base de Datos", descripcion: "Diseño y gestión de bases de datos." },
    { id: 4, icono: "📱", titulo: "Apps Móviles", descripcion: "Desarrollo de aplicaciones para dispositivos móviles." },
  ];

  return (
    <section id="servicios" className="servicios-section">
      <div className="servicios-container">
        <h2 className="section-title">Mis Servicios</h2>
        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className={`servicio-card ${activo === servicio.id ? 'activo' : ''}`}
              onClick={() => setActivo(servicio.id)}
            >
              <span className="servicio-icono">{servicio.icono}</span>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;