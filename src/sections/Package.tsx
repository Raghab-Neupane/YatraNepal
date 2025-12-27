import PackageCard from "../components/Productcard/Packagecard";

import Mustang from "../assets/mustag.webp";
import Mountaintrek from "../assets/mountaintrek.webp";
import Everest from "../assets/mountain.webp";
import Homestay from "../assets/homestay.webp";

const Package: React.FC = () => {
  return (
    <section id="Packages" className="package-section">
      <h2>
        Our <span>Packages</span>
      </h2>

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
      </div>
    </section>
  );
};

export default Package;
