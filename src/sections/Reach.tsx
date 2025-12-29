import React from 'react'
import nepal from "../assets/nepal.png";
import StatCard from '../components/Statcard';

const Reach = () => {
  return (
    <div className="Reach-page">
      <h2>Our Reach in <span>Nepal</span></h2>

      <div className='Reach-content'>
        <p>
          We have a strong presence in Nepal, with numerous projects and initiatives aimed at improving the lives of its citizens.
        </p>
        <div className="body">
          <img className='mapofnepal' src={nepal} alt="Nepal Map" />
          <StatCard />
        </div>
      </div>
    </div>
  )
}

export default Reach