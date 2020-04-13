import { combineReducers } from 'redux';

// import benches from './benches_reducer';
import users from './users_reducer';
import products from './products_reducer';
import cartItemsReducer from './cart_items_reducer'

export default combineReducers({
    // benches,
    users,
    products,
    cartItems: cartItemsReducer
});
