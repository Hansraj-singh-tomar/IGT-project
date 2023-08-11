import React from 'react'
import './plan.css'
import PlanListCarFirst from '../../components/plan list cart 1/PlanListCarFirst'
import PlanListCartSec from '../../components/plan list cart 2/PlanListCartSec'


const Plan = () => {
  return (
      <div className='plan-container'>
        <p className="plan-title">Frequent Question</p>
        <h2 className="plan-title-2">Do you have any question</h2>
        <div className='monthly-annual-plan-btn'>
            <button className='btn-1'>Monthly Plan</button>
            <button className='btn-2'>Annual Plan</button>
        </div>
          
        <div className='plan-list-container'>
              <PlanListCarFirst />  
              <PlanListCartSec />
        </div>
      </div>
  )
}

export default Plan