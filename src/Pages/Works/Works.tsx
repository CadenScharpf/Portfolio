import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ContentWindow } from '../../Components/ContentWindow'
import { BackendApps, Section, WebApplications, Work } from './Components'
import { Button, Grid } from '@mui/material'

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
    <>
      <div style={styles.nav}>
        <Button variant='text' style={{ ...styles.navItem, fontWeight: category === 'web' ? 'bold' : '' }} onClick={() => { setCategory('web') }}>Front End</Button>
        <Button variant='text' style={{ ...styles.navItem, fontWeight: category === 'backend' ? 'bold' : '' }} onClick={() => { setCategory('backend') }}>Back End</Button>
      </div>
        <Section >
          {React.createElement(SECTIONS[category])}
        </Section>
    </>

  )
}
