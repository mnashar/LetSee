import React from 'react';
import SignIn from './sign_in';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import CartContainer from './cart_container'
import SearchBarContainer from './search_bar_container'
import CategoryIndexContainer from '../category_index/category_index_container'


const NavBar = ({ currentUser, openModal, logout }) => {
    return (
      <>
        <div className="nav">
          <Link to="/" className="logo">
            <h1>Letsyyy</h1>
          </Link>
          
          <div className="searchDiv">
            <SearchBarContainer />
          </div>

          <GreetingContainer />

          <div className="button-divs">
            <SignIn
              openModal={openModal}
              logout={logout}
              currentUser={currentUser}
            />
          </div>
          <CartContainer />
        </div>

        <CategoryIndexContainer />
      </>
    );
}

export default NavBar