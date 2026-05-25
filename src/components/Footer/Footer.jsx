import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <span className="text-cyan">James</span> Rojas
        </div>

        <p className="footer-desc">
          Estudiante de Informática · SENATI · Lima, Perú
        </p>

        <div className="footer-links">
          <a href="#sobre-mi">Perfil</a>
          <a href="#tech-stack">Tech Stack</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
          <a href="#certificados">Certificados</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-redes">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>

        <div className="footer-bottom">
          <p>© 2024 James Rojas · Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;