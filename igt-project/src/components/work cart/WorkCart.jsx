import React from 'react'
import './workCart.css'
import arrow from '../../assets/arrow.png'

const WorkCart = () => {
  return (
    <div className='work-cart-containt'>
        <div className='work-cart-logo-arrow'>
        <div className='cart-logo'>
            <p className='cart-logo-text'>01</p>
        </div>
        <img src={arrow} alt="arrow" width="200px" height="40px"/>
        </div>
        <h2 className="work-cart-h2">Set disbursement Instructions</h2>
        <p className='work-cart-p'>Get your blood tests delivered at home collect a sample <br/> from the your blood tests.</p>
    </div>
  )
}

export default WorkCart