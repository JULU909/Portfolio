import React from 'react'
import * as  siIcons from "react-icons/si"
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar(){
    return (
        <div className='navbar'> 
            <nav>
                <ul>
                    
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Contact</Link></li>

                </ul>
           </nav>

        </div>

    )


}




export default Navbar


