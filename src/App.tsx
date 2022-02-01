import React from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

const App = () => (
  <>
    <Normalize />
    <GlobalStyle />
    <Carousel>
      <CarouselItem width='100%'>Item 1</CarouselItem>
      <CarouselItem width='100%'>Item 2</CarouselItem>
      <CarouselItem width='100%'>Item 3</CarouselItem>
    </Carousel>
  </>
);

export default App;
