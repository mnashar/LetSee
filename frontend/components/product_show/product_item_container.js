import { connect } from 'react-redux'
import React from 'react'
import ProductItem from './product_item'
import { getProduct } from '../../actions/product_actions'


class ProductItemMiddleMan extends React.Component{
    constructor(props){
        
        super(props)
        this.props.getProduct(this.props.match.params.productId)
        console.log('aaaaaaa');
    }

    componentDidMount() {
        this.props.getProduct(this.props.match.params.productId)
    }

    render() {
        const { openModal, sessionId, product} = this.props
        if (!product) return null
        return (
            <ProductItem
                openModal={openModal}
                sessionId={sessionId}
                product={product}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  
    return {
    product: state.entities.products[ownProps.match.params.productId]
};
}

const mapDispatchToProps = dispatch => ({
    getProduct: product => dispatch(getProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemMiddleMan)

// export default connect(mapStateToProps, mapDispatchToProps)(ProductItemMiddleMan)





