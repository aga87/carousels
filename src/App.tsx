import React from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
`;

const App = () => (
  <div>
    <Normalize />
    <GlobalStyle />
  </div>
);

export default App;
