import React from 'react'
import { motion } from 'framer-motion'
import { VARIANTS, PAGE_STYLE } from '../PageStyle'
import { Nav } from '../../Components'

const styles = {
  page: {
    ...PAGE_STYLE,
    backgroundColor: '#ebde34',
  }
}

export function Works() {
  return (
    <motion.div
    initial="open"
    animate="closed"
    exit="exit"
    variants={VARIANTS}
    className='works-page'
    style={styles.page}
    >
      works
      </motion.div>
  )
}
