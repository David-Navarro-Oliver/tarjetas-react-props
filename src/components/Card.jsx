import "../styles/Card.css";

export default function Card({ image, title, genre, description }) {
  return (
    <article className="card">
      <img className="card__image" src={image} alt={title} />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__text">
          <strong>Género:</strong> {genre}
        </p>
        <p className="card__text">{description}</p>
      </div>
    </article>
  );
}
