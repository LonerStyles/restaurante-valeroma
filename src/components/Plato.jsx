export default function Plato({name, desc, price}) {
  return (
    <div className="plato">
      <h2 className="food-name">{name}</h2>
      <p className="desc">{desc}</p>
      <span className="price">{price}</span>
    </div>
  );
}