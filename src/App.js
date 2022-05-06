import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeContext from './context/theme';
import useTheme from './hooks/use-theme';
import Theme from './Theme';
import RegisterForm from './components/RegisterForm';
import * as ROUTES from './routes/routes';
import EmailAndPasswordRegister from './components/RegisterForm/EmailAndPasswordRegister';
import Home from './pages/Home';

function App() {
  const { theme, setColorMode } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, setColorMode }}>
      <Theme>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<RegisterForm />}>
              <Route path={ROUTES.SIGNUP} element={EmailAndPasswordRegister} />
            </Route>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Routes>
        </Router>
      </Theme>
    </ThemeContext.Provider>
  );
}

export default App;
