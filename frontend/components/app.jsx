
import React from 'react';
import { Route, Switch } from 'react-router-dom';


import { Provider } from 'react-redux';
import Modal from './modal/modal'
import NavBarContainer from './/nav_bar/nav_bar_container'
import ProductIndexContainer from './product_index/product_index_container'
import ProductItemContainer from './product_show/product_item_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CartItemContainer from './cart_items/cart_items_container'
// import SearchProductsContainer from './search/search_products_container';

const App = () => (
    
    <div>
        <NavBarContainer />
{/* this.err(); */}
{/* {this.props.errors} */}
      
        <Modal />
       
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/" component={ProductIndexContainer} />
        {/* <Route exact path='/search/:searchQuery' component={ProductIndexContainer} /> */}


        {/* <Route exact path='/search/:searchQuery' component={SearchProductsContainer} /> */}
        <Route exact path='/search/:searchQuery' component={ProductIndexContainer} />


        <Route exact path="/products/:productId" component={ProductItemContainer} />
        <ProtectedRoute path="/cart_items" component={CartItemContainer} />

    </div>
);

export default App;