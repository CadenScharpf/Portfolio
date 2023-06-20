import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

import { LayoutContext } from '../../Context'
import { AppBar, Box, useTheme } from '@mui/material';

export function Nav() {
  const theme = useTheme();
  
  const styles: Record<string, React.CSSProperties> = {
    nav: {
      display : 'flex',
      justifyContent: 'right',
      alignItems: 'right',
      padding: '0',
      height: LayoutContext.navHeight,
      //boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      position: 'absolute',
      top: 0, 
      right: 0,
      left: 0,
      paddingBottom: '0vh',
      background: 'transparent'
    },
  
   navItem: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
      fontWeight: '600',
      fontSize: '1.2rem',
      padding: '1em'
    }
  }
  
  return (
    <AppBar className='nav' sx={styles.nav}>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: { xs: 'center', md: 'right' }, height: '100%'}}>

        <NavLink 
        to="/" 
        style={({ isActive, isPending }) => {
          return {
            ...styles.navItem,
            fontWeight: isActive ? "bold" : "",
            //color: isPending ? "red" : "black",
          };
        }}
        > 
        Home
        </NavLink>
        <NavLink 
        to="/works" 
        style={({ isActive, isPending }) => {
          return {
            ...styles.navItem,
            fontWeight: isActive ? "bold" : "",
            //color: isPending ? "red" : "black",
          };
        }}
        >
        Works
        </NavLink>
        <NavLink 
        to="/resume" 
        style={({ isActive, isPending }) => {
          return {
            ...styles.navItem,
            fontWeight: isActive ? "bold" : "",
            //color: isPending ? "red" : "black",
          };
        }}
        >
        Resume
        </NavLink>
      </Box>
    </AppBar>
  )
}
