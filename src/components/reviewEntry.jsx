import React from 'react';
import PropTypes from 'prop-types';
import { Entry, ProfilePic, Username } from './reviewStyles';

export default function ReviewEntry(props) {
  const { name, stars, url, review } = props.entry; 
  return (
    <Entry>
      <div>
        <ProfilePic src={url} />
        <Username>{name}</Username>
      </div>
      <p><i>{stars} stars</i></p>
      <p>{review}</p>
    </Entry>
  );
}

ReviewEntry.PropTypes = {
  entry: PropTypes.Object,
};
