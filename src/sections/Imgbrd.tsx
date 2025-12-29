import Imageshow from "../components/Imageshow.tsx";
import two from "../assets/two.webp";



const Imgbrd: React.FC = () => {
  return (
    <>
      <Imageshow
        image={two}
        title="Image Title"
        description="Image Description"
      />
    </>
  )
}

export default Imgbrd;