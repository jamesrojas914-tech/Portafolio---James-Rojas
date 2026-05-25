import './Proyectos.css';
import proyectoMusica from '../../assets/proyectomusica.jpeg';
import gestionCitas from '../../assets/gestioncitas.png';

const Proyectos = () => {
  const proyectosData = [
    {
      id: 1,
      imagen: "https://placehold.co/400x280?text=Sistema+Matricula",
      titulo: "Proyecto Matricula",
      descripcion: "Aplicación web de venta de calzados para varones, mujeres, niños y niñas.",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "React", "Laravel", "PostGreSQL"],
      linkDemo: "",
      linkCodigo: "https://github.com/jamesrojas914-tech/Sistema-Matricula"
    },
    {
      id: 2,
      imagen: gestionCitas,
      titulo: "AppGestionCitas",
      descripcion: "Aplicación web de venta de ropa para varones, mujeres, niños y niñas.",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "React", "Laravel", "PostGreSQL"],
      linkDemo: "https://gestion-citas.free.nf/",
      linkCodigo: "https://github.com/jamesrojas914-tech/app-gestioncitas"
    },
    {
      id: 3,
      imagen: proyectoMusica,
      titulo: "Protyecto Musica",
      descripcion: "Aplicación web para la venta de productos naturales online.",
      tecnologias: ["React", "Laravel", "PostGreSQL"],
      linkDemo: "https://soundvibe.great-site.net/",
      linkCodigo: "https://github.com/Vrak23/Proyecto-musica"
    },
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center">Proyectos Destacados</h2>
        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              <div className="proyecto-imagen">
                <img src={proyecto.imagen} alt={proyecto.titulo} />
              </div>
              <div className="proyecto-contenido">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>
                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="proyecto-links">
                  <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-demo">
                    🔗 Demo en Vivo
                  </a>
                  <a href={proyecto.linkCodigo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-codigo">
                    💻 Ver Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;