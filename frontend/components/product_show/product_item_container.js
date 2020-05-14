import { connect } from 'react-redux'
import React from 'react'
import ProductItem from './product_item'
import { getProduct } from '../../actions/product_actions'
import { createCartItem } from '../../actions/cart_item_action'

import { openModal } from '../../actions/modal_actions'


class ProductItemClass extends React.Component{
    
    constructor(props){
        super(props)
        this.props.getProduct(this.props.match.params.productId)
    }

    componentDidMount() {
        this.props.getProduct(this.props.match.params.productId)
    }

    render() {
        const { openModal, sessionId, product, createCartItem, cartItem} = this.props
        if (!product) return null
        return (
            <ProductItem
                openModal={openModal}
                sessionId={sessionId}
                product={product}
                createCartItem={createCartItem}
                cartItem={cartItem}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.productId],
        cartItem: { customer_id: null, product_id: null },
        sessionId: state.session.id 
};
}

const mapDispatchToProps = dispatch => ({
    getProduct: product => dispatch(getProduct(product)),
    openModal: () => dispatch(openModal("Sign In")),
    createCartItem: product => dispatch(createCartItem(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemClass)




