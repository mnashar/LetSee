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
          {/* <img className="home" src="https://i.etsystatic.com/6332216/r/il/4e13e2/1517419938/il_fullxfull.1517419938_e4xa.jpg" alt="" /> */}

        {/* <ProductIndexContainer /> */}
      
        </div>
       

      
    )
  }

  loggedIn() {
    let { currentUser } = this.props
    return (
      <div>
        {/* <div>
                <img className="contemporary" src="https://toasty-dev.s3-us-west-1.amazonaws.com/contemporary_wall_art.jpg" alt=""/>
            </div> */}
        <h2 className="welcome">{`Welcome back, ${currentUser.name}!`}</h2>

        
        <span className="sign-in-test">You &#8744;</span>  
        <div className="splash">
          {/* <img className="home" src="https://i.etsystatic.com/6332216/r/il/4e13e2/1517419938/il_fullxfull.1517419938_e4xa.jpg" alt="" /> */}

          {/* <ProductIndexContainer /> */}

        </div>
      </div>
    )
  }

  render() {
    let { currentUser } = this.props
    return currentUser ? this.loggedIn() : this.loggedOut()
  }
}

export default Greeting