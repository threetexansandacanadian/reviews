import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { VictoryBar } from 'victory';

export default function BarChart(props) {
  const countRatings = () => {
    const counter = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    props.reviews.forEach((review) => {
      counter[review.stars] += 1;
    });
    const results = Object.keys(counter).map(rating => ({ x: rating, y: counter[rating] }));
    return results;
  };

  return (
    <div>
      <VictoryBar data={countRatings()} />
    </div>
  );
}

BarChart.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
