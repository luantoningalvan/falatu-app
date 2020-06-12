import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const StyleProvider: React.ComponentType = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StyleProvider;
