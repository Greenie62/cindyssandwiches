import React, {Component} from "react"
import {FaShoppingBasket} from "react-icons/fa"




class Navbar extends Component{


    render(){
    return(
        <div className='navbar'>
        <img className='nav-banner' src="https://fontmeme.com/permalink/191206/6636e40900408868d5611dfba111222f.png" alt="subway-font" border="0"/>
<ul className='nav-items-list'>
<li onClick={this.props.toggleMenu} className='nav-item'>Classics</li>
<li onClick={this.props.toggleCart} className='nav-item'><FaShoppingBasket/></li>
</ul>
        </div>
    )
}
}

export default Navbar;