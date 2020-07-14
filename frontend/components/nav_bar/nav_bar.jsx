import React from 'react';
import SignIn from './sign_in';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import CartContainer from './cart_container'
import SearchBarContainer from './search_bar_container'
import CategoryIndexContainer from '../category_index/category_index_container'
import Signature from '../signature/signature'
// import marwa from "./marwa.jpg";
// import img from "./one.jpeg";
 

const NavBar = ({ currentUser, openModal, logout }) => {
    return (
      <>
        <div className="signature-container">
          <a href="https://www.marwaelnashar.com/" target="blank">
            <span className="tooltip">
              <i className="fa fa-globe signature-icon" aria-hidden="true"></i>
              <span className="tooltiptext">My website</span>
            </span>
          </a>

          <a href="https://www.linkedin.com/in/marwaelnashar/" target="blank">
            <span className="tooltip">
              <i
                className="fa fa-linkedin-square signature-icon"
                aria-hidden="true"
              ></i>
              <span className="tooltiptext">Linkedin</span>
            </span>
          </a>

          <a href="https://angel.co/u/marwa-elnashar" target="blank">
            <span className="tooltip">
              <i
                className="fa fa-angellist signature-icon"
                aria-hidden="true"
              ></i>
              <span className="tooltiptext">Angel List</span>
            </span>
          </a>

          <a href="https://github.com/mnashar" target="blank">
            <span className="tooltip">
              <i className="fa fa-github signature-icon" aria-hidden="true"></i>
              <span className="tooltiptext">Github</span>
            </span>
          </a>
        </div>

        <div className="nav">
          <Link to="/" className="logo">
            <h1>Letsyyy</h1>
          </Link>

          <div className="searchDiv">
            <SearchBarContainer />
          </div>

          {/* <Signature /> */}
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