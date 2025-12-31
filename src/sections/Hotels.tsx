import HorizontalScroll from '../components/HorizontalScroll';
import Hc from '../components/hotelcard/hc'
import Pokhara from '../assets/hotels_image/Pokhara.webp';
import Kathmandu from '../assets/hotels_image/Kathmandu.webp';
import Lumbini from '../assets/hotels_image/HotelLumbiniHeritage.jpg';
import Mustang from '../assets/hotels_image/Lo_Mustang_Resort.jpg'

const Hotels = () => {
  return (
    <div className="hotel">
        <h2>Partnered <span>Hotels</span></h2>
        <HorizontalScroll>
            <div className='hotel-cards-container'>
                <Hc
            image={Kathmandu}
            title="Kathmandu Marriott Hotel"
            description="A luxurious stay in the heart of Kathmandu with world-class amenities."
          />

          <Hc
            image={Pokhara}
            title="Hotel ABC Pokhara"
            description="Look for the stunning lakes and mountains residing with us!"
          />

          <Hc
            image={Lumbini}
            title="Hotel Lumbini Heritage"
            description="Experience the rich history of Lumbini with luxurious accommodations."
          />

          <Hc
            image={Mustang}
            title="Hotel Lo Mustang Resort"
            description="Experience the unique culture and stunning landscapes of Mustang."
          />

          <Hc
            image={Mustang}
            title="Hotel Lo Mustang Resort"
            description="Experience the unique culture and stunning landscapes of Mustang."
          />

            </div>

        </HorizontalScroll>
    </div>
  )
}

export default Hotels