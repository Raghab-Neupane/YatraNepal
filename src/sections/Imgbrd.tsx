import Imageshow from "../components/Imageshow.tsx";
import two from "../assets/two.jpg";



const Imgbrd: React.FC = () => {
  return (
    <div className="Imgbrd">
      <Imageshow
        image={two}
        title="Live Life."
        description="be yourself"
      />
    </div>
  )
}

export default Imgbrd;