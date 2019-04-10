import React from 'react';
import { shallow } from 'enzyme';
import dummyData from '../../dummyData';

import ReviewList from './reviewList.jsx';

describe('ReviewList', () => {
  it('should render correctly', () => {
    shallow(<ReviewList reviews={dummyData.rows} />);
  });
});
