import "./Card.scss";

export const Card = ({ image, body }) => (
  <div className="card">
    <div className="card-image">{image}</div>
    <div className="card-body">{body}</div>
  </div>
);
