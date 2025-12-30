import "./hotelcard.css";

interface hotelcard {
  image: string;
  title: string;
  description: string;
}

const hotelcard: React.FC<hotelcard> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="hotel-card">
      <img className="image" src={image} alt={title} />

      <div className="hotel-card__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <p className="hotel__footer">Book Now</p>
    </div>
  );
};

export default hotelcard;
