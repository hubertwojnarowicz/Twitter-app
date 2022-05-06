import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './context/theme';

const lightTheme = {
  body: '#ffffff',
  text: '#0f1419',
  border: '#cfd9de',
  placeholder: '#536471',
};

const darkTheme = {
  body: '#000000',
  text: '#e7e9ea',
  border: '#333639',
  placeholder: '#71767b',
};

export default function Theme({ children }) {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}
