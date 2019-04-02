import React from 'react';
import PropTypes from 'prop-types';
import ReviewEntry from './reviewEntry.jsx';

export default function ReviewList(props) {
  const renderList = () => {
    return props.reviews.map((review, i) => {
      return <ReviewEntry entry={ review } key={ i } />
    });
  };

  return (
    <div>
      {renderList()}
      <p>Hello!</p>
    </div>
  );
}

ReviewList.PropTypes = {
  reviews: PropTypes.array,
};
