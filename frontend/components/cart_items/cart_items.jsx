import React from 'react'
import { Link } from 'react-router-dom'

class CartItems extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            render: [false],
            grandTotal: 0
        }        

        this.uniqueProducts = this.uniqueCartItems.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.total = this.total.bind(this)
    }

    componentDidMount(){
        this.props.getAllCartItems()
    }

    deleteItem(cartItem) {
        let deleteableId = cartItem[1].deleteableId

        this.props.deleteCartItem(deleteableId)
        this.props.deletedCartItem(deleteableId)
    }

    total(cartItem) {
        return cartItem[1].product.price * cartItem[1].quantity
    }

    uniqueCartItems(){
        let { userCartItems } = this.props
        let newCartItems = {}

        userCartItems.forEach(userCartItem => {
            
            if (newCartItems[userCartItem.product.id]) {
                newCartItems[userCartItem.product.id].quantity += userCartItem.quantity
            } else {
                newCartItems[userCartItem.product.id] = { product: userCartItem.product, quantity: userCartItem.quantity, deleteableId: userCartItem.id}
            }
        })
        
        return newCartItems
    }

    showLess(content) {
        if (content.length > 16) {
            return (
                <h1 className="public-name">{content.slice(0, 16) + "..."}</h1>
            )
        } else {
            return (
                <h1 className="public-name">{content}</h1>
            )
        }
    }
 
    render() {
        let cartItemsObj = Object.entries(this.uniqueCartItems())
        return (
            <div>
                <h1 className="header">Your Cart</h1>

                <div className="buy-page">
                        <div className="cart-div"> 
                            {cartItemsObj.map(cartItem => {
                                let product = cartItem[1].product
                                return (
                                    <div className="cart-item-div">
                                        <Link className="public-product-links" to={`/products/${product.id}`}>
                                            <img className="idx-images" src={product.photourl} alt="" />
                                            {this.showLess(product.name)}
                                        </Link>
                                        <br />
                                        <div className="quantity">
                                            <label className="quantity-word">Quantity: </label>
                                            <div className="quantity-num">{cartItem[1].quantity}</div>
                                        </div>
                                        <div className="quantity">
                                            <div className="quantity-word">Total: </div>
                                            <div className="quantity-num">${this.total(cartItem)}</div>
                                        </div>
                                        <button className="delete-item-in-cart" onClick={() => this.deleteItem(cartItem)}>Delete Item</button>
                                    </div>
                                )}
                            )}
                        </div>
                </div>
                <div className="checkout-div">
                    <button className="checkout">Checkout</button>
                </div>
            </div>
        )
    }
}

export default CartItems