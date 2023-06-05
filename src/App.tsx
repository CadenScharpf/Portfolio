import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AnimatedRoutes } from './Components/AnimatedRoutes/AnimatedRoutes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav } from './Components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SouthIcon from '@mui/icons-material/South';

import { Stack } from '@mui/material';
import { PAGE_STYLE } from './Pages';
import SocialStack from './Components/SocialStack/SocialStack';

const theme = createTheme({
  palette: {
    text: {

    }
  },

})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App" style={PAGE_STYLE}>
        <Nav />
          <SocialStack />
          <AnimatedRoutes />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
