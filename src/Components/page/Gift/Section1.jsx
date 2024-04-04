import React from 'react'
import Gift3 from './../../../images/gift3.jpg'
import { Link } from 'react-router-dom'
const Section1 = () => {
  return (
    <div>
    <div className='gift-section'>
     <div className='gift-section1'>
         <div className="gift-section-1-img">
          <img src={Gift3} alt="" />
         </div>
         <div className='gift-section-1-text'>
         <p>New! Effortlessly send up to 10 eGifts per purchase. Select a design to start!</p>
         </div>
     </div>
    </div>
    <div className='gift-section-2'>
      <div className='gift-section-2-head'>
        <div className='gift-section-2-text'>
          <h2>Received a gift card?</h2>
        </div>
        <div >
        <p>Earns 2★Stars per $1</p>
        </div>
          <div className='gift-btn'>
            <Link>Add to Reload</Link>
            <Link>Check balance</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Section1