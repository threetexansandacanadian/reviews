import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

export default function BarChart(props) {
  const countRatings = () => {
    const count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    props.reviews.forEach((review) => {
      count[review.stars] += 1;
    });
    const results = Object.keys(count).map((number) => {
      return { x: number, y: count[number] };
    });
    console.log(results);
    //return results;
  };
  return (
    <div>
      {countRatings()}
      <p>I'm a barchart!</p>
    </div>
  );
}

BarChart.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
