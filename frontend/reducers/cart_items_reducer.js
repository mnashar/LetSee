import { DELETED_CART_ITEM, RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/cart_item_action'

const cartItemsReducer = (state={}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_CART_ITEM:
            newState[action.cartItem.id] = action.cartItem
            return newState
        case RECEIVE_CART_ITEMS:
            return action.cartItems
        case REMOVE_CART_ITEM:
            delete newState.id 
            return newState
        case DELETED_CART_ITEM:
            newState[action.id].deleted = true
            return newState
        default:
            return state
    }
}

export default cartItemsReducer