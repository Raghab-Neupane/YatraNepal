import ImageSlider from "../components/imgsld/imgsld1.tsx";
import img1 from "../assets/banner.jpg";
import img2 from "../assets/rara.jpg";
import img3 from "../assets/town.jpg";
import { DiVim } from "react-icons/di";



const Banner = () => {
  return (
    <div className="banner">
      <ImageSlider images={[img1, img2, img3]} />
    </div>
  )
}

export default Banner