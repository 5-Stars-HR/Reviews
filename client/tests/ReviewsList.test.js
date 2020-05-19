import React from 'react';
import { shallow } from 'enzyme';
import fixture from '../../legos/fixtures';
import ReviewsList from '../src/components/ReviewsList/index.jsx';

const wrapper = shallow(<ReviewsList reviews={fixture.reviews}/>);

describe('Tests ReviewsList', () => {
  it('should correctly render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have the correct amount of reviews', () => {
    const expectedReviewCount = fixture.reviews.length;
    expect(wrapper.find('ReviewsListItem').length).toBe(expectedReviewCount);
  });
});
