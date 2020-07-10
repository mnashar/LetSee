import React from 'react'
import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const PaginationItems = ({reviews}) => {

    const reviewsLi = reviews.map(review => {
        return (
          <li key={review.id}>
            <div className="review-users-container">
              <img
                className="review-users"
                src={review.profilePicUrl}
                alt="user profile picture"
              />
              <span>{review.userName}</span>
            </div>
            <div className="review-body">
              <span>
                <StarRatings
                  rating={parseInt(review.rating)}
                  starDimension="20px"
                  starSpacing="4px"
                  starRatedColor="#f2b01e"
                />
              </span>
              <p>{review.body}</p>
            </div>
          </li>
        );
    })

    return (
        <ul>
            {reviewsLi}
        </ul>
    )
}


export default PaginationItems;