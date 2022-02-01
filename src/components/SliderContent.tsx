import React from 'react';
import styled from 'styled-components';

type SliderContentProps = {
  translateValue: number;
  transition: number;
  width: number;
};

const StyledSliderContent = styled.div<SliderContentProps>`
  display: flex;
  width: ${props => props.width}px;
  height: 90%;
  transform: translateX(-${props => props.translateValue}px);
  transition: transform ease-out ${props => props.transition}s;
  background: yellow;
`;

const SliderContent: React.FC<SliderContentProps> = ({
  children,
  translateValue,
  transition,
  width
}): JSX.Element => {
  console.log(translateValue, transition, width);

  return (
    <StyledSliderContent
      width={width}
      translateValue={translateValue}
      transition={transition}
    >
      {children}
    </StyledSliderContent>
  );
};

export default SliderContent;
