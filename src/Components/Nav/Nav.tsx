import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { LayoutContext } from '../../Context'
import { AppBar, Box, useTheme } from '@mui/material';

import Logo from './logo.png'

export function Nav() {
  const theme = useTheme();
  
  const styles: Record<string, React.CSSProperties> = {
    nav: {
      display : 'flex',
      justifyContent: 'left',
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
    <Box sx={{width: '50px', position: 'absolute', left: 10}}>
      <img alt="" src={Logo} style={{height: '50px', margin: '.5rem'}}/>
      </Box>
    
      
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: { xs: 'center', md: 'right' }, height: '100%'}}>
        cvxb
      </Box>
    </AppBar>
  )
}
