import React from 'react'
import { motion } from 'framer-motion'
import { VARIANTS, PAGE_STYLE } from '../PageStyle'
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
    initial="open"
    animate="closed"
    exit="exit"
    variants={VARIANTS}
    className='resume-page'
    style={styles.page}
    >
      Resume
    </motion.div>
  )
}
