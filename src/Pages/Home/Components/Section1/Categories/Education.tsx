import React, { useContext } from 'react'
import { LayoutContext } from '../../../../../Components/AnimatedRoutes/AnimatedRoutes'; 
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function Home() {
    const lcp = useContext(LayoutContext);
    const DEFAULT_STYLES: Record<string, React.CSSProperties> = {
        text:{maxWidth: 800, width: "92%", margin: '10px', color: 'white'}
    };
  return (
    <>
        <Box style={{display: "flex",flexDirection: 'column', height: "100%", justifyContent: 'center', alignItems: 'center', textAlign: 'left', marginLeft: 10}}>
            <Typography component={motion.h3} initial={{opacity:0,x:-50}} animate={{opacity: 1, x:0, transition: {duration: 1, delay: 0}}} variant="h3" sx={DEFAULT_STYLES.text}>
              Graduated with a B.S. in Computer Science from ASU
            </Typography>
            <Typography component={motion.h3} initial={{opacity:0,x:50}} animate={{opacity: 1, x:0, transition: {duration: 1, delay: 1}}} variant="h4" sx={DEFAULT_STYLES.text}>
              With a focus in Software Engineering
            </Typography>
            <Typography component={motion.h3} initial={{opacity:0,x:-50}} animate={{opacity: 1, x:0, transition: {duration: 1, delay: 2}}} variant="h4" sx={{...DEFAULT_STYLES.text, color: 'rgba(255,255,255,0.8)'}}>
              August 2019 - May 2021
            </Typography>
            
        </Box>
    </>
  )
}

export default Home