import React from 'react'

class ProductItem extends React.Component{
    constructor(props) {
        
        super(props) 
        
    }

    render(){
        let { product } = this.props
        
        return (
            <div className="show-div">
                <img className="show-image" src={`${product.photourl}`} alt="" />
                <div className="info-div">
                    <div className="name-product">{product.name}</div>
                    <h2 className="price-product">${product.price}</h2>
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