import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import "./App.css";
import Package from "./sections/Package.tsx";
import Footer from "./sections/Footer.tsx";
import Imgbrd from "./sections/Imgbrd.tsx";
import Hotels from "./sections/Hotels.tsx";



const App: React.FC = () => {
  return (
    <>
      <Navbar />
  <Hero />
  <Package />
  <Imgbrd />
  <Hotels />
  
  <Footer />
</>
  );
};

export default App;
