import './Habilidades.css';

const Habilidades = () => {
  const skillsData = [
    { id: 1, titulo: "React", descripcion: "Construcción de interfaces modernas con componentes.", nivel: "Aprendizaje Activo", estado: "completado" },
    { id: 2, titulo: "JavaScript", descripcion: "Lenguaje de programación para la web.", nivel: "Intermedio", estado: "completado" },
    { id: 3, titulo: "HTML5", descripcion: "Estructura de páginas web.", nivel: "Avanzado", estado: "completado" },
    { id: 4, titulo: "CSS3", descripcion: "Estilos y diseño responsivo.", nivel: "Avanzado", estado: "completado" },
    { id: 5, titulo: "Git", descripcion: "Control de versiones.", nivel: "Intermedio", estado: "completado" },
    { id: 6, titulo: "GitHub", descripcion: "Repositorio en la nube.", nivel: "Intermedio", estado: "completado" },
  ];

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">💻</div>
                <span className={`skill-badge ${skill.estado === 'proceso' ? 'badge-yellow' : 'badge-green'}`}>
                  VER CERTIFICADO
                </span>
              </div>
              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-desc">{skill.descripcion}</p>
                <span className="skill-level">{skill.nivel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;