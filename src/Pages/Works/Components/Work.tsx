import { Button } from '@mui/material';
import { CSSProperties } from '@mui/styled-engine-sc';
import { motion } from 'framer-motion';
import React from 'react'

interface iWorkProps {
  img: string;
  title: string;
  description: string;
  containerStyle?: React.CSSProperties;
  site? : string;
  github? : string;
}

const styles: Record<string, React.CSSProperties> = {
  work: {
    overflow: 'hidden',
    position: 'relative', // Add position property
    borderRadius: '25px',
    width: '100%',
    height: '100%',
    opacity: 1,
    border: '1px solid #000',
    
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: '25px',

  },
  overlay: {
    position: 'absolute', // Use absolute positioning
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center', // Center align the text
    color: 'white', // Set the text color
    backgroundColor: 'rgba(0,0,0,0.5)', // Darken the overlay
    overflow: 'scroll',
    
  },
  overlayButtons: {
    height: '20%', 

    width: '100%',
    

  },
  overlayButton: {
    width: '50%',
    height: '20%',
    margin: '1rem auto 1rem auto',
  }
}

export function Work(props: iWorkProps) {

  const overlayVariants = {
    initial: {
      height: '0%',
    },
    hover: {
      height: '100%'
    },
  }

  return (
    <motion.div 
      className="work" 
      style={{ ...styles.work, ...props.containerStyle }}
      whileHover="hover"
      initial="initial"
      >
      <img src={props.img} style={styles.img} />
      <motion.div 
      style={styles.overlay}
      variants={overlayVariants}
      className='overlay'
      >
        <h2>{props.title}</h2>
        <div>{props.description}</div>
        <div style={{...styles.overlayButtons}}>
          {props.site? (<Button href={props.site} variant='text' style={{...styles.overlayButton}}>Live Site</Button>): ''}
          {props.github? (<Button href={props.github}  variant='text' style={{...styles.overlayButton}}>Source Code</Button>): ''}
          
        </div>
      </motion.div>
    </motion.div>
  )
}
