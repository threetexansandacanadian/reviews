import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'


export default function ReviewButtons(props) {
  const { handleNextOrPrev, handlePrev, isStart, isEnd } = props;
  const prevStyle = (isStart) ? { display: "none" } : { display: "inline" };
  const nextStyle = (isEnd) ? { display: "none" } : { display: "inline" };

  return (
    <div style={{ margin: '10px', padding: '10px', display: 'flex', justifyContent: 'center' }}>
      <Button
        type="submit"
        style={{...prevStyle, margin: '5px'}}
        variant={"outline-dark"}
        onClick={() => handleNextOrPrev('prev')}
      >
        Prev
      </Button>
      <Button
        type="submit"
        variant={"outline-dark"}
        style={{...nextStyle, margin: '5px'}}
        onClick={() => handleNextOrPrev('next')}
      >
        Next
      </Button>
    </div>
  );
}

ReviewButtons.propTypes = {
  isStart: PropTypes.bool.isRequired,
  isEnd: PropTypes.bool.isRequired,
  handleNextOrPrev: PropTypes.func.isRequired,
};
