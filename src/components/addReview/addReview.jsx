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
      title: '',
      stars: 5,
      touched: { name: false, review: false }
    };

    this.handleStarChange = this.handleStarChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, review, stars, title } = this.state;
    const { handleSubmit: addReview } = this.props;

    if (name === '' || review === '' || title === '') {
      this.setState({ touched: { name: true, review: true, title: true } });
      return null;
    }

    addReview({ user: { name }, review: { review, stars, title } });
    this.setState({
      name: '',
      review: '',
      title: '',
      stars: 5,
      touched: { name: false, review: false }
    });
  }

  handleBlur(target) {
    const { touched } = this.state;
    this.setState({ touched: { ...touched, [target]: true } });
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

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    const { name, review, stars, touched, title } = this.state;
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
                onBlur={() => this.handleBlur("name")}
                placeholder="Username"
                isInvalid={((name === '' && touched.name === true) || name.length > 30)}
              />
              <Form.Control.Feedback type="invalid">
                Username cannot be blank or more than 30 characters.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="username">
              <div>
                <Form.Label>
                  Title
                </Form.Label>
              </div>
              <Form.Control
                type="text"
                id="title"
                value={title}
                onChange={e => this.handleTitleChange(e)}
                onBlur={() => this.handleBlur("title")}
                placeholder="Review Title"
                isInvalid={((title === '' && touched.title === true) || title.length > 85)}
              />
              <Form.Control.Feedback type="invalid">
                Title cannot be blank or more than 85 characters.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="review">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                id="review"
                rows="3"
                value={review}
                placeholder="Write your review here."
                onChange={e => this.handleReviewChange(e)}
                onBlur={() => this.handleBlur('review')}
                isInvalid={(review === '' && touched.review === true)}
              />
              <Form.Control.Feedback type="invalid">
                  Please leave a valid review.
              </Form.Control.Feedback>
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
                size={20}
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
