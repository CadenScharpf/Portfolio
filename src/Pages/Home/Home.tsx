import React from 'react'
import { motion } from 'framer-motion'
import { VARIANTS, PAGE_STYLE, TRANSITION_DURATION } from '../PageStyle'
import { useTheme, IconButton } from '@mui/material'
import { LayoutContext } from '../../Context';
import { LandingSection } from './Sections';

import { ContentWindow } from '../../Components/ContentWindow';


export function Home() {
  const LANDING_ANIMATION_DURATION = 1;
  const theme = useTheme();
  const sections = 1;
  const styles = {
    page: {
      ...PAGE_STYLE,
      backgroundColor: theme.palette.background.default,//theme.palette.background.default
      
    },
    section: {
      borderRadius: '25px',
      //height: '98vh',
      height: '100%'
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


    <ContentWindow style={{background: 'linear-gradient(to right, #141e30, #243b55)'}}>

        <div style={{ ...styles.section,  }}>
          <LandingSection transitionDuration={TRANSITION_DURATION + LANDING_ANIMATION_DURATION} />
        </div>
      </ContentWindow>
      {/* <div style={{ ...styles.section, backgroundColor: 'green' }}>
          d
        </div> */}

    </motion.div>

  )
}
