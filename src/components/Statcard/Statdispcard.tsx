import "./Stat-card.css";

interface StatCardProps {
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  description,
}) => {
  return (
      <div className="stat-card__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
  );
};

export default StatCard;
