import React from 'react'
import SignIn from './sign_in'
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, openModal, logout }) => {
    return(
        <div>
            <div className="nav">
               
                
                    <div className="button-divs">
                       
                        
                        <SignIn 
                            openModal={openModal}
                            logout={logout}
                            currentUser={currentUser}
                        />
                    </div>
            </div>
        </div>
    )
}

export default NavBar