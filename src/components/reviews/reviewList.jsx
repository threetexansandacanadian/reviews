import React from 'react';
import PropTypes from 'prop-types';
import ReviewEntry from './reviewEntry.jsx';

export default function ReviewList(props) {
  const renderList = () => {
    const sortedReviews = props.reviews.slice().reverse();
    return sortedReviews.map((review, i) => {
      return <ReviewEntry entry={review} key={i} />;
    });
  };

  return (
    <div>
      {renderList()}
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
