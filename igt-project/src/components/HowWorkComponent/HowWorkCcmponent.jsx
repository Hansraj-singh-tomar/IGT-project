import React from 'react'
import './howWorkComponent.css'
import WorkCart from '../work cart/WorkCart'

const HowWorkCart = () => {
  return (
    <div className='howWork-cart-container'>
        <p className="work-title">Whats the function</p>
        <h2 className="work-title-2">Let’s see how it works</h2>
        
        <div className='work-cart-container'>
            <WorkCart/>
            <WorkCart/>
            <WorkCart/>
            <WorkCart/>
        </div>
    </div>
  )
}

export default HowWorkCart