import '../whatsapp/WhatsAp.css';
import whatsapp from '../whatsapp/download.svg'

const message = encodeURIComponent(
  "Hello, I would like to book an adventure trip with Yatra Nepal."
);

const WhatsApp = () => {
  return (
    <a
      href={`https://wa.me/917602281232?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img src={whatsapp} alt="WhatsApp" />
    </a>
  );
};

export default WhatsApp;
