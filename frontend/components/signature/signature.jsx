import React from "react";
import { Link } from "react-router-dom";

class Signature extends React.Component {
  constructor(props) {
    // super(props);

    this.signature = this.signature.bind(this);
  }
  signature() {
    return (
      <div className="signature-container">
        <span className="tooltip">
          <img className="marwa-top-icon " src={marwaTopIcon} alt="payment" />
          <span class="tooltiptext">My website</span>
        </span>

        <span className="tooltip">
          <i className="fa fa-globe signature-icon" aria-hidden="true"></i>
          <span class="tooltiptext">My website</span>
        </span>

        <span className="tooltip">
          <i
            className="fa fa-linkedin-square signature-icon"
            aria-hidden="true"
          ></i>
          <span class="tooltiptext">Linkedin</span>
        </span>

        <span className="tooltip">
          <i className="fa fa-angellist signature-icon" aria-hidden="true"></i>
          <span class="tooltiptext">Angel List</span>
        </span>

        <span className="tooltip">
          <i className="fa fa-github signature-icon" aria-hidden="true"></i>
          <span class="tooltiptext">Github</span>
        </span>
      </div>
    );
  }

  render() {
    return 
   (<Link to="/cart_items">
      <button className="shopping_cart_icon">
        <i className="icon brands fa-linkedin"></i>
      </button>
    </Link>);
  }
}

export default Signature;
