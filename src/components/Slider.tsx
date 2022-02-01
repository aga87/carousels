import React, { useState } from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent';
import Slide from './Slide';

const StyledSlider = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background: blue;
`;

const Slider = () => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  });
  const { translate, transition } = state;
  console.log(setState);

  const images = [
    'https://res.cloudinary.com/aga87/image/upload/v1552140064/chris-barbalis.jpg',
    'https://res.cloudinary.com/aga87/image/upload/v1552760314/tim-mossholder.jpg',
    'https://res.cloudinary.com/aga87/image/upload/v1552761207/matteo-stroppaghetti.jpg',
    'https://res.cloudinary.com/aga87/image/upload/v1552762849/josh-wilburne.jpg',
    'https://res.cloudinary.com/aga87/image/upload/v1552763564/flo-karr.jpg'
  ];

  const slides = images.map(image => <Slide content={image} />);

  return (
    <StyledSlider>
      <SliderContent
        translateValue={translate}
        transition={transition}
        width={getWidth()}
      >
        {slides}
      </SliderContent>
    </StyledSlider>
  );
};

export default Slider;
