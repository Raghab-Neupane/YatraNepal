import HorizontalScroll from '../components/HorizontalScroll';
import Hc from '../components/hotelcard/hc'
import Everest from '../assets/Everest.webp';

const Hotels = () => {
  return (
    <div className="hotel">
        <h2>Partnered <span>Hotels</span></h2>
        <HorizontalScroll>

          <Hc
            image={Everest}
            title="Kathmandu Marriott Hotel"
            description="A luxurious stay in the heart of Kathmandu with world-class amenities."
          />

          <Hc
            image={Everest}
            title="Pokhara"
            description="A beautiful city known for its stunning lakes and mountains."
          />

          <Hc
            image={Everest}
            title="Lumbini"
            description="The birthplace of Lord Buddha, a UNESCO World Heritage Site."
          />

        </HorizontalScroll>
    </div>
  )
}

export default Hotels