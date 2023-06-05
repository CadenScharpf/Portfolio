import React from 'react'
import { motion } from 'framer-motion'
import { PAGE_STYLE } from '../PageStyle'
import { Nav } from '../../Components'
import { ContentWindow } from '../../Components/ContentWindow'
import { WebApplications, Work } from './Components'
import ManimCsWebPreview from './Assets/ManimCSWebPreview.png'
import { Box, Grid } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom'

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: 'inline-flex',
    position: 'relative',
    top: '0',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(51, 170, 51, .4)',
    marginBottom: '1rem',
  },
  navItem: {
    zIndex: 9999999,
    padding: '1vh 1vh 1vh 1vh',
    textDecoration: 'none',
    color: '#000',
    fontWeight: '600',
    fontSize: '1.2rem',
  }
}

export function Works() {
  return (
    <ContentWindow style={{ backgroundImage: 'linear-gradient(to right, #8360c3, #2ebf91)' }}>
      <div style={styles.nav}>
        <NavLink style={({ isActive, isPending }) => {
        return {
          ...styles.navItem,
          fontWeight: isActive ? "bold" : "",
          //color: isPending ? "red" : "black",
        };
      }} to="/works/web">Web Applications</NavLink>
        <NavLink style={({ isActive, isPending }) => {
        return {
          ...styles.navItem,
          fontWeight: isActive ? "bold" : "",
          //color: isPending ? "red" : "black",
        };
      }} to="/works/backend">Backend Applications</NavLink>
      </div>
      <Grid container spacing={2} style={{ maxHeight: '100%', overflow: 'auto', padding: '1rem' }} >
        <Outlet />
      </Grid>
    </ContentWindow>
  )
}
