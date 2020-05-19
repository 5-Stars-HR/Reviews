import React from 'react';
import styled from 'styled-components';

import thumbsup from '../../assets/svg/thumbsup/thumbsup.svg';
import activeThumbsup from '../../assets/svg/thumbsup/activeThumbsup.svg';
import thumbsdown from '../../assets/svg/thumbsdown/thumbsdown.svg';
import activeThumbsdown from '../../assets/svg/thumbsdown/activeThumbsdown.svg';
import { HELPFULNESS_FEEDBACK } from '../../constants.js';
import { Spacer } from '../../shared/StyledComponents';

const ReviewHelpfulness = ({
  helpfulCount,
  unhelpfulCount,
  isLoading,
  submitVote,
  helpfulIsActive,
  unhelpfulIsActive
}) => (
  <div className="review__helpfulness">
    <Spacer tm={1.125}>
      <Title>
        Was this helpful?
      </Title>
    </Spacer>
    <HelpfulnessCountContainer>
      <ThumbButton disabled={isLoading || unhelpfulIsActive} data-is-active={helpfulIsActive} onClick={() => {
        submitVote(HELPFULNESS_FEEDBACK.POSITIVE);
      }}>
        <img alt="marker" src={helpfulIsActive ? activeThumbsup : thumbsup}></img>
        <Spacer lm={0.75}></Spacer>
        <Text>{helpfulCount}</Text>
      </ThumbButton>
      <ThumbButton disabled={isLoading || helpfulIsActive} data-is-active={unhelpfulIsActive} onClick={() => {
        submitVote(HELPFULNESS_FEEDBACK.NEGATIVE);
      }}>
        <img alt="marker" src={unhelpfulIsActive ? activeThumbsdown : thumbsdown}></img>
        <Spacer lm={0.75}></Spacer>
        <Text>{unhelpfulCount}</Text>
      </ThumbButton>
    </HelpfulnessCountContainer>
  </div>
);

export default ReviewHelpfulness;


const HelpfulnessCountContainer = styled.div`
  display: flex;
  padding-bottom: 1.125rem;
  align-items: center;
`;

const ThumbButton = styled.button`
  margin: 1rem;
  display: flex;
  align-items: center;
  background: transparent;
  border-width: 0px;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
`;


const Text = styled.span`
  color: rgb(44, 44, 44);
  font-size: 0.75rem;
  line-height: 1.1875rem;
  font-weight: 500;
`;