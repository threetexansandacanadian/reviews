import React from 'react';
import PropTypes from 'prop-types';


export default function ReviewButtons(props) {
  const { handleNextOrPrev, handlePrev, isStart, isEnd } = props;
  const prevStyle = (isStart) ? { display: "none" } : { display: "inline" };
  const nextStyle = (isEnd) ? { display: "none" } : { display: "inline" };
  console.log("Hello from inside reviewButtons", isStart, isEnd, "prev", prevStyle, "next", nextStyle );

  return (
    <div style={{ margin: '10px', padding: '10px', backgroundColor: '#ead' }}>
      <button type="submit" style={prevStyle} onClick={() => handleNextOrPrev('prev')}>Previous</button>
      <button type="submit" style={nextStyle} onClick={() => handleNextOrPrev('next')}>Next</button>
      <button type="submit">Hello!</button>
    </div>
  );
}

ReviewButtons.propTypes = {
  isStart: PropTypes.bool.isRequired,
  isEnd: PropTypes.bool.isRequired,
  handleNextOrPrev: PropTypes.func.isRequired,
};
