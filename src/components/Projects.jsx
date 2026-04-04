const projectsData = [
  {
    title: "Tienda Sanrio",
    description:
      "Es una tienda web donde los usuarios pueden ver productos, explorar categorías y agregarlos a un carrito. Está pensada para que la navegación sea fácil y tenga un diseño bonito y agradable para el usuario.",
    image: "/sanriostar.jpg",
    tags: ["HTML", "CSS", "PHP", "JavaScript", "React", "Laravel", "MVC"]
  },
  {
    title: "Qvision",
    description:
      "Es un proyecto realizado como prueba técnica, en el que se replicó una página web real. Se enfocó en recrear su diseño y funcionamiento, buscando que se vea y se comporte de forma similar al original.",
    image: "/qvision.png",
    tags: ["Laravel", "PHP", "CSS", "HTML", "MySQL", "JavaScript"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects fade-in">
      <h2>Mis Proyectos</h2>
      <p>Algunos proyectos en los que he trabajado</p>

      <div className="grid">

        {/* 🔹 Proyecto 1 */}
        <div className="project-card slide-up">
          <div className="img">
            <img src={projectsData[0].image} alt={projectsData[0].title} />
          </div>

          <h3>{projectsData[0].title}</h3>
          <p>{projectsData[0].description}</p>

          <div className="tags">
            {projectsData[0].tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <button onClick={() => window.open("https://github.com/isa1227/sanrio-star", "_blank")}>
            Ver repositorio
          </button>
        </div>

        {/* 🔹 Proyecto 2 */}
        <div className="project-card slide-up">
          <div className="img">
            <img src={projectsData[1].image} alt={projectsData[1].title} />
          </div>

          <h3>{projectsData[1].title}</h3>
          <p>{projectsData[1].description}</p>

          <div className="tags">
            {projectsData[1].tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <button onClick={() => window.open("https://github.com/lalorem/qvision", "_blank")}>
            Ver repositorio
          </button>
        </div>

      </div>
    </section>
  );
}