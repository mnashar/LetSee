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
        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
        
        this.reduceCartItems = this.reduceCartItems.bind(this);
        this.roundItUp = this.roundItUp.bind(this);
    }

    componentDidMount(){
        this.props.getAllCartItems()
    }

    deleteItem(cartItem) {
        this.props.deleteCartItem(cartItem.id)
    }

    total(cartItem) {
       let price = this.props.products[cartItem.product_id].price;
        let tot = price * cartItem.quantity;
        let precision = 2;
        precision = Math.pow(10, precision)
        tot = Math.ceil(tot * precision) / precision
        return (tot);
    }

    roundItUp(num) {
        let precision = 2;
        precision = Math.pow(10, precision)
        return Math.ceil(num * precision) / precision
        
    }
    

   

    uniqueCartItems(){
        let { userCartItems } = this.props
        let newCartItems = {}

        userCartItems.forEach(userCartItem => {
            if (newCartItems[userCartItem.product.id]) {
                newCartItems[userCartItem.product.id].quantity += userCartItem.quantity
            } else {
                newCartItems[userCartItem.product.id] = 
            { product: userCartItem.product, quantity: userCartItem.quantity, deleteableId: userCartItem.id}
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
 

    calculateTotalPrice(userCartItems, products ) {
        
        let price = 0;
        let itemss=0;
        userCartItems.forEach(item => {
            price += (item.quantity * products[item.product_id].price)
            itemss += item.quantity
        });
       
        return [price, itemss];

    }

    reduceCartItems(userCartItems,products){
        let newCartItems=[];
        userCartItems.forEach(item => {
           
            if (newCartItems[item.product_id]) {
                newCartItems[item.product_id].quantity += item.quantity
            } else {
                newCartItems[item.product_id] =
                    { id: item.id, customer_id:item.customer_id, quantity: item.quantity,product_id:item.product_id, deleted: false }
            }
        });
        return newCartItems;
    }


    render() {
        const { userCartItems, products } = this.props        
        let cartTotal=0;
        let totalItems=0;
        let cartSummary=[0,0];
        if (userCartItems){
            cartSummary = this.calculateTotalPrice(userCartItems, products );
            cartTotal = this.roundItUp(cartSummary[0]);
            totalItems = cartSummary[1];
        }
        let cartsHeader ="Your cart is empty";
        if (totalItems!==0){
            cartsHeader = totalItems+" items in your cart";
        }

        let reducedCartItems = this.reduceCartItems(userCartItems,products)


        let randomMessages = ["Only 1 available",
    "Over 20 people have this in their cart",
"Only 10 available and it's in 9 people's carts",
"Only 1 available and it's in 2 people's carts",
""]
        return (
            <div>

                <div className="buy-page">

                    <div className="cartContainer">
                       
                        <h1 className="checkout-title-total">{totalItems} items in your cart</h1>

                        <div className="cart-div"> 
                            {reducedCartItems.map(cartItem => {

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
                    <div className="checkout-totals-div">
                        <h2 className="checkout-title">{cartsHeader}</h2>
                        <img className="payment" src={paymentImage} alt="payment" />
                        <br></br>
                      
                      <div className="div-totals">
                        <span><strong className="public-totals">Item(s) total </strong></span>
                        <span><strong className="public-totals">$ {cartTotal}</strong></span>
                        </div>

                    </div>
                    
                    <span className="shipping-text"><i className="fas fa-shipping-fast style='margin-right:20px'"></i>  Get shipping cost</span>
                  <div> <button className="checkout-btn">Proceed to checkout</button>
                    </div> 
                </div>

            </div>
        )
    }
}

export default CartItems