import React from 'react'
import { motion } from 'framer-motion'
import { PAGE_STYLE } from '../PageStyle'
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
    initial={{ y: "100%"}}
    animate={{ y: "0%" }}
    exit={{ opacity: 1}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    className='works-page'
    style={styles.page}
    >
      works
      </motion.div>
  )
}
