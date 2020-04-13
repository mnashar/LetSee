import { connect } from 'react-redux'
import { deletedCartItem, getAllCartItems, createCartItem, deleteCartItem } from '../../actions/cart_item_action'
import CartItems from './cart_items'

const mapStateToProps = state => { 
    return ({
    userCartItems: Object.values(state.entities.cartItems),
    cartItems: Object.values(state.entities.cartItems),
    currentUserId: state.session.id
})}

const mapDispatchToProps = dispatch => ({
    getAllCartItems: () => dispatch(getAllCartItems()),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    deletedCartItem: (id) => dispatch(deletedCartItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)