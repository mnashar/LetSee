import * as CartItemAPIUtil from '../util/cart_item_api_util'

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS"
export const DELETED_CART_ITEM = "DELETED_CART_ITEM"


export const receiveCartItem = (cartItem) => ({
    type: RECEIVE_CART_ITEM,
    cartItem
})

export const receiveCartItems = response => ({
    type: RECEIVE_CART_ITEMS,
    cartItems:response.cartItems,
    products: response.products
})

export const removeCartItem = (cartItemId) => ({
    type: REMOVE_CART_ITEM,
    cartItemId
})

export const deletedCartItem = (id) => ({
    type: DELETED_CART_ITEM,
    id
})

export const getAllCartItems = () =>  dispatch => {
    
   return  (CartItemAPIUtil.getAllCartItems() 
       .then(response => dispatch(receiveCartItems(response))))
}

export const getCartItem = cartItemId => dispatch => (
    CartItemAPIUtil.getCartItem(cartItemId)
        .then( cartItem => dispatch(receiveCartItem(cartItem)))
)

export const createCartItem = cartItem => dispatch => (
    CartItemAPIUtil.createCartItem(cartItem) 
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const deleteCartItem = cartItemId => dispatch => (
    CartItemAPIUtil.deleteCartItem(cartItemId)
        .then(() => dispatch(removeCartItem(cartItemId)))
)