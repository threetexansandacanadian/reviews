import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import ReactStars from 'react-stars';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export default function ReviewEntry(props) {
  const { name, stars, url, review, created_at } = props.entry; 
  const date = (created_at) ? `Submitted on ${dateFns.format(created_at, 'MM/DD/YYYY')}` : null;
  return (
    <Card style={{ margin: '10px', padding: '10px' }}>
      <Card.Title style={{ display: 'flex', alignItems: 'center' }}>
        <Image src={url} roundedCircle style={{ height: '30px', marginRight: '5px' }} />
        <span>{name}</span>
      </Card.Title>
      <Card.Subtitle style={{ fontSize: '12px' }}>
        <i>
          {date}
        </i>
      </Card.Subtitle>
      <ReactStars
        value={stars}
        edit={false}
        size={20}
      />

      <Card.Text style={{ padding: '10px' }}>{review}</Card.Text>
    </Card>
  );
}

ReviewEntry.propTypes = {
  entry: PropTypes.Object,
};
