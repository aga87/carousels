import React from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Carousel from './components/Carousel';
import CarouselAuto from './components/CarouselAuto';
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
    <h2>Carousel with manual activation</h2>
    <Carousel>
      <CarouselItem width='100%'>Item 1</CarouselItem>
      <CarouselItem width='100%'>Item 2</CarouselItem>
      <CarouselItem width='100%'>Item 3</CarouselItem>
    </Carousel>
    <h2>Carousel with auto rotation</h2>
    <CarouselAuto>
      <CarouselItem width='100%'>Item 1</CarouselItem>
      <CarouselItem width='100%'>Item 2</CarouselItem>
      <CarouselItem width='100%'>Item 3</CarouselItem>
    </CarouselAuto>
  </>
);

export default App;
