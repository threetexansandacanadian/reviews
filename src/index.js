import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getReviewsByID } from './dataHelpers';
import ReviewList from './components/reviews/reviewList.jsx';
import AddReview from './components/addReview/addReview.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProdID: 1,
      reviews: []      
    };

    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
  }
 
  componentDidMount() {
    const { currentProdID } = this.state;
    getReviewsByID(currentProdID)
      .then((data) => {
        this.setState({ reviews: data.rows }, () => console.log('State intialized: ', this.state.reviews ));
      })
      .catch((err) => {
        console.error('Error getting initial data', err);
      });
  }

  handleReviewSubmit(review) {
    console.log('Submitting review: ', review);
  }

  render() {
    return (
      <div>
        <AddReview handleSubmit={this.handleReviewSubmit} />
        <ReviewList reviews={ this.state.reviews } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
