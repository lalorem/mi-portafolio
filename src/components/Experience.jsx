const experienceData = [
  {
    year: "2012-2021",
    title: "Primaria",
    description:
      "Completé mi educación primaria en la I.E Debora Arango, donde desarrollé habilidades básicas de lectura, escritura y matemáticas."
  },
  {
    year: "2022-2023",
    title: "Bachiller Técnico en Programación de Software",
    description:
      "Durante mi educación secundaria en la I.E Debora Arango, me especialicé en programación de software por medio de la media técnica por parte del SENA, adquiriendo conocimientos en lenguajes de programación, desarrollo web y bases de datos."
  },
  {
    year: "2024-presente",
    title: "Tecnología en Análisis y Desarrollo de Software",
    description:
      "Actualmente estoy cursando un programa en el SENA, donde profundizo mis habilidades en programación, diseño de software y metodologías ágiles. Ya culminé la etapa lectiva y me encuentro en búsqueda de prácticas."
  }
];

export default function Experience() {
  return (
    <section className="experience fade-in">
      <h2>Educación</h2>

      <div className="timeline">
        {experienceData.map((item, index) => (
          <div className="item slide-up" key={index}>
            
            <div className="circle">
              {item.year}
            </div>

            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}