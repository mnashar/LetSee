import React from 'react'
import {withRouter} from 'react-router-dom'
import ReviewForm from '../reviews/review_form';
// import ReviewsIndex from '../reviews/reviews_index';

class ProductItem extends React.Component{
    constructor(props) {        
        super(props) 
        this.state = { quantity: 1 }    
        this.addProductToCart = this.addProductToCart.bind(this)   
        
        this.showReviewForm = this.showReviewForm.bind(this);
    }

    addProductToCart(e) {
        e.preventDefault()
        let { sessionId, product } = this.props

        if (sessionId === null) {
            this.props.openModal()
        }
        else{

            this.setState({ quantity: 1 })
            
            this.props.createCartItem({ customer_id: sessionId, product_id: product.id, quantity: this.state.quantity })
            
            this.props.history.push('/cart_items');
        }
    }


    showReviewForm(event) {
        let { sessionId } = this.props;
        if (!sessionId) {
          alert("Please login or sign up first!");
          return;
        };

        const reviewForm = document.getElementById("review-form");
        if (event.target.innerHTML === "Add review") {
            event.target.innerHTML = "Close form";
        } else {
            event.target.innerHTML = "Add review";
        }

        reviewForm.classList.toggle("hidden");
    }

    render(){
        let { product } = this.props

        let productDescription = product.description.split(" ").slice(0,42).join(" ");
        productDescription = productDescription+".";
        return (
          <div className="show-div">
            <img className="show-image" src={`${product.photourl}`} alt="" />
            <div className="info-div">
              <div className="name-product-title">{product.name}</div>

              <div className="review-section">
                {/* <ReviewsIndex itemtId={this.props.match.params.itemtId} /> */}

                <button
                  className="show-review-form-button clicky"
                  onClick={this.showReviewForm}
                >
                  Add review
                </button>

                <div id="review-form" className="hidden">
                  debugger;
                  <ReviewForm productId={this.props.match.params.productId} />
                </div>
              </div>

              <h2 className="price-product">${product.price}</h2>
              <button onClick={this.addProductToCart} className="add-to-cart">
                Add to cart
              </button>

              <div>
                <label className="label-description">Description</label>
                <h2 className="description-product">{productDescription}</h2>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(ProductItem);