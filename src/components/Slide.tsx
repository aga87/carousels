import React from 'react';
import styled from 'styled-components';

type SlideProps = {
  content: string;
};

const StyledSlide = styled.div<SlideProps>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.content});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Slide = ({ content }: SlideProps): JSX.Element => {
  return <StyledSlide content={content} />;
};

export default Slide;
