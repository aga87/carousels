import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledCarousel = styled.div`
  /* show only the active slide */
  overflow: hidden;
`;

const StyledCarouselItems = styled.div<{ activeIndex: number }>`
  /* keep all slides / items in one line */
  white-space: nowrap;
  transition: transform 0.3s;
  /* one active item -> 100% */
  transform: translateX(-${props => props.activeIndex * 100}%);
`;

const StyledCarouselControls = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 5px;
  }
`;

const Carousel: React.FC = ({ children }): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = React.Children.map(children, (child: any, index) => {
    console.log(index);
    return React.cloneElement(child, { width: '100%' });
  });

  const handleNextClick = (currentIndex: number) => {
    // if last slide
    if (currentIndex === React.Children.count(children) - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(currentIndex + 1); // show next
    }
  };

  const handlePrevClick = (currentIndex: number) => {
    // if first slide
    if (currentIndex === 0) {
      setActiveIndex(React.Children.count(children) - 1);
    } else {
      setActiveIndex(currentIndex - 1); // show previous
    }
  };

  return (
    <StyledCarousel>
      <StyledCarouselItems activeIndex={activeIndex}>
        {carouselItems}
      </StyledCarouselItems>
      <StyledCarouselControls>
        <Button label='Prev' handleClick={() => handlePrevClick(activeIndex)} />

        {/* Individual slide controls - optional */}
        {React.Children.map(children, (child, index) => (
          <Button
            label={(index + 1).toString()}
            isActive={index === activeIndex}
            handleClick={() => setActiveIndex(index)}
          />
        ))}

        <Button label='Next' handleClick={() => handleNextClick(activeIndex)} />
      </StyledCarouselControls>
    </StyledCarousel>
  );
};

export default Carousel;
