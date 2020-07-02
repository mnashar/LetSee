
import React from 'react';
import { Route, Switch } from 'react-router-dom';


import { Provider } from 'react-redux';
import Modal from './modal/modal'
import NavBarContainer from './/nav_bar/nav_bar_container'
import CategoryIndexContainer from "./category_index/category_index_container";
import CategoryShowContainer from './category_index/category_show_container';
import ProductIndexContainer from './product_index/product_index_container'
import ProductItemContainer from './product_show/product_item_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CartItemContainer from './cart_items/cart_items_container';
import ReviewIndex from "./reviews/reviews_index_top";
import ReviewForm from "./reviews/review_form";


const App = () => (
  <div>
    <NavBarContainer />

    <Modal />

    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    {/* <Route exact path="/" component={CategoryIndexContainer} /> */}
    <Route exact path="/" component={ProductIndexContainer} />
    <Route
      exact
      path="/search/:searchQuery"
      component={ProductIndexContainer}
    />
    <Route exact path="/products/:productId" component={ProductItemContainer} />

    <Route exact path='/categories/:categoryId' component={CategoryShowContainer} />

    <ProtectedRoute path="/cart_items" component={CartItemContainer} />
    <ProtectedRoute
      exact
      path="/products/:productId/reviews"
      component={ReviewIndex}
    />
    <ProtectedRoute
      exact
      path="/products/:productId/reviews/new"
      component={ReviewForm}
    />
  </div>
);

export default App;