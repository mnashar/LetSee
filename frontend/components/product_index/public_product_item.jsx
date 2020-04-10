import React from 'react'
import { Link } from 'react-router-dom'

class PublicProductIdxItem extends React.Component {
    constructor(props) {
        super(props)
        this.shortensTitle = this.shortensTitle.bind(this)
    }

    shortensTitle(str) {
        if (str.length > 18) {
            return (
                <span className="public-name">{str.slice(0, 18) + " ..."}</span>
            )
        } else {
            return (
                
                <span className="public-name">{str}</span>
            )
        }
    }

    render() {
        let { product } = this.props
        return (
            <div className="idx-item-div">
                <Link className="public-product-links" to={`/products/${product.id}`}>
                    <img className="idx-images" src={`${product.photourl}`} alt="" /> 
                   
                    {this.shortensTitle(product.name)}
                    <h3 className="public-price">${product.price}</h3>
                </Link>
            </div>
        )
    }
}

export default PublicProductIdxItem