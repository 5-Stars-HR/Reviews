import React from 'react';
import RatingBox from './RatingBox';
import styled from 'styled-components';

import OverallExperience from './OverallExperience';
import Ratings from '../../shared/Ratings';
import helpers from '../../helpers';
import { MARKERS } from '../../constants';

const ReviewsStatistics = (props) => {
  const {
    reviews
  } = props;
  const { data } = helpers.aggregateData(reviews);
  return (
    <OverallStatistics>
      <StatisticsWrapper>
        <div>
          <span className="reviews-statistics__title">
            Overall Rating:
          </span>
          <Ratings rating={data.overallRating} markers={MARKERS.LEGOS}/>
        </div>
        <Text>
          <span>
            {`(${reviews.length} Reviews)`}
          </span>
        </Text>
      </StatisticsWrapper>
      <Text>
        <p>
          {data.overallRecommendation}
          % would recommend this product.
        </p>
      </Text>
      <OveralBreakdownWrapper>
        <RatingBreakdownWrapper>
          <h3 className="reviews-statistics__title">
            Rating
          </h3>
          {
            Object.values(data.aggregatedReviewsData).reverse().map((data, idx) => (
              <RatingBox key={idx} star={5 - idx} data={data}/>
            ))
          }
        </RatingBreakdownWrapper>
        <OverallExperience experiences={data.aggregatedExperiences}/>
      </OveralBreakdownWrapper>
    </OverallStatistics>
  );
};

export default ReviewsStatistics;


const OverallStatistics = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 1.25rem 0px 1rem;
`;

const RatingBreakdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 3rem;
`;

const OveralBreakdownWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 1.25rem 0px 1rem;
`;

const Text = styled.div`
font-size: 1rem;
line-height: 1.5625rem;
font-weight: 500;
> span {
  margin-left: 0.9375rem;
}
> p {
  margin: 0;
  color: rgb(0, 133, 55);
}
 `;

const StatisticsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0.9375rem 0px;
`;
