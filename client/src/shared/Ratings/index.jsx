import React from 'react';
import styled from 'styled-components';

import Markers from './Markers';

const Ratings = ({rating, marker}) => (
  <RatingLayout>
    <Markers rating={rating} marker={marker}/>
    <RatingDisplay>
      {rating}
    </RatingDisplay>
  </RatingLayout>
);

export default Ratings;


const RatingLayout = styled.div`
  display: flex;
  align-items: center;
`;

const RatingDisplay = styled.span`
  font-weight: 500;
  margin-left: 0.5rem;
`;