import './Perfil.css';

const Perfil = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="sobre-mi-grid">

          <div className="card">
            <div className="card-header">
              <div className="icon-box">👤</div>
              <h3>Perfil profesional</h3>
            </div>
            <p className="card-text">
              Estudiante de Informática en SENATI, apasionado por el
              desarrollo web y las nuevas tecnologías. Con experiencia
              en React, JavaScript, HTML y CSS.
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="icon-box">🎓</div>
              <h3>Educación</h3>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Informática</h4>
                  <span className="badge badge-outline">En curso</span>
                </div>
                <span className="timeline-date">SENATI</span>
              </div>
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Secundaria</h4>
                  <span className="badge badge-outline">Completado</span>
                </div>
                <span className="timeline-date">Tu colegio</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Perfil;