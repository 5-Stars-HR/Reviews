import React from 'react';
import { shallow, mount } from 'enzyme';
import fixture from '../../legos/fixtures';
import ReviewsOverall from '../src/components/ReviewsOverall';
import ReviewsStatistics from '../src/components/ReviewsOverall/ReviewsStatistics';
import OverallExperience from '../src/components/ReviewsOverall/OverallExperience';

describe('Test ReviewsStatistics', () => {
  let statisticsWrapper;
  beforeEach(() => {
    statisticsWrapper = mount(<ReviewsStatistics reviews={fixture.reviews}/>);
  });

  it('should have the reviews props', () => {
    expect(statisticsWrapper.prop('reviews')).toEqual(fixture.reviews);
  });

  it('should have aggregated review count the star rating box', () => {
    expect(statisticsWrapper.find('span').at(1).props().children).toEqual(3);
  });

  it('should have aggregated recommendation percent', () => {
    expect(statisticsWrapper.find('p').at(0).props().children[0]).toEqual(fixture.aggregatedReview.avgRecommendation);
  });

  it('should have aggregated review data for 5 star reviews, 0 reviews', () => {
    expect(statisticsWrapper.find('.rating-box__count').at(0).prop('data-test')).toEqual(fixture.aggregatedReview.countFiveReviews);
  });

  it('should have aggregated review data for 4 star reviews, 1 reviews', () => {
    expect(statisticsWrapper.find('.rating-box__count').at(1).prop('data-test')).toEqual(fixture.aggregatedReview.countFourReviews);
  });
});

describe('Test OverallExperience', () => {
  const experiences = fixture.aggregatedReview.experiences;
  let overallExperienceWrapper;
  beforeEach(() => {
    overallExperienceWrapper = mount(<OverallExperience experiences={experiences}/>);
  });

  it('should test that overall experience is rendered', () => {
    expect(overallExperienceWrapper.find('Ratings').at(0).props().rating).toEqual(experiences.playExperience);
  });

  it('should test that overall difficulty is rendered', () => {
    expect(overallExperienceWrapper.find('Ratings').at(1).props().rating).toEqual(experiences.difficulty);
  });

  it('should test that overall value is rendered', () => {
    expect(overallExperienceWrapper.find('Ratings').at(2).props().rating).toEqual(experiences.value);
  });
});
