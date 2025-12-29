import "../components/Imageshow.css"

interface ImageshowProps {
    image: string;
  title: string;
  description: string;
}

const Imageshow = ({ image, title, description }: ImageshowProps) => {
  return (
    <div className="Imageshowcase">
      <div className="Imageshowcase-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img src={image} alt={title} />
    </div>
  )
}

export default Imageshow