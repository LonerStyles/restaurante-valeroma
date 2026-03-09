import "../styles/Plato.css";

export default function Plato({ name, desc, price }) {
  return (
    <div className="plato">
      <div className="plato1">
        <h2 className="food-name">{name}</h2>
        <p className="desc">{desc}</p>
      </div>
      <span className="price">{price}</span>
    </div>
  );
}
