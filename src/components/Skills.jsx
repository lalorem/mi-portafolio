const skillsData = [
  {
    title: "Lenguajes",
    skills: ["HTML5", "CSS", "JavaScript", "PHP", "SQL", "Python"]
  },
  {
    title: "Framework y librerias",
    skills: ["React", "Laravel", "Bootstrap", "Pandas", "Axios", "Tailwind CSS"]
  },
  {
    title: "Herramientas",
    skills: ["Visual Studio Code", "Git", "GitHub", "XAMPP", "Node.js", "MySQL", "Google Fonts",]
  }
];

export default function Skills() {
  return (
    <section className="skills">
      <h2>Habilidades y Tecnologías</h2>

      <div className="cards">
        {skillsData.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>

            <div className="tags">
              {item.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}