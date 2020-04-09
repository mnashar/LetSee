import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = ({currentUser, openModal, logout}) => {
    let loggedOut = () => {
        return (
            <div className="header-item" id="header-right">
                <button className="sign-in-test" onClick={() => (openModal("Sign In"))}>Sign Innn</button>
            </div>
        )
    }




    let loggedIn = () => {
        return (
            <Link to="/">
                <button className="test" onClick={logout}>Logout</button>
            </Link>
        )
    }

    return currentUser ? loggedIn() : loggedOut() 
}

export default SignIn