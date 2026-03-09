import "../styles/Hero.css"
export default function Hero() {
    return (
        <section className="hero">
        <h1> Cocina Contemporánea </h1>
        <p>
            Una experiencia gastronómica refinada, 
            inspirada en la tradición italiana y
             reinterpretada con sensibilidad moderna.
        </p>
        <div className="hero-btn">
            <button className="btn-primary"> Reservar Mesa</button>
            <button className="btn-secondary"> Ver Carta</button>
        </div>
    </section>
     );
}

