import { useState } from "react";

type ImageSliderProps = {
  images: string[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </div>

      <button className="slider-btn left" onClick={prev}>‹</button>
      <button className="slider-btn right" onClick={next}>›</button>
    </div>
  );
};

export default ImageSlider;
