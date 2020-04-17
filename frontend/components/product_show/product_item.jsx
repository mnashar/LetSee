import React from 'react'
import {withRouter} from 'react-router-dom'

class ProductItem extends React.Component{
    constructor(props) {
        
        super(props) 
        this.state = { quantity: 1 }
    
        this.addProductToCart = this.addProductToCart.bind(this)
        
    }

    addProductToCart(e) {
        e.preventDefault()
        let { sessionId, product } = this.props

        if (sessionId === null) {
            this.props.openModal()
        }
        else{

            this.setState({ quantity: 1 })
            
            this.props.createCartItem({ customer_id: sessionId, product_id: product.id, quantity: this.state.quantity })
            
            this.props.history.push('/cart_items');
        }
    }

    render(){
        let { product } = this.props

        let productDescription = product.description.split(" ").slice(0,42).join(" ");
        productDescription = productDescription+".";
        return (
            <div className="show-div">
                <img className="show-image" src={`${product.photourl}`} alt="" />
                <div className="info-div">
                    <div className="name-product-title">{product.name}</div>
                    <h2 className="price-product">${product.price}</h2>
                    <button onClick={this.addProductToCart} className="add-to-cart">Add to cart</button>

                    <div>
                            <label className="label-description">Description</label>
                        <h2 className="description-product">{productDescription}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductItem);