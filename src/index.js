import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getReviewsByID } from './dataHelpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProdID: 1,
      storage: {}
    };
  }
  
  componentDidMount() {
    const { currentProdID } = this.state;
    getReviewsByID(currentProdID)
      .then((data) => {
        console.log('Reviews data: ', data);
      })
      .catch((err) => {
        console.error('Error getting initial data', err);
      });
  }

  render() {
    return (
      <div>Hello World!</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));