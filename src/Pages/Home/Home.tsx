import React from 'react'
import { motion } from 'framer-motion'
import { PAGE_STYLE, TRANSITION_DURATION, } from '../PageStyle'
import { useTheme, IconButton } from '@mui/material'
import { LayoutContext } from '../../Context';
import { LandingSection } from './Sections';

import { ContentWindow } from '../../Components/ContentWindow';


export function Home() {
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


    <ContentWindow style={{background: 'linear-gradient(to right, #141e30, #243b55)'}}>

        <div style={{ ...styles.section,  }}>
          <LandingSection transitionDuration={.5} />
        </div>
      </ContentWindow>
     


  )
}
