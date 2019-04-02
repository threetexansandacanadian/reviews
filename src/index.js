import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getReviewsByID } from './dataHelpers';
import ReviewList from './components/reviewList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProdID: 1,
      reviews: []      
    };
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

  render() {
    return (
      <div>
      <ReviewList reviews={ this.state.reviews } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));