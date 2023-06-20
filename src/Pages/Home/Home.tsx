import React from 'react'
import { motion } from 'framer-motion'
import { TRANSITION_DURATION, } from '../PageStyle'
import { useTheme, IconButton, Box} from '@mui/material'
import {  } from 'framer-motion'
import LetsTalk from './letsTalk.png'
import HeadShot from './hs.png'
import { Container, Typography} from '@mui/material'

import { ContentWindow } from '../../Components/ContentWindow';

const PHASE_DURATION = 1.5 //!< time between triggerings of each phase
const PHASE_ANIMATION_DURATION = 1 //!< time it takes for each phase to animate

const STYLES: Record<string, React.CSSProperties> = {
  container: {
      display: 'flex',
      textAlign: 'left',
      marginTop: '0%',
      width: '100%',
      height: '100%'
  },
  column: {

      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden'
  },

  headshotSm: {
      borderRadius: '50%', border: '1px solid red', marginLeft: '10%'/* margin: '10% 0 0 10%' */
  },

  headshotLgMotionWrapper: {
      position: 'absolute', top: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'
  },
  headshotLg: {
      borderRadius: '50%', width: '100%', maxWidth: '400px'
  },
  
  slideShowMotionWrapper: {
      position: 'absolute', 
      bottom: 0, 
      overflow: 'hidden', 
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderRadius: '25px'
  }

}

export function Home() {
  const theme = useTheme();

  const getPhaseDelay = (phase: number): number => { return ((phase * PHASE_DURATION) + TRANSITION_DURATION) }
  return (
    <ContentWindow style={{/* background: 'linear-gradient(to right, #141e30, #243b55)' */ }}>
            <Container className='container' style={STYLES.container} sx={{flexDirection: {xs: 'column', sm: 'column',  md: 'row', lg: 'row', xl: 'row'}, height: {xs: '0%', sm: '0%',  md: '100%', lg: '100%', xl: '100%'}}}>
                <Box className='column' style={{...STYLES.column, overflow: 'scroll'}} sx={{width: {xs: '100%', sm: '100%',  md: '50%', lg: '50%', xl: '50%'}, py: 3}}>
                    <motion.img initial={{ display: 'none', opacity: 0, width: '0', }} animate={{ display: '', opacity: 1, width: '25%' }} transition={{ delay: getPhaseDelay(4), duration: PHASE_ANIMATION_DURATION }} src={HeadShot} style={STYLES.headshotSm} />

                    <motion.div style={{ margin: 0, padding: 0, color: '#000', }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: getPhaseDelay(0), duration: PHASE_ANIMATION_DURATION }}>
                        <Typography variant='h1'>Caden<br />Scharpf</Typography>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: getPhaseDelay(1), duration: PHASE_ANIMATION_DURATION }} style={{ padding: 0, margin: 0, color: '#000' }}>
                        <Typography variant='h2'>Software Engineer</Typography>
                    </motion.div>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: getPhaseDelay(2), duration: PHASE_ANIMATION_DURATION }} style={{ width: '80%', color: '#000', textAlign: 'left' }}>
                        Software Engineer with 2+ years of professional full stack development and a solid foundation in building scalable applications.
                    </motion.p>
                    <Box style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }} sx={{ display: {xs: 'flex', sm: 'flex',  md: 'flex', lg: 'flex', xl: 'flex'}}}>
                        <motion.div initial={{ width: '60px', height: '60px' }} animate={{ width: '80px', height: '80px', backgroundColor: '#de1b48', borderStyle: 'solid' }} transition={{ delay: getPhaseDelay(3), duration: 2, type: 'spring', bounce: .8 }} style={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderColor: 'grey', borderWidth: '2px' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: getPhaseDelay(3), duration: PHASE_ANIMATION_DURATION }} src={LetsTalk} style={{ width: '60px' }} />
                        </motion.div>
                    </Box >
                </Box>
                <Box className='column' style={STYLES.column} sx={{width: {xs: '100%', sm: '100%',  md: '50%', lg: '50%', xl: '50%'},}}>
                    <motion.div initial={{ height: '100%' }} animate={{ height: '0px' }}  transition={{ delay: getPhaseDelay(4), duration: PHASE_ANIMATION_DURATION }} style={STYLES.headshotLgMotionWrapper}>
                        <img src={HeadShot} style={STYLES.headshotLg} />

                    </motion.div>

                    <motion.div initial={{ height: 0 }} animate={{ height: '100%' }} transition={{ delay: getPhaseDelay(4), duration: PHASE_ANIMATION_DURATION }} style={STYLES.slideShowMotionWrapper}>
                        <div style={{ width: '100%', height: '50%', backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
                            sfssdf
                        </div>
                    </motion.div>
                
                </Box>
            </Container>
    </ContentWindow>
  )
}
