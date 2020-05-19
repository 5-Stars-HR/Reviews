import React from 'react';
import { mount, shallow } from 'enzyme';
import fixture from '../../legos/fixtures';
import Ratings from '../src/shared/Ratings/';
import Markers from '../src/shared/Ratings/Markers';


describe('Test Ratings', () => {
  const rating = 5;
  const ratingsWrapper = shallow(<Ratings rating={rating}/>);

  it('should contain the rating', () => {
    expect(ratingsWrapper.contains(rating)).toBe(true);
  });
});

describe('Test Marker', () => {
  const markerWrapper = mount(<Markers />);
  it('should render', () => {
    expect(markerWrapper.find('Markers').exists()).toBe(true);
  });

  it('should 5 images should be rendered', () => {
    expect(markerWrapper.find('img').length).toEqual(5);
  });
});