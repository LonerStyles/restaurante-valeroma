import "../styles/Carta.css";
import Plato from "../components/Plato";

export default function Carta() {
  return (
    <div>
      <div className="a">
        <div className="ex-border">
          <div className="in-border">
            <h1 className="carta-main-title">La Carta</h1>
            <p className="carta-main-desc">
              Auténtica cocina italiana con los mejores ingredientes y
              tradición.
            </p>
            <section>
              <h1 className="carta-title">Entradas</h1>

              <Plato
                name="Bruschetta Clásica"
                desc="Pan tostado, tomate fresco, albahaca y aceite de oliva"
                price="S/.18.00"
              />

              <Plato
                name="Carpaccio di Manzo"
                desc="Finas láminas de res, parmesano y rúcula"
                price="S/.32.00"
              />

              <h1 className="carta-title">Pastas</h1>

              <Plato
                name="Fettuccine Alfredo"
                desc="Salsa cremosa de parmesano y mantequilla"
                price="S/.35.00"
              />

              <Plato
                name="Spaghetti Bolognese"
                desc="Salsa de carne tradicional italiana"
                price="S/.34.00"
              />

              <Plato
                name="Ravioli Ricotta e Spinaci"
                desc="Rellenos de ricotta y espinaca con salsa pomodoro"
                price="S/.38.00"
              />

              <h1 className="carta-title">Carnes</h1>

              <Plato
                name="Pollo Parmigiana"
                desc="Pechuga empanizada con salsa de tomate y mozzarella"
                price="S/.42.00"
              />

              <Plato
                name="Osso Buco"
                desc="Estofado de ternera con vino y hierbas"
                price="S/.55.00"
              />

              <h1 className="carta-title">Postres</h1>

              <Plato
                name="Tiramisú"
                desc="Clásico italiano con café y queso mascarpone"
                price="S/.18.00"
              />

              <Plato
                name="Panna Cotta"
                desc="Crema italiana con frutos rojos"
                price="S/.16.00"
              />

              <h1 className="carta-title">Bebidas</h1>

              <Plato
                name="Vino Tinto de la Casa"
                desc="Copa de selección italiana"
                price="S/.22.00"
              />

              <Plato
                name="Vino Blanco de la Casa"
                desc="Copa de slección italiana"
                price="S/.22.00"
              />

              <Plato
                name="Aperol Spritz"
                desc="Aperol, prosecco y soda"
                price="S/.28.00"
              />

              <Plato
                name="Negroni"
                desc="Gin, vermut rojo y Campari"
                price="S/.30.00"
              />

              <Plato
                name="Limonada Italiana"
                desc="Limón fresco y hierbabuena"
                price="S/.14.00"
              />

              <Plato
                name="Agua Mineral"
                desc="Con o sin gas"
                price="S/.10.00"
              />

              <Plato
                name="Café Espresso"
                desc="Preparación italiana profesional"
                price="S/.12.00"
              />

              <Plato
                name="Cappuccino"
                desc="Espuma con leche cremosa"
                price="S/.15.00"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
