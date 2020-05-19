import styled from 'styled-components';

export const Button = styled.button`
  background-color: rgb(0, 109, 183);
  color: rgb(255, 255, 255);
  border-collapse: collapse;
  font-weight: 500;
  font-size: .875rem;
  text-align: center;
  padding: 1rem;
  border: 1px solid rgb(0, 109, 183);
  border-radius: 4px;
  line-height: 1.2rem;
`;

export const Spacer = styled.div(props => ({
  'padding-top': props.tm ? `${props.tm}rem;` : '0px;',
  'padding-right': props.rm ? `${props.rm}rem;` : '0px;',
  'padding-bottom': props.bm ? `${props.bm}rem;` : '0px;',
  'padding-left': props.lm ? `${props.lm}rem;` : '0px;',
}));