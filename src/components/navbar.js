import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


function Navbar() {
    return (
        <div>
            <div className = "bg-black">
                <ul className = "container mx-auto ">
                    <li className = "text-white inline"><a href="#">News</a></li>
                    <li className = "text-white inline ml-4"><a href="#">Lifestyle</a></li>
                    <li className = "text-white inline ml-4"><a href="#">Advertise</a></li>
                    <li className = "text-white inline ml-4"><a href="#">Contact</a></li>
                   <div className = "text-white inline float-right">
                        <FaFacebookF className="inline" />
                        <FaTwitter className = "ml-5 inline" />
                        <FaInstagram className = "ml-5 inline" />
                        
                   </div>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar
