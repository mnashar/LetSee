import React from 'react'
import PublicProductIdxItem from './public_product_item'


class ProductIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getAllProducts()
    }

    render() {
        return(
            <div>
                <ul className="grid-container">
                    {this.props.allProducts.map((product) => {
                        return(
                            <div className="grid-item">
                                <PublicProductIdxItem
                                    product={product}
                                    key={product.id}
                                />
                            </div>
                        )
                    })}
                </ul>
            </div> 
        )
    }

}

export default ProductIndex