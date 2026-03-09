import "../styles/Historia.css"
import historia1 from "../assets/historia1.png"
import historia2 from "../assets/historia2.png"
import historia3 from "../assets/historia3.png"
export default function Historia() {
  return (
    <section className="historia-section">
      <div className="historia-content">
        <h2>Nuestra Historia</h2>
        <h3>ORIGEN & VISIÓN</h3>
        <p>
          VALEROMA nace del encuentro entre técnica, tiempo y respeto por la
          cocina italiana. Cada plato es concebido como una pieza equilibrada,
          donde el producto es el protagonista absoluto.
        </p>
      </div>

      <div className="historia-gallery">
        <img src= {historia1} alt="Interior del restaurante" />
        <img src= {historia2} alt="Terraza exterior" />
        <img src= {historia3} alt="Plato servido" />
      </div>
    </section>
  );
}