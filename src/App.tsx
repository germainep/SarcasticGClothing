import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from '@rebass/preset';

export default (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
