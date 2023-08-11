import React from 'react';
import './helpSection.css';
import Accordion from '../../components/Accordion/Accordion';

const HelpSection = () => {
  return (
      <div className='help-container'>
          
        <p className="help-title">Frequent Question</p>
        <h2 className="help-title-2">Do you have any question</h2>
        <div className='accordion-container'>      
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
        </div>
      </div>
  )
}

export default HelpSection