import { motion } from 'framer-motion'
import React from 'react'
import LetsTalk from './letsTalk.png'
import HeadShot from './hs.png'
import { Typography, useTheme } from '@mui/material'

interface iLandingSectionProps {
    transitionDuration: number
}

const PHASE_DURATION = 1.5 //!< time between triggerings of each phase
const PHASE_ANIMATION_DURATION = 1 //!< time it takes for each phase to animate

const STYLES: Record<string, React.CSSProperties> = {

}

export function LandingSection(props: iLandingSectionProps) {
    const theme = useTheme();
    const getPhaseDelay = (phase: number): number => { return ((phase * PHASE_DURATION) + props.transitionDuration + .75) }
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'left', marginTop: '0%', width: '100%', height: '100%'/* , paddingBottom: '15%' */ }}>
                <div style={{ width: '50%' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div>
                    <motion.img initial={{ display: 'none', opacity: 0, width: '0', }} animate={{ display: '', opacity: 1, width: '25%' }} transition={{ delay: getPhaseDelay(4), duration: PHASE_ANIMATION_DURATION, /* type:"spring", bounce: .8 */ }} src={HeadShot} style={{ borderRadius: '50%', border: '2px solid red', marginLeft: '10%' /* margin: '10% 0 0 10%' */ }} />
                    <div style={{ width: '100%', display: 'flex' }}>
                        <motion.div style={{ margin: 0, padding: 0, color: '#000', fontSize: "clamp(4rem, 10vw, 6rem)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: getPhaseDelay(0), duration: PHASE_ANIMATION_DURATION }}>
                            <Typography variant='h1'>Caden<br />Scharpf</Typography>
                        </motion.div>

                    </div>

                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: getPhaseDelay(1), duration: PHASE_ANIMATION_DURATION }} style={{ padding: 0, margin: 0, color: '#000' }}>
                        <Typography variant='h2'>Software Engineer</Typography>
                    </motion.div>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: getPhaseDelay(2), duration: PHASE_ANIMATION_DURATION }} style={{ width: '50%', color: '#000', textAlign: 'left' }}>
                        Software Engineer with 2+ years of professional full stack development and a solid foundation in building scalable applications.
                    </motion.p>
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <motion.div initial={{ width: '60px', height: '60px' }} animate={{ width: '80px', height: '80px', backgroundColor: '#de1b48', borderStyle: 'solid' }} transition={{ delay: getPhaseDelay(3), duration: 2, type: 'spring', bounce: .8 }} style={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderColor: 'grey', borderWidth: '2px' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: getPhaseDelay(3), duration: PHASE_ANIMATION_DURATION }} src={LetsTalk} style={{ width: '60px' }} />
                        </motion.div>
                    </div >
                </div>
                <div style={{ width: '50%', height: '100%', position: 'relative' }}>
                    <motion.div initial={{ height: '100%' }} animate={{ height: 0 }} transition={{ delay: getPhaseDelay(4), duration: PHASE_ANIMATION_DURATION }} style={{ position: 'absolute', top: 0, overflow: 'hidden' }}>
                        <img src={HeadShot} style={{ borderRadius: '50%', width: '100%', }} />

                    </motion.div>

                    <motion.div initial={{ height: 0 }} animate={{ height: '100%' }} transition={{ delay: getPhaseDelay(4), duration: PHASE_ANIMATION_DURATION }} style={{ position: 'absolute', bottom: 0, overflow: 'hidden', width: '100%' }}>
                        <div style={{ width: '100%', height: '50%', backgroundColor: '#de1b48', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            sfssdf
                        </div>
                    </motion.div>
                </div>
            </div>

        </>
    )

}

export default LandingSection