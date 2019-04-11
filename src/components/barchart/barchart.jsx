import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { VictoryBar } from 'victory-bar';
import { VictoryChart } from 'victory-chart';
import { VictoryAxis } from 'victory-axis';
import Card from 'react-bootstrap/Card';

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
      sum += parseInt(ratings[rating].x) * ratings[rating].y;
    });
    let averageRating = (sum / props.reviews.length).toFixed(1);
    //averageRating = Math.ceil(averageRating * 2) / 2;
    return averageRating;
  };

  return (props.reviews.length) ? (
    <Card className="text-center" style={{ margin: '10px' }}>
      <Card.Body>
      <Card.Title>{props.reviews.length} reviews</Card.Title>
        <Card.Text>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ReactStars
              value={calcAverageRatings()}
              size={30}
              edit={false}
            />
          </div>
          <p>{calcAverageRatings()} out of 5 stars</p>
          <VictoryChart height={300}>
            <VictoryAxis
              tickValues={[5, 4, 3, 2, 1]}
              tickFormat={x => `${x} stars`}
              style={{
                axis: { stroke: 'none' },
              }}
            />
            <VictoryBar
              data={countRatings()}
              barRatio={1.2}
              style={{
                data: { fill: '#ffd700'}
              }}
              labels={data => (`${Math.floor((data.y / props.reviews.length) * 100)}%`)}
              horizontal
            />
          </VictoryChart>
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (<div />);
}

BarChart.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
