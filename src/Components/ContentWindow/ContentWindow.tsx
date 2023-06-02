import { motion } from 'framer-motion'
import React from 'react'
import { TRANSITION_DURATION } from '../../Pages'
import { CONTENT_WINDOW_ANIMATION_DURATION } from '../../Pages'

interface iContentWindowProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

const style = {
    display: 'flex-column',
    borderRadius: '25px',
    height: '98vh',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    overflow: 'hidden',
    margin: '0vh 1vh 1vh 1vh'
}

export function ContentWindow(props: iContentWindowProps) {
    return (
        <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '80%' }}
            exit={{ width: '0%' }}
            transition={{ delay: TRANSITION_DURATION, duration: CONTENT_WINDOW_ANIMATION_DURATION, type: 'spring', bounce: 0.4 }}
            style={{ ...style, ...props.style }}
        >
            {props.children}
        </motion.div>
    )
}

