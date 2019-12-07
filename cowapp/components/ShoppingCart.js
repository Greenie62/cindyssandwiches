import React, {Component} from "react"




class ShoppingCart extends Component{
    state={}



    render(){
        return(
            <div className={this.props.togglecart ?'shoppingcart-container' : 'hidecart'}>
            <div className='shoppingcart-header'>
            <h3>Name:{this.props.customer}</h3>
            <h3>Total:{this.props.total > 0 ? `$${this.props.total}` : null}</h3>
            </div>
            </div>
        )
    }
}


export default ShoppingCart;