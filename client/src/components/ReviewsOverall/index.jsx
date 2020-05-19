import React from 'react';
import styled from 'styled-components';

import ReviewsStatistics from './ReviewsStatistics';
import { Button } from '../../shared/StyledComponents';

const ReviewsOverall = ({reviews}) => {
  return (
    <ReviewsOverallContainer>
      <ReviewsStatistics reviews={reviews}/>
      <WriteReviewContainer >
        <Button>
          Write a Review
        </Button>
      </WriteReviewContainer>
      <OverallDisclaimerWrapper>
        <span>
          <p>Please note that by submitting a helpfulness vote on a review your IP address is collected and stored by our trusted third party service provider for the sole purpose of preventing multiple entries form the same IP address. To see how to controll your personal data, please see our Privacy policy.</p>
        </span>
      </OverallDisclaimerWrapper>
    </ReviewsOverallContainer>
  );
};

export default ReviewsOverall;


const WriteReviewContainer = styled.div`
  padding: 1rem 1rem 1.25rem;
`;

const ReviewsOverallContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0
`;

const OverallDisclaimerWrapper = styled.div`
  border-top: 1px solid black;
  padding: 1.25rem 0px;
  width: 100%;
`;
