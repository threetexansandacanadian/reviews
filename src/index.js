import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getReviewsByID, postReview, getReviewsByName } from './dataHelpers';
import ReviewList from './components/reviews/reviewList.jsx';
import AddReview from './components/addReview/addReview.jsx';
import BarChart from './components/barchart/barchart.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProdID: 1,
      reviews: []
    };

    window.addEventListener('updateProdId', this.handleUpdateProdId.bind(this));

    this.fetchData = this.fetchData.bind(this);
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
  }

  componentDidMount() {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const id = params.get('id') || null;
    const product = params.get('product') || null;
    this.fetchData(id, product);
  }

  fetchData(id, product) {
    if (id) {
      getReviewsByID(id)
        .then((data) => {
          this.setState({ reviews: data.rows });
        });
    } else if (product) {
      getReviewsByName(product)
        .then((data) => {
          this.setState({ reviews: data.rows });
        });
    } else {
      getReviewsByID(1)
        .then((data) => {
          this.setState({ reviews: data.rows });
        });
    }
  }

  handleUpdateProdId(e) {
    this.fetchData(e.detail, null);
  }

  handleReviewSubmit(review) {
    const { currentProdID } = this.state;
    const newReview = { ...review };
    newReview.review.product_id = currentProdID;

    postReview(newReview)
      .then(() => {
        this.fetchData(currentProdID);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { reviews } = this.state;
    return (
      <Container>
        <Row>
          <Col md={4}>
            <BarChart reviews={reviews} />
          </Col>
          <Col md={8}>
            <AddReview
              handleSubmit={this.handleReviewSubmit}
            />
            <ReviewList reviews={reviews} />
          </Col>
        </Row>
      </Container>
    );
  }
}
window.reviews = App;
ReactDOM.render(<App />, document.getElementById('root'));
