import React from 'react';
import PropTypes from 'prop-types';
import ReviewEntry from './reviewEntry.jsx';
import { List } from './reviewStyles';

export default function ReviewList(props) {
  const renderList = () => {
    return props.reviews.map((review, i) => {
      return <ReviewEntry entry={ review } key={ i } />
    });
  };

  return (
    <List>
      {renderList()}
    </List>
  );
}

ReviewList.PropTypes = {
  reviews: PropTypes.array,
};
