import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryAxis } from 'victory-axis';
import { Main, Chart } from './barchartStyles';

export default function BarChart(props) {
  const countRatings = () => {
    const counter = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    props.reviews.forEach((review) => {
      counter[review.stars] += 1;
    });
    const results = Object.keys(counter).map(rating => ({ x: rating, y: counter[rating] }));
    return results;
  };

  const calcAverageRatings = () => {
    let ratings = countRatings();
    let sum = 0;
    
    Object.keys(ratings).forEach((rating) => {
      console.log(rating, ratings[rating]);
      sum += parseInt(ratings[rating].x) * ratings[rating].y;
    });
    let averageRating = (sum / props.reviews.length).toFixed(1);
    //averageRating = Math.ceil(averageRating * 2) / 2;
    return averageRating;
  };

  return (
    <Main>
      <h3>{props.reviews.length} reviews</h3>
      <ReactStars
        value={calcAverageRatings()}
        edit={false}
      />
      <p>{calcAverageRatings()} out of 5 stars</p>
      <div style={{backgroundColor: "#fee", height: '20vh', width: '50vw' }}>
        <VictoryChart
          height={300}
        >
          <VictoryAxis
            tickValues={[5, 4, 3, 2, 1]}
            tickFormat={x => `${x} stars`}
          />
          <VictoryBar
            data={countRatings()}
            labels={data => (`${Math.floor((data.y / props.reviews.length) * 100)}%`)}
            horizontal
          />
        </VictoryChart>
      </div>
    </Main>
  );
}

BarChart.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
