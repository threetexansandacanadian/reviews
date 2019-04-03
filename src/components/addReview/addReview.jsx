import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  handleStarChange(e) {
    this.setState({ stars: e.target.value });
  }

  render() {
    const { name, review, stars } = this.state;
    return (
      <form>
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

        <select
          value={stars}
          onChange={e => this.handleStarChange(e)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5} select="selected">5</option>
        </select>

        <button type="submit" onClick={e => this.handleSubmit(e)}>Submit</button>
      </form>
    );
  }
}

AddReview.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}
;