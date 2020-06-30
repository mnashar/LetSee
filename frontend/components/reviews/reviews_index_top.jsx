import {connect} from 'react-redux';
import {selectAllReviews} from '../../reducers/selectors';
import {fetchReviews} from '../../actions/reviews_action';
import React from 'react'
// import LoadingIcon from '../loading_icon';
import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';

class ReviewsIndexTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            reviewsPerPage: 5
        };
        this.paginate = this.paginate.bind(this);
    }

    componentDidMount() {
        this
            .props
            .fetchReviews(this.props.productId);
    }

    paginate(pageNumber){
        return (event) => {
            const pageNumbersList = document.getElementsByClassName('page-link');

            // Remove clicked className from other visited page numbers
            for (let i = 0; i < pageNumbersList.length; i++){
                if (pageNumbersList[i].classList.contains('clicked')){
                    pageNumbersList[i].classList.toggle('clicked');
                };
            };
            event.target.classList.toggle('clicked');
            this.setState({currentPage: pageNumber});

        };
    };

    render() {
        let {reviews} = this.props;
        // if (!reviews) {
        //     return (<LoadingIcon/>)
        // }

        if (reviews.length === 0){
            return (
                <div className="no-review">
                    No reviews yet.
                </div>
            )
        }
        // Setup for pagination
        const indexOfLastReview = this.state.currentPage * this.state.reviewsPerPage;
        const indexOfFirstReview = indexOfLastReview - this.state.reviewsPerPage;
        const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

        // Calc for average rating
        let reviewsRating = 0;
        reviews.forEach(review => {
            reviewsRating = parseInt(review.rating) + reviewsRating;
        });
        // let ratingAverage = reviews.length
        //     ? reviewsRating / reviews.length
        //     : reviewsRating;

        let ratingAverage =
          Math.ceil((reviewsRating / reviews.length) * 10) / 10;

        return (
          //   <div className="reviews-index">
          //   <div className="review-form">
          <div className="review-form">
            <div className="reviews-index-title">
              {/* <h3>Reviews</h3> */}
              {/* <span className="review-form"> */}
                <StarRatings
                  rating={ratingAverage}
                  starDimension="20px"
                  starSpacing="4px"
                  starRatedColor="#f2b01e"
                  isAggregateRating={true}
                  
                />
              {/* </span> */}
            </div>
            
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        reviews: selectAllReviews(state.entities.reviews)
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        fetchReviews: productId => dispatch(fetchReviews(productId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndexTop);