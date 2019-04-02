import React from 'react';
import PropTypes from 'prop-types';

export default function ReviewEntry(props) {
  const { name, stars, url, review } = props.entry; 
  return (
    <div>
     <img src={url}></img>
     <h3>{name}</h3>
     <p><i>{stars}</i></p>
     <p>{review}</p> 
    </div>
  );
}

ReviewEntry.PropTypes = {
  entry: PropTypes.Object,
};
