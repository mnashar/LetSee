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
                <button className="shopping_cart_icon">
                    
                        
                    <i className="fas fa-shopping-cart"></i>                  </button>
            </Link>

            
        )
    }

    render () {
        return this.props.currentUser ? this.cart() : null
    }
}

export default Cart