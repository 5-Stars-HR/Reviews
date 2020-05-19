import React from 'react';
import styled from 'styled-components';

import Ratings from '../../shared/Ratings';
import { MARKERS } from '../../constants';
import { Spacer } from '../../shared/StyledComponents';

const ReviewExperience = ({experiences}) => (
  <ReviewExperienceContainer>
    <Spacer bm={1.125}>
      <div className="review-experience__play-experience">
        <label>Play Experience</label>
        <Ratings rating={experiences.playExperience.toFixed(1)} marker={MARKERS.LEGO}/>
      </div>
    </Spacer>
    <Spacer bm={1.125}>
      <div className="review-experience__difficulty">
        <label>Level of Difficulty</label>
        <Ratings rating={experiences.difficulty.toFixed(1)} marker={MARKERS.LEGO}/>
      </div>
    </Spacer>
    <Spacer bm={1.125}>
      <div className="review-experience__value">
        <label>Value for Money</label>
        <Ratings rating={experiences.value.toFixed(1)} marker={MARKERS.LEGO}/>
      </div>
    </Spacer>
    <Spacer bm={1.125}>
      <span className="review-experience__build-time">
        <span>Build Time: 8 hrs</span>
      </span>
    </Spacer>
    <Spacer bm={1.125}>
      <span className="review-experience__building-experience">
        <span>Build Experience: Advanced LEGO builder</span>
      </span>
    </Spacer>
  </ReviewExperienceContainer>
);

export default ReviewExperience;


const ReviewExperienceContainer = styled.div`
  width: 16.97rem;
  overflow: hidden;
`;