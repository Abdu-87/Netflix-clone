import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer_outer-container'>
        <div className="footer_iner-container">
            <div className="footer_icon">
             <FacebookIcon/>
             <InstagramIcon/>
             <YouTubeIcon/>
            </div>
            <div className="footer_data">
                <div className="">
                    <ul className="">
                        <li className="">Audio Description</li>
                        <li className="">Invaster Relation</li>
                        <li className="">Legal Notice</li>
                    </ul>
                </div>
                <div className="">
                    <ul className="">
                        <li className="">Help Center</li>
                        <li className="">Jobs</li>
                        <li className="">Cookie Preference</li>
                        <li className="">Legal Notice</li>

                    </ul>
                </div>
                <div className="">
                        <ul className="">
                            <li className="">Gift Cards</li>
                            <li className="">Terms of Uses</li>
                            <li className="">Corporate Information</li>
                        </ul>
                </div>
                <div className="">
                        <ul className="">
                            <li className="">Media Center</li>
                            <li className="">Privacy</li>
                            <li className="">Contact Us</li>
                        </ul>
                </div>
                <div className="service-code">
                    <p>
                        Service Code
                    </p>
                </div>
                
            </div>
            <div className="copy-write">
                 Copyright:1997-2024 Netflix
                </div>
        </div>
        </div>
    
  )
}

export default Footer