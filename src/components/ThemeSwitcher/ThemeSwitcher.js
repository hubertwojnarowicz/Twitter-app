import React, { useContext } from 'react';
import ThemeContext from '../../context/theme';
import { Sun, Moon } from 'react-feather';
import styledComponents from 'styled-components';

export default function ThemeSwitcher() {
  const { theme, setColorMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    theme === 'dark' ? setColorMode('light') : setColorMode('dark');
  };
  return (
    <>
      {theme === 'dark' ? (
        <ThemeButton onClick={toggleTheme}>
          <Moon fill="#ffffff" />
        </ThemeButton>
      ) : (
        <ThemeButton onClick={toggleTheme}>
          <Sun />
        </ThemeButton>
      )}
    </>
  );
}

const ThemeButton = styledComponents.button`
    border: none;
    outline: none;
    cursor: pointer;
`;
