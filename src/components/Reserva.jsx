import "../styles/Reserva.css"
export default function FinalSecciones() {
  return (
    <section className="final-secciones">
      {/* Frase con fondo */}
      <div className="frase-section">
        <h2>“La cocina es cultura cuando se hace con respeto”</h2>
      </div>

      {/* Reserva con fondo */}
      <div className="reserva-section">
        <h2>Reservas</h2>
        <h3>MESAS LIMITADAS</h3>
        <p>
          Garantizamos una experiencia íntima y personalizada.<br />
          Reserve con anticipación.
        </p>
        <button className="reserva-btn">Reservar Mesa</button>
      </div>
    </section>
  );
}