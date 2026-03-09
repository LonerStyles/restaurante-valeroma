import rmd1 from "../assets/rmd1.png"
import rmd2 from "../assets/rmd2.png"
import rmd3 from "../assets/rmd3.png"
import "../styles/Recomendacion.css"
export default function Recomendacion() {
  return (
    <section className="recomendacion-section">
      <div className="recomendacion-header">
        <h2>Recomendación del Chef</h2>
        <h3>SELECCIÓN DESTACADA</h3>
      </div>

      <div className="recomendacion-platos">
        <div className="rm-plato">
          <img src={rmd1} alt="Ravioli de ricotta & limón" />
          <p>
            <strong>Ravioli de ricotta & limón</strong><br />
            Pasta fresca artesanal, mantequilla clarificada.
          </p>
        </div>

        <div className="rm-plato">
          <img src={rmd2} alt="Risotto al Parmigiano" />
          <p>
            <strong>Risotto al Parmigiano</strong><br />
            Cremoso, intenso y perfectamente balanceado.
          </p>
        </div>

        <div className="rm-plato">
          <img src={rmd3} alt="Filete de res al vino tinto" />
          <p>
            <strong>Filete de res al vino tinto</strong><br />
            Cocción precisa, reducción elegante.
          </p>
        </div>
      </div>
    </section>
  );
}