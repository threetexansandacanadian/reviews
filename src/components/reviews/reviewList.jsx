import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewEntry from './reviewEntry.jsx';
import ReviewButtons from './reviewButtons.jsx';

export default function ReviewList(props) {

  const renderList = () => {
    if (!props.reviews.length) {
      return null;
    }
    const sortedReviews = props.reviews.slice().reverse();
    const { page, reviewsPerPage } = props;
    const reviewList = [];
    const startPoint = (page === 1) ? 0 : page * reviewsPerPage;
    const endPoint = (sortedReviews.length < startPoint + reviewsPerPage) ? sortedReviews.length : startPoint + reviewsPerPage;
    for (let i = startPoint; i < endPoint; i += 1) {
      reviewList.push(<ReviewEntry entry={sortedReviews[i]} key={i} />);
    }

    return reviewList;
  };

  const renderButtons = () => {
    const
      {
        page,
        reviewsPerPage,
        reviews,
        handleNextOrPrev,
      } = props;

    if (page === 1 && page * reviewsPerPage <= reviews.length) {
      return <ReviewButtons isStart isEnd={false} handleNextOrPrev={handleNextOrPrev} />;
    }
    if (page === 1) {
      return <ReviewButtons isStart isEnd handleNextOrPrev={handleNextOrPrev} />;
    }
    if (page * reviewsPerPage >= reviews.length) {
      return <ReviewButtons isStart={false} isEnd handleNextOrPrev={handleNextOrPrev} />;
    }

    return <ReviewButtons isStart={false} isEnd={false} handleNextOrPrev={handleNextOrPrev} />;
  };

  return (
    <div>
      {renderList()}
      {renderButtons()}
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
  reviewsPerPage: PropTypes.number.isRequired,
  handleNextOrPrev: PropTypes.func.isRequired,
};
