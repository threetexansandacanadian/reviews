import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getReviewsByID, postReview } from './dataHelpers';
import ReviewList from './components/reviews/reviewList.jsx';
import AddReview from './components/addReview/addReview.jsx';
import Main from './styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProdID: 1,
      reviews: [],
    };

    this.fetchData = this.fetchData.bind(this);
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
  }

  componentDidMount() {
    const { currentProdID } = this.state;

    this.fetchData(currentProdID);
  }

  fetchData(id) {
    getReviewsByID(id)
      .then((data) => {
        this.setState({ reviews: data.rows });
      });
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
    return (
      <Main>
        <AddReview handleSubmit={this.handleReviewSubmit} />
        <ReviewList reviews={this.state.reviews} />
      </Main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
