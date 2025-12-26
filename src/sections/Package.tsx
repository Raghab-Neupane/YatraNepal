import React from "react";
import Mustang from "../assets/mustag.webp";
import mountaintrek from "../assets/mountaintrek.webp";
import Everest from "../assets/mountain.webp";
import Homestay from "../assets/homestay.webp";
import HorizontalScroll from "../components/HorizontalScroll";

const Package: React.FC = () => {
    return (
        <section id="Packages" className="package-section">
            <h2>Our <span>Packages</span></h2>
            <HorizontalScroll>
                <div className="package-container">
                    <div className="package-card">
                        <img className="image" src={Mustang} alt="Mustang" />
                        <div className="package-text">
                            <h3>Mustang</h3>
                            <p>
                                Ancient culture, dramatic landscapes, and timeless Himalayan beauty.
                                A journey into Nepal’s hidden kingdom.
                            </p>
                        </div>
                    </div>

                    <div className="package-card">
                        <div className="package-text">
                            <img className="image" src={mountaintrek} alt="Mountaining" />
                            <h3>Mountaining</h3>
                            <p>
                                High-altitude treks and thrilling mountain experiences.
                                Guided adventures across Nepal’s peaks.
                            </p>
                        </div>
                    </div>

                    <div className="package-card">
                        <div className="package-text">
                            <img className="image" src={Everest} alt="Everest Climbing" />
                            <h3>Everest Climbing</h3>
                            <p>
                                Guided Everest expeditions with expert support.
                                The ultimate Himalayan challenge.
                            </p>
                        </div>
                    </div>

                    <div className="package-card">
                        <div className="package-text">
                            <img className="image" src={Homestay} alt="Home Stays" />
                            <h3>Home Stays</h3>
                            <p>
                                Authentic local living in the Himalayas.
                                Culture, comfort, and warm hospitality.
                            </p>
                        </div>
                    </div>

                    <div className="package-card">
                        <img className="image" src={Mustang} alt="Mustang" />
                        <div className="package-text">
                            <h3>Mustang</h3>
                            <p>
                                Ancient culture, dramatic landscapes, and timeless Himalayan beauty.
                                A journey into Nepal’s hidden kingdom.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </HorizontalScroll>
        </section>
    );
};

export default Package;
