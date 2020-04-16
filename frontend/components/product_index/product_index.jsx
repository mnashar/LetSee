import React from 'react'
import PublicProductIdxItem from './public_product_item'
import { withRouter } from 'react-router-dom'

class ProductIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
       
        if (this.props.match.params.searchQuery === undefined){
            this.props.getAllProducts()
        }
        else{
            this.props.getSearchProducts(this.props.match.params.searchQuery);
        }
        
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

export default withRouter(ProductIndex);