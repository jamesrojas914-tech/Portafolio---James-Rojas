import './Banner.css';
import miFoto from '../../assets/JamesRojas.jpeg';

const Banner = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">

        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para nuevos proyectos
        </div>

        <div className="profile-photo-container">
          <img
            src={miFoto}
            alt="Foto de Perfil"
            className="profile-photo"
          />
        </div>

        <h1 className="hero-title">
          James <br />
          <span className="text-cyan">Rojas</span>
        </h1>

        <h2 className="hero-subtitle">
          Estudiante de Informática · SENATI
        </h2>

        <p className="hero-description">
          Desarrollador web en formación, apasionado por crear
          aplicaciones modernas y funcionales.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>

      </div>

      <div className="scroll-indicator">↓</div>
    </section>
  );
};

export default Banner;