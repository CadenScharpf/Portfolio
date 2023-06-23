import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AnimatedRoutes } from './Components/AnimatedRoutes/AnimatedRoutes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav } from './Components';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SouthIcon from '@mui/icons-material/South';
import { LayoutContext } from './Context';
import { Stack } from '@mui/material';
import SocialStack from './Components/SocialStack/SocialStack';
import { ContentWindow } from './Components/ContentWindow';

const theme = responsiveFontSizes(createTheme({
  palette: {
    text: {

    }
  },
}))

const APP_STYLE: React.CSSProperties = {
  position: 'relative',
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}

const BODY_STYLE: React.CSSProperties = {
  top: `${LayoutContext.navHeight}px`,
  height: `calc(100vh - ${LayoutContext.navHeight}px)`, 
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
}


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <div className="App" style={APP_STYLE}>
            <Nav />
            <div className="body" style={BODY_STYLE}>
            <SocialStack /> 
            <AnimatedRoutes />
            </div>
          </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
