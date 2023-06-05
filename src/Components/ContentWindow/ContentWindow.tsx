import { motion } from 'framer-motion'
import React from 'react'
import { LayoutContext } from '../../Context'

interface iContentWindowProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}

const style: React.CSSProperties = {
  display: 'flex',
  borderRadius: '25px',
  height: `98%`,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: `${LayoutContext.navHeight}vh`,
  zIndex: 5,
  overflow: 'scroll',
  margin: '0vh 1vh 1vh 1vh',
}

export function ContentWindow(props: iContentWindowProps) {
  const targetWidth = Math.min(1000, window.innerWidth * 0.8);

  return (
    <motion.div
      initial={{ width: '0%' }}
      animate={{ width: [0, targetWidth] }}
      exit={{ width: 0, opacity: 0}}
      transition={{ type: 'spring', bounce: 0.4 }}
      style={{ ...style, ...props.style }}
    >
      {props.children}
    </motion.div>
  )
}
