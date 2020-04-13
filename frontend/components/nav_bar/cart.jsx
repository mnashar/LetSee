import React from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
// import shoppingCartLogo from './shoppingCart.png'; 


class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.cart = this.cart.bind(this)
        
    }
    cart(){
        
        return (
            <Link to="/cart_items">
                <button className="btn_black_rounded">
                   Cart                  </button>
            </Link>

            
        )
    }

    render () {
        return this.props.currentUser ? this.cart() : null
    }
}

export default Cart