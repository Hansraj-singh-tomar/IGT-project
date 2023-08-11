import React, {useState} from 'react'
import './accordion.css'
import plus from "../../assets/plus.png"
import minus from "../../assets/minus.png"



const Accordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
        <div className="accordion-header" onClick={toggleAccordion}>
            <img src={`${isExpanded ? minus : plus}`} alt="logo" width="20px" height="20px" />
            <h3>Website response taking time, how to improve?</h3>
        </div>
        {
            isExpanded &&
            <div className="accordion-content">
                <p>An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.</p>
            </div>
        }
    </div>
  );
}

export default Accordion