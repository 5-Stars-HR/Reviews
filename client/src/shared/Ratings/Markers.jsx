import React from 'react';
import styled from 'styled-components';

import fullStarMarker from '../../assets/svg/starMarker/fullStarMarker.svg';
import halfStarMarker from '../../assets/svg/starMarker/halfStarMarker.svg';
import starMarker from '../../assets/svg/starMarker/starMarker.svg';
import legoMarker from '../../assets/svg/legoMarker/legoMarker.svg';
import filledLegoMarker from '../../assets/svg/legoMarker/filledLegoMarker.svg';

const Markers = ({rating, marker = 'star'}) => {
  const markerUrl = marker === 'star' ? fullStarMarker : filledLegoMarker;
  const halfMarkerUrl = marker === 'star' ? halfStarMarker : legoMarker;
  const emptyMarkerUrl = marker === 'star' ? starMarker : legoMarker;

  return (
    <MarkerLayout>
      {
        [...Array(5).keys()].map((idx) => {
          let isFilled = idx <= rating - 1;
          let finalMarker;

          // TODO: Workaround for integer numbers instead of float is to add a .1 to the rating
          // This checks for the final marker and sets the SVG
          if (idx === Math.ceil(Number(rating) + .1) - 1) {
            const mod = rating * 10 % 10;
            finalMarker = mod < 3 ? emptyMarkerUrl : mod > 7 ? markerUrl : halfMarkerUrl;
          }
          return (
            <MarkerContainer key={idx} data-filled={isFilled}>
              <img alt="marker" src={finalMarker ? finalMarker : isFilled ? markerUrl : emptyMarkerUrl} />
            </MarkerContainer>
          );
        })

      }
    </MarkerLayout>
  );
};

export default Markers;

const MarkerContainer = styled.div`
  width: 1.5625rem;
  height: 1.5625rem;
  margin-right: 0.38rem;
`;

const MarkerLayout = styled.div`
  display: flex;
  align-items: center;
`;