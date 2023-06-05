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
    <div style={styles.page}>
      Resume
    </div>
  )
}
