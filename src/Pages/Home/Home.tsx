import React from 'react'
import { motion } from 'framer-motion'
import { PAGE_STYLE } from '../PageStyle'
import { useTheme } from '@mui/material'


export function Home() {
  
  const theme = useTheme();
  const styles = {
    page: {
      ...PAGE_STYLE,
      backgroundColor: 'orange'//theme.palette.background.default
      
    }
  }
  return (
    <motion.div
    initial={{ y: "100%"}}
    animate={{ y: "0%" }}
    exit={{ opacity: 1}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    className='home-page'
    style={styles.page}
    >
    Home
      </motion.div>
  )
}
