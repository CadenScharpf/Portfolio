import React from 'react'
import { motion } from 'framer-motion'
import { VARIANTS, PAGE_STYLE, TRANSITION_DURATION } from '../PageStyle'
import { useTheme } from '@mui/material'
import { LayoutContext } from '../../Context';
import { LandingSection } from './Sections';



export function Home() {
  const LANDING_ANIMATION_DURATION = 1;
  const theme = useTheme();
  const styles = {
    page: {
      ...PAGE_STYLE,
      backgroundColor: theme.palette.background.default,//theme.palette.background.default

    },
    landingCard: {
      display: 'flex-column',
      borderRadius: '25px',

      /* height: `${100 - LayoutContext.navHeight}vh`, */
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 5,
      overflow: 'hidden',
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,54,1) 35%, rgba(0,212,255,1) 100%)',
      backgroundPosition: '-30% 0px',
      /* width: '80%', */
    },
    section: {
      height: '100vh',
    }



  }

  

  return (
    <motion.div
      initial="open"
      animate="closed"
      exit="exit"
      variants={VARIANTS}
      style={styles.page}
    >
      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: '80%' }}
        transition={{ delay: TRANSITION_DURATION, duration: LANDING_ANIMATION_DURATION, type: 'spring', bounce: 0.5 }}
        style={styles.landingCard}
      >
        <div style={{ ...styles.section, height: `${100 - LayoutContext.navHeight}vh` }}>
          <LandingSection transitionDuration={TRANSITION_DURATION+LANDING_ANIMATION_DURATION}/>
        </div>
        <div style={{ ...styles.section, backgroundColor: 'green' }}>
          d
        </div>

      </motion.div>
    </motion.div>
  )
}
