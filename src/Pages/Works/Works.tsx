import React from 'react'
import { motion } from 'framer-motion'
import { VARIANTS, PAGE_STYLE } from '../PageStyle'
import { Nav } from '../../Components'
import { ContentWindow } from '../../Components/ContentWindow'

const styles = {
  page: {
    ...PAGE_STYLE,
    backgroundColor: 'white',
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
      <ContentWindow style={{ backgroundImage: 'linear-gradient(to right, #8360c3, #2ebf91)'  }}>
        dsfda
      </ContentWindow>
      </motion.div>
  )
}
