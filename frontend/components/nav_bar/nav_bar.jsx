import React from 'react';
import SignIn from './sign_in';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import CartContainer from './cart_container'
import SearchBarContainer from './search_bar_container'


const NavBar = ({ currentUser, openModal, logout }) => {
    return(
        
        <>
            <div className="nav">
                <Link to="/" className="logo">
                    <h1 >Letsyyy</h1>
                </Link>

           
                
                <GreetingContainer />
            <CartContainer />
                
                    <div className="button-divs">
                       
                
                        <SignIn 
                            openModal={openModal}
                            logout={logout}
                            currentUser={currentUser}
                        />
                    </div>
            </div>
            <div className="searchDiv">
                <SearchBarContainer />
            </div>
        </>
    )
}

export default NavBar