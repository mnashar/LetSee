import React from 'react';
import SignIn from './sign_in';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';


const NavBar = ({ currentUser, openModal, logout }) => {
    return(
        
            <div className="nav">
                <Link to="/" className="logo">
                    <h1 >Letsy</h1>
                </Link>
                <GreetingContainer />
                
                    <div className="button-divs">
                       
                        
                        <SignIn 
                            openModal={openModal}
                            logout={logout}
                            currentUser={currentUser}
                        />
                    </div>
            </div>
        
    )
}

export default NavBar