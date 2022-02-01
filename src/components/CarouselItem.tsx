import React from 'react';
import styled from 'styled-components';

type CarouselItemProps = {
  width: string;
};

const StyledCarouselItem = styled.div<CarouselItemProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: 200px;
  background-color: green;
  color: white;
`;

const CarouselItem: React.FC<CarouselItemProps> = ({
  children,
  width
}): JSX.Element => {
  return <StyledCarouselItem width={width}>{children}</StyledCarouselItem>;
};

export default CarouselItem;
