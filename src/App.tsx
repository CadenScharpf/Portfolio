import React from 'react';
import logo from 'src/Components/Nav/logo.png';
import './App.css';
import { AnimatedRoutes } from './Components/AnimatedRoutes/AnimatedRoutes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav } from './Components';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SouthIcon from '@mui/icons-material/South';
import { Stack } from '@mui/material';
import SocialStack from './Components/SocialStack/SocialStack';
import { ContentWindow } from './Components/ContentWindow';



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
  top: 0,
  height: '100%', 
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
}


function App() {
  return (
    <Router>

          <div className="App" style={APP_STYLE}>
            <div className="body" style={BODY_STYLE}>
            <SocialStack /> 
            <AnimatedRoutes />
            </div>
          </div>
    </Router>
  );
}

export default App;
