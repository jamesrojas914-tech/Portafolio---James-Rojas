import { useState } from 'react';
import './Certificados.css';

const Certificados = () => {
  const [certificados, setCertificados] = useState([
    { id: 1, nombre: "React Fundamentals", institucion: "Udemy", anio: "2024", archivo: "/certificados/react.pdf" },
    { id: 2, nombre: "JavaScript Avanzado", institucion: "Coursera", anio: "2024", archivo: "/certificados/javascript.pdf" },
    { id: 3, nombre: "CSS y Diseño Web", institucion: "freeCodeCamp", anio: "2023", archivo: "/certificados/css.pdf" },
  ]);

  const handleSubirArchivo = (e) => {
    const archivo = e.target.files[0];
    if (archivo && archivo.type === "application/pdf") {
      const nuevoCert = {
        id: certificados.length + 1,
        nombre: archivo.name.replace(".pdf", ""),
        institucion: "Mi certificado",
        anio: new Date().getFullYear().toString(),
        archivo: URL.createObjectURL(archivo)
      };
      setCertificados([...certificados, nuevoCert]);
    } else {
      alert("Por favor sube un archivo PDF");
    }
  };

  return (
    <section id="certificados" className="certificados-section">
      <div className="certificados-container">
        <h2 className="section-title">Certificados</h2>
        <p className="certificados-subtitulo">
          Mis certificaciones y cursos completados
        </p>

        <div className="certificados-grid">
          {certificados.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-icono">📄</div>
              <div className="cert-info">
                <h3 className="cert-nombre">{cert.nombre}</h3>
                <span className="cert-institucion">
                  {cert.institucion} · {cert.anio}
                </span>
                <span className="cert-badge">✔ Completado</span>
              </div>
              <a
                href={cert.archivo}
                download
                className="cert-btn"
              >
                ⬇ Descargar PDF
              </a>
            </div>
          ))}
        </div>

        {/* BOTÓN PARA SUBIR NUEVO CERTIFICADO */}
        <div className="upload-container">
          <p className="upload-texto">¿Tienes un nuevo certificado? ¡Súbelo aquí!</p>
          <label htmlFor="subir-cert" className="upload-btn">
            📁 Cargar Certificado PDF
          </label>
          <input
            type="file"
            id="subir-cert"
            accept=".pdf"
            onChange={handleSubirArchivo}
            style={{ display: 'none' }}
          />
        </div>

      </div>
    </section>
  );
};

export default Certificados;