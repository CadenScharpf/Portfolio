import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PAGE_STYLE } from '../PageStyle'
import { Nav } from '../../Components'
import { ContentWindow } from '../../Components/ContentWindow'
import { BackendApps, WebApplications, Work } from './Components'
import ManimCsWebPreview from './Assets/ManimCSWebPreview.png'
import { Box, Button, Grid } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom'

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: 'inline-flex',
    position: 'relative',
    top: '0',
    width: '100%',
    justifyContent: 'center',
    /* backgroundColor: 'rgba(51, 170, 51, .4)', */
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

const SECTIONS = {
  web: WebApplications,
  backend: BackendApps,
}

export function Works() {
  const [category, setCategory] = React.useState<keyof typeof SECTIONS>('web')
  useEffect(() => {

  });
  return (
    <ContentWindow style={{ display: 'flex', alignItems: 'center', padding: '1rem' /* backgroundImage: 'linear-gradient(to right, #8360c3, #2ebf91)' */ }}>
      <div style={styles.nav}>
        <Button variant='text' style={{ ...styles.navItem, fontWeight: category === 'web' ? 'bold' : '' }} onClick={() => { setCategory('web') }}>Front End</Button>
        <Button variant='text' style={{ ...styles.navItem, fontWeight: category === 'backend' ? 'bold' : '' }} onClick={() => { setCategory('backend') }}>Back End</Button>
      </div>


        <Grid container spacing={2} style={{}} >
          {React.createElement(SECTIONS[category])}
        </Grid>

    </ContentWindow>
  )
}
