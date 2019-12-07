import React from "react"
import {Link} from "react-router-dom"
import {FaRebel} from "react-icons/fa"




const Navbar = ()=>{


    return(
        <div className='navbar'>
        <FaRebel className='light'/>
        <ul className='nav-links'>
        <Link className='nav-link-item' to="/starwars">StarWars</Link>
        <Link className='nav-link-item' to="/posts">Posts</Link>
        <Link className='nav-link-item' to="/wheel">Wheel</Link>
        </ul>
        </div>
    )
}


export default Navbar