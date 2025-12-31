import nepal from "../assets/nepal.png";
import StatCard from '../components/Statcard';

const Reach = () => {
  return (
    <div className="Reach-page" id="about-us">
      <h2>Our Reach in <span>Nepal</span></h2>

      <div className='Reach-content'>
        <p>
          Look at the view of the blue-dots where we have contacted our travellers !
        </p>
        <div className="body">
          <img className='mapofnepal' src={nepal} alt="Nepal Map" />
          <div className="reach-stats">
            <StatCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reach