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
                            Ancient culture, dramatic landscapes, and timeless Himalayan beauty.
                            A journey into Nepal’s hidden kingdom.
                        </p>
                    </div>
                </div>

                <div className="package-card">
                    <div className="package-text">
                        <h3>Mountaining</h3>
                        <p>
                            High-altitude treks and thrilling mountain experiences.
                            Guided adventures across Nepal’s peaks.
                        </p>
                    </div>
                </div>

                <div className="package-card">
                    <div className="package-text">
                        <h3>Everest Climbing</h3>
                        <p>
                            Guided Everest expeditions with expert support.
                            The ultimate Himalayan challenge.
                        </p>
                    </div>
                </div>

                <div className="package-card">
                    <div className="package-text">
                        <h3>Home Stays</h3>
                        <p>
                            Authentic local living in the Himalayas.
                            Culture, comfort, and warm hospitality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Package;
