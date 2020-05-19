import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

import { Spacer } from '../../shared/StyledComponents';


class ReviewInfos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false,
      hasToggle: true,
    };
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      hasToggle: (this.wrapperRef.current.offsetHeight >= 115)
    });
  }

  onToggle() {
    this.setState((prevState) => ({isToggled: !prevState.isToggled}));
  }

  render() {
    const { hasToggle, isToggled } = this.state;
    const { description } = this.props;

    return (
      <ReviewBodyInfos>
        <Spacer bm={1.125}>
          <ToggleWrapper isToggled={isToggled} ref={this.wrapperRef}>
            <Text>
              {description}
            </Text>
          </ToggleWrapper>
        </Spacer>
        <ToggleDescriptionButton onClick={this.onToggle.bind(this)}>
          {
            hasToggle && (
              <>
                {
                  isToggled ? 'Show Less' : 'Show More'
                }
              </>
            )
          }
        </ToggleDescriptionButton>
      </ReviewBodyInfos>
    );
  }
}

export default ReviewInfos;


const ReviewBodyInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  flex: 1 1 0%;
  padding-right: 2.5rem;
`;

const Text = styled.span`
  font-weight: 400;
  line-height: 1.75rem;
  overflow-wrap: break-word;
  word-break: break-word;
`;

const ToggleWrapper = styled.div`
  position: relative;
  max-height: 7.2rem;
  width: 100%;
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  ${props => props.isToggled && css`max-height: 100rem;`};

  &:after {
    content: "";
    position: absolute;
    top: 6rem;
    width: 100%;
    height: 1.5625rem;
    background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255));
  }
`;

const ToggleDescriptionButton = styled.button`
    width: auto;
    border-collapse: collapse;
    text-align: center;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.1875rem;
    color: rgb(0, 98, 165);
    padding: 0;
    margin-bottom: 1.25rem;
    border-radius: 4px;
    border: 1px solid transparent;
    align-self: flex-start;
    cursor: pointer;

    &:focus {
      box-shadow: none;
      outline: none;
    }
`;