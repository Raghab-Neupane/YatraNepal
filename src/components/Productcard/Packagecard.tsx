import "./package.css";

interface PackageCardProps {
  image: string;
  title: string;
  description: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="package-card">
      <img className="image" src={image} alt={title} />

      <div className="package-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PackageCard;
