import React from 'react'
import { Link } from 'react-router-dom'
import ProductIndexContainer from '../product_index/product_index_container'


class Greeting extends React.Component {
  constructor(props) {
    super(props)

    this.loggedOut = this.loggedOut.bind(this)
    this.loggedIn = this.loggedIn.bind(this)
  }


  loggedOut() {
    return (
    
        <div className="splash">
        </div>
       

      
    )
  }

  loggedIn() {
    let { currentUser } = this.props
    return (
      <div>
        <h2 className="welcome">{`Welcome back, ${currentUser.name}!`}</h2>

        <div className="current-user-container">
          <img
            className="user-profile-pic"
            src={currentUser.profilePicUrl}
            alt="user profile picture"
          />  
          <span className="sign-in-test">You &#8744;</span>
        </div>
        <div className="splash"></div>
      </div>
    );
  }

  render() {
    let { currentUser } = this.props
    return currentUser ? this.loggedIn() : this.loggedOut()
  }
}

export default Greeting