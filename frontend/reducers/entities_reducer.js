import { combineReducers } from 'redux';
import users from './users_reducer';
import categories from "./categories_reducer";
import products from './products_reducer';
import cartItems from './cart_items_reducer';
import reviews from "./reviews_reducer";

export default combineReducers({
  users,
  categories,
  products,
  cartItems,
  reviews
});
