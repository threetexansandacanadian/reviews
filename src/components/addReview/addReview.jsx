import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

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
      <Card style={{ margin: '10px', padding: '10px' }}>
        <Card.Header style={{ backgroundColor: 'transparent' }}>
          <Card.Title>
            Add a Review
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="username">
              <div>
                <Form.Label>
                  Username
                </Form.Label>
              </div>
              <Form.Control
                type="text"
                id="username"
                value={name}
                onChange={e => this.handleNameChange(e)}
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group controlId="review">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                id="review"
                rows="3"
                value={review}
                onChange={e => this.handleReviewChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="star-rating">
              <Form.Label>
                Overall Rating
              </Form.Label>
              <ReactStars
                value={stars}
                id="rating"
                onChange={val => this.handleStarChange(val)}
                half={false}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={e => this.handleSubmit(e)}>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

AddReview.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
