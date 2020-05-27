import React, {Component} from 'react';
import moment from 'moment';
import styled from 'styled-components';
import services from '../../services';
import ReviewInfos from './ReviewInfos';
import ReviewExperience from './ReviewExperience';
import ReviewHelpfulness from './ReviewHelpfulness';
import Ratings from '../../shared/Ratings';
import {HELPFULNESS_ACTION, MARKERS } from '../../constants.js';
import { Spacer } from '../../shared/StyledComponents';

class ReviewsListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      helpfulCount: props.review.isHelpful,
      unhelpfulCount: props.review.isNotHelpful,
      helpfulIsActive: false,
      unhelpfulIsActive: false,
      hasVoted: false,
      isLoading: false,
    };
  }

  async submitVote (feedback) {
    console.log(feedback);
    const { review, productId} = this.props;
    const { hasVoted } = this.state;

    this.setState({isLoading: true});
    const data = {
      feedback: feedback,
      action: HELPFULNESS_ACTION[Number(hasVoted)],
    };

    try {
      await services.sendVote(review.id, productId, data);
      const res = await services.getReview(review.id, productId);
      console.log(res);

      const activeButton = feedback === 'is_helpful' ? 'helpfulIsActive' : 'unhelpfulIsActive';

      this.setState((prevState) => ({
        hasVoted: !prevState.hasVoted,
        helpfulCount: res[0].is_helpful,
        unhelpfulCount: res[0].is_not_helpful,
        [activeButton]: !prevState[activeButton]
      }));
    } catch (err) {
      console.error('Could not update review: ', err);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const { review } = this.props;
    const { helpfulCount, unhelpfulCount, isLoading, helpfulIsActive, unhelpfulIsActive} = this.state;

    return (
      <ReviewsContainer>
        <Spacer bm={1} data-test="date">
          {moment(review.createdAt).format("MMM Do YYYY")}
        </Spacer>
        <Spacer bm={1}>
          <Ratings rating={review.rating.toFixed(1)} marker={MARKERS.STAR}/>
        </Spacer>
        <Spacer bm={1} data-test="subject">
          {review.subject}
        </Spacer>
        <Spacer bm={1} data-test="user">
          <a href="#">
            {review.user.name}
          </a>
        </Spacer>
        {
          review.recommended ? (
            <Spacer bm={1}>
              <Text>
                <p className="recommendation">
                  I would recommend this to a friend
                </p>
              </Text>
            </Spacer>
          ) : null
        }
        <ReviewBodyContainer>
          <ReviewInfos description={review.description}/>
          <ReviewExperience experiences={review.experience}/>
        </ReviewBodyContainer>
        <ReviewHelpfulness
          submitVote={this.submitVote.bind(this)}
          helpfulCount={helpfulCount}
          unhelpfulCount={unhelpfulCount}
          isLoading={isLoading}
          helpfulIsActive={helpfulIsActive}
          unhelpfulIsActive={unhelpfulIsActive}
        />
      </ReviewsContainer>
    );
  }
}

export default ReviewsListItem;


const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  border-top: 1px solid rgb(224, 224, 224);

  > span {
    margin: 1rem 0;
  }
`;

const ReviewBodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  flex-flow: row wrap;
`;

const Text = styled.div`
font-size: 1rem;
line-height: 1.5625rem;
font-weight: 500;

> p {
  margin: 0;
  color: rgb(0, 133, 55);
}
 `;