import React, { useState, useEffect } from 'react';
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

const CarouselAuto: React.FC = ({ children }): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Pause/Resume the Carousel/Slider on mouse hover/mouse leave
  const [paused, setPaused] = useState(false);

  const carouselItems = React.Children.map(children, (child: any, index) => {
    console.log(index);
    return React.cloneElement(child, { width: '100%' });
  });

  const showNext = (currentIndex: number) => {
    // if last slide
    if (currentIndex === React.Children.count(children) - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(currentIndex + 1); // show next
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        showNext(activeIndex);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    // Pause/Resume the Carousel/Slider on mouse hover/mouse leave
    <StyledCarousel
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <StyledCarouselItems activeIndex={activeIndex}>
        {carouselItems}
      </StyledCarouselItems>
      <StyledCarouselControls>
        {/* Individual slide controls - optional */}
        {React.Children.map(children, (child, index) => (
          <Button
            label={(index + 1).toString()}
            isActive={index === activeIndex}
            handleClick={() => setActiveIndex(index)}
          />
        ))}
      </StyledCarouselControls>
    </StyledCarousel>
  );
};

export default CarouselAuto;
