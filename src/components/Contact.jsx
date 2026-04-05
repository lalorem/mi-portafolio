export default function Contact() {
  return (
    <section id="contact" className="contact fade-in">
      <h2>Trabajemos juntos</h2>

      <div className="contact-box slide-up">
        <p>
          ¿Tienes una idea o proyecto? Me encantaría ayudarte a hacerlo realidad.
        </p>

        <div className="btn-group">
          <a
            href="mailto:correapalaciolorena@gmail.com"
            className="btn-contact"
          >
            Enviar correo
          </a>

          <a
            href="https://wa.me/573024446708?text=Hola%20Star!%20Estoy%20interesado%20en%20que%20me%20ayudes%20con%20una%20página%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
          >
            Enviar mensaje por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}