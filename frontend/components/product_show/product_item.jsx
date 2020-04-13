import React from 'react'

class ProductItem extends React.Component{
    constructor(props) {
        
        super(props) 
        this.state = { quantity: 1 }
        debugger;
        this.addProductToCart = this.addProductToCart.bind(this)
        
    }

    addProductToCart(e) {
        e.preventDefault()
        let { sessionId, product } = this.props

        if (sessionId === null) {
            this.props.openModal()
        }

        debugger;
        this.setState({ quantity: this.state.quantity + 1 })

        this.props.createCartItem({ customer_id: sessionId, product_id: product.id, quantity: this.state.quantity })
    }

    render(){
        let { product } = this.props
        debugger;
        return (
            <div className="show-div">
                <img className="show-image" src={`${product.photourl}`} alt="" />
                <div className="info-div">
                    <div className="name-product">{product.name}</div>
                    <h2 className="price-product">${product.price}</h2>
                    <button onClick={this.addProductToCart} className="signin-submit">Add to cart</button>

                    <div>
                            <label className="label-description">Description</label>
                        <h2 className="description-product">{product.description}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem