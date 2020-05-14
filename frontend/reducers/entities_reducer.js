import { combineReducers } from 'redux';
import users from './users_reducer';
import products from './products_reducer';
import cartItems from './cart_items_reducer'

export default combineReducers({
    users,
    products,
    cartItems
});
