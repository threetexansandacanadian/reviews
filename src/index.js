import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getReviewsByID, postReview, getReviewsByName } from './dataHelpers';
import ReviewList from './components/reviews/reviewList.jsx';
import AddReview from './components/addReview/addReview.jsx';
import BarChart from './components/barchart/barchart.jsx';
import Main from './styles';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProdID: 1,
      reviews: [],
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

  handleUpdateProdId(id) {
    this.fetchData(id, null);
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
      <Main>
        <AddReview handleSubmit={this.handleReviewSubmit} />
        <BarChart reviews={reviews} />
        <ReviewList reviews={reviews} />
      </Main>
    );
  }
}
window.reviews = App;
ReactDOM.render(<App />, document.getElementById('root'));
