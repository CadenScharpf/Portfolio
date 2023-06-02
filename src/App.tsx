import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AnimatedRoutes } from './Components/AnimatedRoutes/AnimatedRoutes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav } from './Components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SouthIcon from '@mui/icons-material/South';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Stack } from '@mui/material';

const theme = createTheme({
  palette: {
    text: {

    }
  },

})

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Nav />
          <Stack style={{ position: 'absolute', left: '2%', top: "40%" }}>
        <a href="https://github.com/CadenScharpf"><GitHubIcon style={{ color: 'black', fontSize: '5rem', zIndex: '999', width: '40px' }} /></a>
        <a href="https://www.linkedin.com/in/cadenscharpf/"><LinkedInIcon style={{ color: '#0077b5', fontSize: '5rem', zIndex: '999', width: '40px' }} /></a>
        <a href="https://www.youtube.com/@CadenScharpf"><YouTubeIcon style={{ color: 'red', fontSize: '5rem', zIndex: '999', width: '40px' }} /></a>
      </Stack>

          <AnimatedRoutes />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
