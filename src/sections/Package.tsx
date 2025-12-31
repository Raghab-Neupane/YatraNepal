import PackageCard from "../components/Productcard/Packagecard";
import HorizontalScroll from "../components/HorizontalScroll";
import Mustang from "../assets/mustag.webp";
import Mountaintrek from "../assets/mountaintrek.webp";
import Everest from "../assets/mountain.webp";
import Homestay from "../assets/homestay.webp";
import elephant from "../assets/elephant.webp";
import dhorpatan from "../assets/dhorpatan.webp";
import sp from "../assets/sp.webp"

const Package: React.FC = () => {
  return (
    <section id="Packages" className="package-section">
      <h2>
        Our <span>Packages</span>
      </h2>
    <HorizontalScroll>
        
      <div className="package-container">

        <PackageCard
          image={Mustang}
          title="Mustang"
          description="Ancient culture, dramatic landscapes, and timeless Himalayan beauty."
        />

        <PackageCard
          image={Mountaintrek}
          title="Mountaining"
          description="High-altitude treks and thrilling mountain adventures across Nepal."
        />

        <PackageCard
          image={Everest}
          title="Everest Climbing"
          description="Guided Everest expeditions with expert support and breathtaking views."
        />

        <PackageCard
          image={Homestay}
          title="Home Stays"
          description="Authentic local living with culture, comfort, and warm hospitality."
        />

        <PackageCard
          image={elephant}
          title="Elephant Safari"
          description="Experience the thrill of elephant safaris in the jungles of Chitwan."
        />

        <PackageCard
          image={dhorpatan}
          title="Dhorpatan Hunting"
          description="Experience the thrill of hunting in the pristine wilderness of Dhorpatan."
        />

        <PackageCard
          image={sp}
          title="Phoksundo Trek"
          description="Discover the stunning landscapes of the Shey Phoksundo region."
        />

      </div>
    </HorizontalScroll>
    </section>
  );
};

export default Package;
