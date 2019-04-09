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
    <Card style={{ margin: '5px 0px 5px 0px', padding: '10px' }}>
      <Card.Title>
        <Image src={url} rounded style={{ height: '30px', borderRadius: '30px' }} />
        <div>
          {name}
        </div>
      </Card.Title>
      <Card.Subtitle>
        <i>
          {date}
        </i>
      </Card.Subtitle>
      <ReactStars
        value={stars}
        edit={false}
      />

      <Card.Text style={{ padding: '10px' }}>{review}</Card.Text>
    </Card>
  );
}

ReviewEntry.PropTypes = {
  entry: PropTypes.Object,
};
