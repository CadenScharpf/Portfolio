import React from 'react'
import { motion } from 'framer-motion'
import { VARIANTS, PAGE_STYLE, TRANSITION_DURATION } from '../PageStyle'
import { useTheme, IconButton } from '@mui/material'
import { LayoutContext } from '../../Context';
import { LandingSection } from './Sections';
import SouthIcon from '@mui/icons-material/South';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export function Home() {
  const LANDING_ANIMATION_DURATION = 1;
  const theme = useTheme();
  const sections = 1;
  const styles = {
    page: {
      ...PAGE_STYLE,
      backgroundColor: theme.palette.background.default,//theme.palette.background.default
      height: `${(100*sections)-LayoutContext.navHeight}vh`
    },
    landingCard: {
      display: 'flex-column',
      borderRadius: '25px',
      /* height: `${100 - LayoutContext.navHeight}vh`, */
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 5,
      overflow: 'hidden',
      
      /* width: '80%', */
    },
    section: {
      borderRadius: '25px',
      height: '98vh',
      margin: '1vh 1vh 1vh 1vh'
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
      <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', left: '2%', top: "40%"}}>
        <a href="https://github.com/CadenScharpf"><GitHubIcon style={{color: 'black', fontSize: '5rem', zIndex: '999', width: '40px'}}/></a>
        <a href="https://www.linkedin.com/in/cadenscharpf/"><LinkedInIcon style={{color: '#0077b5', fontSize: '5rem', zIndex: '999', width: '40px'}}/></a> 
        <a href="https://www.youtube.com/@CadenScharpf"><YouTubeIcon style={{color: 'red', fontSize: '5rem', zIndex: '999', width: '40px'}}/></a> 
      </div>

      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: '80%' }}
        transition={{ delay: TRANSITION_DURATION, duration: LANDING_ANIMATION_DURATION, type: 'spring', bounce: 0.5 }}
        style={styles.landingCard}
      >
        
        <div style={{ ...styles.section, height: `${100 - LayoutContext.navHeight-2}vh`, background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,54,1) 35%, rgba(0,212,255,1) 100%)' }}>
          <LandingSection transitionDuration={TRANSITION_DURATION+LANDING_ANIMATION_DURATION}/>
        </div>
        {/* <div style={{ ...styles.section, backgroundColor: 'green' }}>
          d
        </div> */}

      </motion.div>
    </motion.div>
  )
}
