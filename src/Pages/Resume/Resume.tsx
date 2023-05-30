import React from 'react'
import { motion } from 'framer-motion'
import { PAGE_STYLE } from '../PageStyle'
import { Nav } from '../../Components'

const styles = {
  page: {
    ...PAGE_STYLE,
    backgroundColor: '#3449eb',
  }
}

export function Resume() {
  return (
    <motion.div
    initial={{ y: "100%"}}
    animate={{ y: "0%" }}
    exit={{ opacity: 1}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    className='resume-page'
    style={styles.page}
    >
      Resume
    </motion.div>
  )
}
