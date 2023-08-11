import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>

    <div className='footer-container'>
        <div className='footer-col'>
              <h2 className='footer-h2'>About Us</h2>
              {
                ["Support Center", "Customer Support","About Us","Copyright","Popular Campaign"].map((item, i) => {
                    return(
                        <p key={i}>{item}</p>
                    )
                })
              }
        </div>
        <div className='footer-col'>
              <h2 className='footer-h2'>Our Information</h2>
              {
                ["Return Policy", "Privacy Policy", "Terms & Conditions", "Site Map", "Store Hours"].map((item, i) => {
                    return(
                        <p key={i}>{item}</p>
                    )
                })
              }
        </div>
        <div className='footer-col'>
              <h2 className='footer-h2'>My Account</h2>
              {
                ["Press inquiries", "Social media",  "directories", "Images & B-roll","Permissions"].map((item, i) => {
                    return(
                        <p key={i}>{item}</p>
                    )
                })
              }
        </div>
        <div className='footer-col'>
              <h2 className='footer-h2'>Policy</h2>
             {
                ["Application security", "Software principles", "Unwanted software policy", "Responsible supply chain","Responsible supply chain"].map((item, i) => {
                    return(
                        <p key={i}>{item}</p>
                    )
                })
              }
        </div>
    </div>
    </>
  )
}

export default Footer