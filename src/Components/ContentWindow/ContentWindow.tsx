import { PanInfo, motion, wrap } from 'framer-motion'
import React, { useState } from 'react'
import { LayoutContext } from '../../Context'
import { Grid } from '@mui/material'


interface iContentWindowProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '25px',
  // height: `98%`,
  alignItems: 'center',
  height:'90%',
  overflow: 'scroll',
  margin: '1vh',
  border: '4px solid transparent',
  background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, darkblue, darkorchid) border-box',

}


export function ContentWindow(props: iContentWindowProps) {
  const targetWidth = Math.min(2000, window.innerWidth * 0.8);
  
  const VARIAINTS = {
    initial: { width: '0%' },
    animate: { width: [0, targetWidth] },
    exit: { width: 0, opacity: 0}
  }

  return (
    <Grid
    component={motion.div}
      variants={VARIAINTS}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: 'spring', bounce: 0.4 }}
      style={{ ...style, ...props.style }}
    >
      {props.children}
    </Grid>
  )
}
