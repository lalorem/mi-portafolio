"use client";

import "../styles/global.css";

export default function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">☆ Star ☆</h2>

      <ul>
        <li onClick={() => scrollToSection("hero")}>Inicio</li>
        <li onClick={() => scrollToSection("about")}>Sobre mí</li>
        <li onClick={() => scrollToSection("projects")}>Proyectos</li>
        <li onClick={() => scrollToSection("contact")}>Contacto</li>
      </ul>
    </nav>
  );
}