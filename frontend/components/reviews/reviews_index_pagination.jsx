import {connect} from 'react-redux';
import {selectAllReviews} from '../../reducers/selectors';
import {fetchReviews} from '../../actions/reviews_action';
import React from 'react'
// import LoadingIcon from '../loading_icon';
import {Link} from 'react-router-dom';
import Pagination from '../pagination/pagination';
import PaginationItems from '../pagination/pagination_items';
import StarRatings from 'react-star-ratings';

class ReviewsIndexPagination extends React.Component {
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
        
       

        // Setup for pagination
        const indexOfLastReview = this.state.currentPage * this.state.reviewsPerPage;
        const indexOfFirstReview = indexOfLastReview - this.state.reviewsPerPage;
        const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
        
        //   alert("will");
          const pageNumbersList = document.getElementsByClassName("page-link");
          if (pageNumbersList.length !== 0 && this.state.currentPage === 1
            && !(pageNumbersList[0].classList.contains("clicked"))
            ) {
            //   alert("ok");
            //   debugger;
            pageNumbersList[0].classList.toggle("clicked");
            
          }

        return (
          //   <div className="reviews-index">
          //   <div className="review-form">
          <div className="review-form_pagination">
            
            <PaginationItems reviews={currentReviews}/>
                <Pagination
                    reviewsPerPage={this.state.reviewsPerPage}
                    totalReviews={reviews.length}
                    paginate={this.paginate}/>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndexPagination);