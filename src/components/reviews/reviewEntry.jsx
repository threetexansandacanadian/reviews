import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import ReactStars from 'react-stars';
import { Entry, ProfilePic, Username } from './reviewStyles';

export default function ReviewEntry(props) {
  const { name, stars, url, review, created_at } = props.entry; 
  const date = (created_at) ? `Submitted on ${dateFns.format(created_at, 'MM/DD/YYYY')}` : null;
  return (
    <Entry>
      <div>
        <ProfilePic src={url} />
        <Username>{name}</Username>
      </div>
      <ReactStars
        value={stars}
        edit={false}
      />

      <p>{date}</p>
      <p>{review}</p>
    </Entry>
  );
}

ReviewEntry.PropTypes = {
  entry: PropTypes.Object,
};
