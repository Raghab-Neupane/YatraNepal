import videoSrc from "../assets/trimmed.mp4";

const Hero: React.FC = () => {
  return (
    <main className="hero">


      <video className="hero-video" src={videoSrc} autoPlay muted loop playsInline></video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Transforming Healthcare <br />
          Through <span>AI Innovation</span>
        </h1>

      <p>
        Pioneering intelligent solutions that bridge artificial intelligence
        and medical practice. From automated documentation to diagnostic
        support, we're revolutionizing healthcare delivery.
      </p>

      </div>
    </main>
  );
};

export default Hero;
