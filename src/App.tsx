import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AnimatedRoutes } from './Components/AnimatedRoutes/AnimatedRoutes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav } from './Components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SouthIcon from '@mui/icons-material/South';
import { LayoutContext } from './Context';
import { Stack } from '@mui/material';
import SocialStack from './Components/SocialStack/SocialStack';

const theme = createTheme({
  palette: {
    text: {

    }
  },

})
export const PAGE_STYLE: React.CSSProperties = {
  position: 'relative',
  top: LayoutContext.navHeight,
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10,
  alignItems: 'center',
  justifyContent: 'center',
  height: `calc(100vh - ${LayoutContext.navHeight}px)`,
}


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
            <Nav />
          <div className="App" style={PAGE_STYLE}>
            <SocialStack />
            <AnimatedRoutes />
          </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
