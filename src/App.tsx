import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AnimatedRoutes } from './Components/AnimatedRoutes/AnimatedRoutes';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Nav } from './Components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
        <AnimatedRoutes />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
