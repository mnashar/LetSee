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
        // this.roundUpp = this.roundUp.bind(this)
    }

    componentDidMount(){
        this.props.getAllCartItems()
    }

    deleteItem(cartItem) {
        // let deleteableId = cartItem[1].deleteableId

        this.props.deleteCartItem(cartItem.id)
        // this.props.deletedCartItem(deleteableId)
    }

    total(cartItem) {
        // let tot = cartItem[1].product.price * cartItem[1].quantity;
        // let precision=2;
        //  precision = Math.pow(10, precision)
        // tot= Math.ceil(tot * precision) / precision
        // return (tot);

        return 0;
    }
    
   

    uniqueCartItems(){
        let { userCartItems } = this.props
        let newCartItems = {}

        userCartItems.forEach(userCartItem => {
            newCartItems[userCartItem.product.id] = { product: userCartItem.product, quantity: userCartItem.quantity, deleteableId: userCartItem.id }

            // if (newCartItems[userCartItem.product.id]) {
            //     newCartItems[userCartItem.product.id].quantity += userCartItem.quantity
            // } else {
            //     newCartItems[userCartItem.product.id] = { product: userCartItem.product, quantity: userCartItem.quantity, deleteableId: userCartItem.id}
            // }
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

        // const products =this.props.products;
        const { userCartItems, products } = this.props


        // let cartItemsObj = Object.entries(this.uniqueCartItems());
        let randomMessages = ["Only 1 available",
    "Over 20 people have this in their cart",
"Only 10 available and it's in 9 people's carts",
"Only 1 available and it's in 2 people's carts",
""]
        return (
            <div>

                <div className="buy-page">

                    <div className="cartContainer">
                       
                <h1 className="header">Your Cart</h1>

                        <div className="cart-div"> 
                            {userCartItems.map(cartItem => {
                                debugger;
                                // let product = cartItem[1].product
                                const product=products[cartItem.product_id];
                                return (
                                    <div className="cart-item-details">

                                        <div className="cart_item_details_photo">
                                            <Link className="public-product-links" to={`/products/${product.id}`}>
                                                <img className="idx-images" src={product.photourl} alt="" />                                    
                                            </Link>
                                        </div>

                                        <div className="cart_item_details_info">
                                            <div className="cart_item_title">
                                                <Link className="public-name_cart_item" to={`/products/${product.id}`}>                                                   
                                                    {product.name}
                                                </Link>
                                                

                                                </div>

                                            <div className="cart_item_title-right">
                                                <div className="cartItemsSub">
                                                        <div className="quantity">
                                                            
                                                            <div className="quantity-num">{cartItem.quantity}</div>
                                                        </div>
                                                        <div className="quantity">
                                                            
                                                            <div className="public-name">${this.total(cartItem)}</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                    {/* <div className="randomMessagesCartItem">{randomMessages[Math.floor(Math.random() * items.length)]}</div> */}
                                                    <div className="randomMessagesCartItem">{randomMessages[Math.floor(Math.random() * randomMessages.length)]}</div>
                                                   <br></br> <button className="delete-item-in-cart" onClick={() => this.deleteItem(cartItem)}>Remove</button>

                                                    </div>
                                                </div>
                                        </div>

                                    </div>
                                )}
                            )}
                        </div>
                
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