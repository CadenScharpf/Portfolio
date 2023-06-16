import { motion } from 'framer-motion'
import React from 'react'
import { LayoutContext } from '../../Context'

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
  position: 'absolute',
  top: `0`,
  bottom: '1vh',
  overflow: 'scroll',
  margin: 0,
  border: '4px solid transparent',
  background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, darkblue, darkorchid) border-box',

}

export function ContentWindow(props: iContentWindowProps) {
  const targetWidth = Math.min(2000, window.innerWidth * 0.8);

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
