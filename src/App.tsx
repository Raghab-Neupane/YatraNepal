import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import "./App.css";
import Package from "./sections/Package.tsx";
import Reach from "./sections/Reach.tsx";
import Footer from "./Footer.tsx";
import Imgbrd from "./sections/Imgbrd.tsx";



const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Package />
      <Imgbrd />
      <Reach />
      <Footer />
    </>
  );
};

export default App;
