export default function About() {
  return (
    <section id="about" className="about fade-in">
      <div className="about-text" slide-left>
        <h2>Sobre mí</h2>

        <p>
          Soy Lorena, tengo 19 años y soy desarrolladora de software apasionada por la tecnología, 
          el diseño y la creación de soluciones digitales. Decidí estudiar este campo porque me encanta 
          transformar ideas en proyectos reales y aprender constantemente cosas nuevas.
        </p>

        <p>
          Durante mi formación he descubierto un gran interés por el desarrollo web y el diseño 
          de interfaces, disfrutando tanto la parte visual como la lógica detrás de cada aplicación.
        </p>

        <p>
          A nivel profesional, me considero una persona responsable, creativa y comprometida. 
          Me gusta trabajar en equipo, aportar ideas y enfrentar nuevos retos que me ayuden a crecer. 
          Me destaco por mi atención al detalle y mi capacidad de aprendizaje rápido.
        </p>

        <p>
          Mi objetivo es seguir desarrollándome como profesional, adquirir experiencia en el 
          mundo laboral y participar en proyectos que generen un impacto positivo.
        </p>
      </div>

     <div className="about-img" slide-right>
  <img src="./pixel.png" className="pixel-img" alt="lore" />
</div>
    </section>
  );
}