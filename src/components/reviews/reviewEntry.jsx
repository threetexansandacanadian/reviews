import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import ReactStars from 'react-stars';
import { Entry, ProfilePic, Username } from './reviewStyles';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export default function ReviewEntry(props) {
  const { name, stars, url, review, created_at } = props.entry; 
  const date = (created_at) ? `Submitted on ${dateFns.format(created_at, 'MM/DD/YYYY')}` : null;
  return (
    <Card>
      <Card.Title>
        <Image src={url} rounded style={{ height: '30px' }} />
        <Username> {name}</Username>
      </Card.Title>
      <Card.Subtitle> {date} </Card.Subtitle>
      <ReactStars
        value={stars}
        edit={false}
      />

      <Card.Text>{review}</Card.Text>
    </Card>
  );
}

ReviewEntry.PropTypes = {
  entry: PropTypes.Object,
};
