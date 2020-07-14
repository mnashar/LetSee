import React from 'react'
import {withRouter} from 'react-router-dom'
import ReviewForm from '../reviews/review_form';
import ReviewsIndexTop from "../reviews/reviews_index_top";
import ReviewsIndexPagination from "../reviews/reviews_index_pagination";
import AliceCarousel from "react-alice-carousel";
// import "../../../app/assets/stylesheets/react-alice-carousel";

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
    this.addProductToCart = this.addProductToCart.bind(this);

    this.showReviewForm = this.showReviewForm.bind(this);

    this.afterRender = this.afterRender.bind(this);
  }

  addProductToCart(e) {
    e.preventDefault();
    let { sessionId, product } = this.props;

    if (sessionId === null) {
      this.props.openModal();
    } else {
      this.setState({ quantity: 1 });

      this.props.createCartItem({
        customer_id: sessionId,
        product_id: product.id,
        quantity: this.state.quantity,
      });

      this.props.history.push("/cart_items");
    }
  }

  

  afterRender() {}
  showReviewForm(event) {
    let { sessionId } = this.props;
    if (!sessionId) {
      // alert("Please login or sign up first!");
      this.props.openModal();
      // return;
    } else{

      const reviewForm = document.getElementById("review-form");
      if (event.target.innerHTML === "Add review") {
        event.target.innerHTML = "Close form";
      } else {
        event.target.innerHTML = "Add review";
      }

      reviewForm.classList.toggle("hidden");
    }
  }

  onSlideChanged(e) {
    // alert( e.item);
    // alert( e.slide);
     const thumbsList = document.getElementsByClassName("thumb");

     // Remove clicked className from other visited page numbers
     for (let i = 0; i < thumbsList.length; i++) {
       if (thumbsList[i].classList.contains("thumb-clicked") || i===e.item) {
         thumbsList[i].classList.toggle("thumb-clicked");
       }
     }
    //  e.target.classList.toggle("thumb-clicked");
  }

  render() {
    let { product } = this.props;

    let productDescription = product.description
      .split(" ")
      .slice(0, 42)
      .join(" ");
    productDescription = productDescription + ".";

    let thumbItem = (item, i) => (
      <div key={item} className="thumb-container">
        <img
          src={`${item}`}
          className={i === 0 ? "thumb thumb-clicked" : "thumb"}
          onClick={(e) => {
            const thumbsList = document.getElementsByClassName("thumb");

            // Remove clicked className from other visited page numbers
            for (let i = 0; i < thumbsList.length; i++) {
              if (thumbsList[i].classList.contains("thumb-clicked")) {
                thumbsList[i].classList.toggle("thumb-clicked");
              }
            }
            e.target.classList.toggle("thumb-clicked");
            this.Carousel.slideTo(i);
          }}
        />
      </div>
    );
    return (
      <div className="show-div">
        <div className="product-left-side">
          <div className="whole-carousel-container">
            <nav>{product.imageUrls.map(thumbItem)}</nav>
            <div>
              <AliceCarousel
                id="carousel"
                items={product.imageUrls.map((img, i) => (
                  <img src={`${img}`} className="show-image" />
                ))}
                responsive={false}
                // autoPlayInterval={2000}
                autoPlayDirection="rtl"
                autoPlay={false}
                fadeOutAnimation={true}
                mouseTrackingEnabled={true}
                disableAutoPlayOnAction={true}
                dotsDisabled={true}
                buttonsDisabled={true}
                onSlideChanged={this.onSlideChanged}
                ref={(el) => (this.Carousel = el)}
              />

              <div className="carousel-buttons-container">
                <button
                  className="carousel-button"
                  onClick={() => this.Carousel.slidePrev()}
                >
                  &lt;
                </button>
                <button
                  className="carousel-button"
                  onClick={() => this.Carousel.slideNext()}
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>

          <div className="review-details-section">
            <ReviewsIndexPagination
              productId={this.props.match.params.productId}
            />
          </div>
        </div>

        <div className="info-div">
          <div className="name-product-title">{product.name}</div>

          <div className="review-section">
            <ReviewsIndexTop productId={this.props.match.params.productId} />

            <button className="review_buttons" onClick={this.showReviewForm}>
              Add review
            </button>

            <div id="review-form" className="hidden">
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
        {this.afterRender()}
      </div>
    );
  }
}

export default withRouter(ProductItem);