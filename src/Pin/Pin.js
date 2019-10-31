import React, { useContext, useState } from 'react';
import { CurrentCenterContext } from '../Contexts/CurrentCenterContext';
import './Pin.css';

const Pin = ({ center, selectCenter }) => {
  const [isHovered, updateHoverState] = useState(false);
  const { reliefCenter, setreliefCenter } = useContext(CurrentCenterContext);

  const handleHover = () => {
    updateHoverState(!isHovered)
    setreliefCenter(center)
  }
  
  const handleSelectCenter = () => {
    selectCenter(true)
  }

  if (!isHovered) {
    return (
      <div onMouseEnter={handleHover}>
        <img className="Pin_img" src={'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/location-alt-512.png'} alt="hello" />
      </div>
    )
  } else {
    return (
      <div className='pin-hover' onMouseLeave={handleHover}>
        <img className="relief-center-img" src={'https://oceanservice.noaa.gov/hazards/drc/drc.jpg'} alt="hello" />
        <div onClick={handleSelectCenter}>
          <p className="pin-title">{reliefCenter.name}</p>
          <p>Phone: 720-521-1234</p>
          <p>Capacity: 175/250 people</p>
        </div>
      </div>
    )
  }
}

export default Pin;