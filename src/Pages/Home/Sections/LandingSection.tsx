import { motion } from 'framer-motion'
import React from 'react'
import LetsTalk from './letsTalk.png'
import HeadShot from './hs.png'

interface iLandingSectionProps {
    transitionDuration: number
}

const PHASE_DURATION = 2
const PHASE_ANIMATION_DURATION = 1

export function LandingSection(props: iLandingSectionProps) {
    const getPhaseDelay = (phase: number): number =>  { return ((phase * PHASE_DURATION) + props.transitionDuration+1) }
    return (
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '10%', marginTop: '10%', width: '25%'/* , paddingBottom: '15%' */ }}>
                <motion.h1 style={{ fontSize: '4rem', margin: 0, padding: 0, color: '#fff' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: getPhaseDelay(0), duration: PHASE_ANIMATION_DURATION }}>
                    Caden<br/> Scharpf
                </motion.h1>
                <motion.h2
                    initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: getPhaseDelay(1), duration: PHASE_ANIMATION_DURATION}} style={{padding: 0, margin: 0, color: '#fff'}}>
                    Software Engineer
                </motion.h2>
                <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: getPhaseDelay(2), duration: PHASE_ANIMATION_DURATION}} style={{color: '#fff'}}>
                    Software Engineer with 2+ years of professional full stack development and a solid foundation in building scalable applications.
                </motion.p>
                <div style={{width: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', paddingLeft: '10%'}}>
                    <motion.div initial={{ width: '60px', height: '60px' }} animate={{ width: '80px', height: '80px', backgroundColor: '#de1b48', borderStyle: 'solid'}} transition={{ delay: getPhaseDelay(3), duration: 2, type: 'spring', bounce: '.8' }} style={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderColor: '#fff', borderWidth: '2px'}}>
                        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: getPhaseDelay(3), duration: PHASE_ANIMATION_DURATION }} src={LetsTalk} style={{ width: '60px' }} />
                    </motion.div>
                </div >
                
            </div>
            <div style={{ width: '75%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', /* paddingBottom: '15%' */ }}>

                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: getPhaseDelay(0), duration: PHASE_ANIMATION_DURATION }}
                    src={HeadShot} style={{ width: '45%', borderRadius: '50%' }} />
            </div>
        </div>
    )
}

export default LandingSection