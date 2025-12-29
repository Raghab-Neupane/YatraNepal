import "../components/Imageshow.css"

interface ImageshowProps {
    image: string;
  title: string;
  description: string;
}

const Imageshow = ({ image, title, description }: ImageshowProps) => {
  return (
    <div className="Imageshowcase">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Imageshow