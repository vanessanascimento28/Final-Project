import "../../blocks/Cards.css";

function Card({ flag, name, capital, region, currency }) {
  return (
    <div className="card">
      <img src={flag} alt={`Bandeira de ${name}`} className="card__flag" />
      <h3 className="card__name">{name}</h3>
      <p className="card__info">
        <strong>Capital:</strong> {capital}
      </p>
      <p className="card__info">
        <strong>Região:</strong> {region}
      </p>
      <p className="card__info">
        <strong>Moeda:</strong> {currency}
      </p>
    </div>
  );
}

export default Card;
