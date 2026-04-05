// Projects.jsx
const projectsData = [
  {
    title: "Tienda Sanrio",
    description:
      "Es una tienda web donde los usuarios pueden ver productos, explorar categorías y agregarlos a un carrito. Está pensada para que la navegación sea fácil y tenga un diseño bonito y agradable para el usuario.",
    image: "/sanriostar.jpg",
    tags: ["HTML", "CSS", "PHP", "JavaScript", "React", "Laravel", "MVC"],
    repo: "https://github.com/isa1227/sanrio-star"
  },
  {
    title: "Qvision",
    description:
      "Es un proyecto realizado como prueba técnica, en el que se replicó una página web real. Se enfocó en recrear su diseño y funcionamiento, buscando que se vea y se comporte de forma similar al original.",
    image: "/qvision.png",
    tags: ["Laravel", "PHP", "CSS", "HTML", "MySQL", "JavaScript"],
    repo: "https://github.com/lalorem/qvision"
  },
  {
    title: "GL Aires y Refrigeración",
    description:
      "Es un proyecto web desarrollado para una empresa de aires acondicionados y refrigeración. Permite a los clientes conocer los servicios ofrecidos y contactar fácilmente con la empresa.",
    image: "/Logo.png",
    tags: ["HTML", "CSS", "Script"],
    repo: "https://github.com/lalorem/GL-Aires-y-Refrigeracion"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects fade-in">
      <h2>Mis Proyectos</h2>
      <p>Algunos proyectos en los que he trabajado</p>

      <div className="grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card slide-up">
            <div className="img">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <button onClick={() => window.open(project.repo, "_blank")}>
                Ver repositorio
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}