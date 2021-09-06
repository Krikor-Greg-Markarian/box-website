import React from 'react'
import { FaSearch, FaGripLines } from 'react-icons/fa';

function Navbarwhite() {
    return (
        <div>
            <div className = "bg-white">
                <ul className = "container mx-auto">
                    <li className = "text-black inline font-bold text-2xl"><a href="#">Deus</a></li>
                    <div className ="ml-3 inline">
                    <li className = "text-white inline ml-4 bg-blue-700 px-2 py-1 font-bold"><a href="#">HOME</a></li>
                    <li className = "text-black inline ml-4 font-bold"><a href="#">POSTS</a></li>
                    <li className = "text-black inline ml-4 font-bold"><a href="#">PAGES</a></li>
                    <li className = "text-black inline ml-4 font-bold"><a href="#">FEATURES</a></li>
                    <li className = "text-black inline ml-4 font-bold"><a href="#">PURCHASE</a></li>
                    </div>
                    <div className = " float-right mt-2">
                        <FaSearch  className = "inline"/>
                        <FaGripLines className = "inline ml-6"/>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbarwhite
