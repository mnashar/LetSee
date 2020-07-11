import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = ({currentUser, openModal, logout}) => {
    let loggedOut = () => {
        return (
            <div className="header-item" id="header-right">               
                <button className="sign-in-link" onClick={() => (openModal("Sign In"))}>Sign in</button>
            </div>
        )
    }

    let loggedIn = () => {
        return (
            <Link to="/" className="sign-in-link">
                <button  onClick={logout}>Logout</button>
            </Link>
        )
    }

    return currentUser ? loggedIn() : loggedOut() 
}

export default SignIn