import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = ({currentUser, openModal, logout}) => {
    let loggedOut = () => {
        return (
            <div className="header-item" id="header-right">
                {/* <i class="fas fa-shopping-cart"></i> */}
                <button className="sign-in-test" onClick={() => (openModal("Sign In"))}>Sign in</button>
                
            
            </div>
        )
    }




    let loggedIn = () => {
        return (
            <Link to="/" className="sign-in-test2">
                <button  onClick={logout}>Logout</button>
            </Link>
        )
    }

    return currentUser ? loggedIn() : loggedOut() 
}

export default SignIn