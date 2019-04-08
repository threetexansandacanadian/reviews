import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { ReviewForm } from './addReviewStyles';
import Button from 'react-bootstrap/Button';

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
  }

  render() {
    const { name, review, stars } = this.state;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="username">
            Username
            <input
              type="text"
              id="username"
              value={name}
              onChange={e => this.handleNameChange(e)}
              placeholder="Username"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            rows={5}
            value={review}
            onChange={e => this.handleReviewChange(e)}
          />
        </div>
        <div className="form-group">
          <label for="rating">Overall Rating</label>
          <ReactStars
            value={stars}
            id="rating"
            onChange={val => this.handleStarChange(val)}
            half={false}
          />
        </div>

        <Button type="submit" onClick={e => this.handleSubmit(e)}>Submit</Button>
      </form>
    );
  }
}

AddReview.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
