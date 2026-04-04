export default function Hero() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero fade-in">
      <p className="badge">Disponible para nuevos proyectos</p>

      <h1>
        ¡Hola! Soy <span>Lorena</span>
      </h1>

      <h2>Desarrolladora web en aprendizaje</h2>

      <p className="desc">
        Creo experiencias digitales atractivas y funcionales que convierten ideas en realidad.
      </p>

      <div className="buttons">
        <button
          className="primary"
          onClick={() => scrollToSection("projects")}
        >
          Ver proyectos
        </button>

        <button
          className="outline"
          onClick={() => scrollToSection("contact")}
        >
          Contáctame
        </button>
      </div>
    </section>
  );
}