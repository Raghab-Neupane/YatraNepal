import React from "react";

const Package: React.FC = () => {
  return (
    <section id="Packages" className="package-section">
        <h2>Our <span>Packages</span></h2>
        <div className="package-container">
            <div className="package-card">
                <div className="package-text">
                    <h3>Mustang</h3>
                    <p>
                        Experience the breathtaking landscapes and rich culture of Mustang
                        with our tailored travel packages.
                    </p>
                </div>
            </div>

            <div className="package-card">
                <div className="package-text">
                    <h3>Mountain Adventures</h3>
                    <p>
                    Conquer the majestic peaks and immerse yourself in the thrill of
                    high-altitude trekking with our expert-guided tours.
                </p>
                </div>
            </div>

            <div className="package-card">
                <div className="package-text">
                    <h3>Everest Climbing</h3>
                    <p>
                        Experience the ultimate adventure with our guided Everest climbing
                        expeditions, complete with expert support and breathtaking views.
                    </p>
                </div>
                </div>

            <div className="package-card">
                <div className="package-text">
                    <h3>Home Stays</h3>
                <p>
                    Immerse yourself in local culture and hospitality with our curated
                    home stay experiences in the heart of the Himalayas.
                </p>
            </div>
         </div>
        </div>
    </section>
  );
};

export default Package;
