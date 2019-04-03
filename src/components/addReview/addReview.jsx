import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { ReviewForm } from './addReviewStyles';

export default class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      name: '',
      stars: 5,
    };

    this.handleStarChange = this.handleStarChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, review, stars } = this.state;
    const { handleSubmit: addReview } = this.props;

    addReview({ user: { name }, review: { review, stars } });
    this.setState({ name: '', review: '', stars: 5 });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleReviewChange(e) {
    this.setState({ review: e.target.value });
  }

  handleStarChange(val) {
    this.setState({ stars: val });
    console.log(val, this.state.stars);
  }

  render() {
    const { name, review, stars } = this.state;
    return (
      <ReviewForm>
        <input
          type="text"
          value={name}
          onChange={e => this.handleNameChange(e)}
          placeholder="Username"
        />

        <textarea
          rows={5}
          value={review}
          onChange={e => this.handleReviewChange(e)}
        />

        <ReactStars
          value={stars}
          onChange={val => this.handleStarChange(val)}
          half={false}
        />

        <button type="submit" onClick={e => this.handleSubmit(e)}>Submit</button>
      </ReviewForm>
    );
  }
}

AddReview.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
