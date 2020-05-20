import React, { Component } from 'react';
import styled from 'styled-components';

import Services from '../../services';
import ReviewsList from '../ReviewsList';
import ReviewsOverall from '../ReviewsOverall';
import { Button } from '../../shared/StyledComponents';

class ReviewsOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  async componentDidMount() {
    Services.getReviews(18)
      .then(res => {
        this.setState({
          reviews: res.reviews,
          productId: res.productId
        });
      })
      .catch(err => {
        console.error('failed to fetch', err);
      });
  }

  render() {
    const { reviews, productId } = this.state;
    return (
      <OverviewContainer>
        <h1 className="reviews-overview__title">Customer Reviews</h1>
        {reviews.length ? (
          <>
            <ReviewsOverall reviews={reviews}/>
            <ReviewsList reviews={reviews} productId={productId}/>
          </>
        ) : (
          <>
            <span> Be the first to</span>
            <Button>Write a review</Button>
          </>
        )}
      </OverviewContainer>
    );
  }
}

export default ReviewsOverview;


const OverviewContainer = styled.div`
  width: 100%;
  max-width: 82.5rem;
  padding: 0px 0.75rem;
  margin: 0px auto;
  height: 100%;
  min-height: 100%;
  line-height: 1.5;
  text-size-adjust: 100%;
  color: rgb(44, 44, 44);
  background: rgb(255, 255, 255);
  font-family: "Cera Pro", sans-serif;
`;

