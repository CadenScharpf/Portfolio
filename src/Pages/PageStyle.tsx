import { MotionStyle } from "framer-motion";
import { LayoutContext } from "../Context";

export const TRANSITION_DURATION = 1

export const PAGE_STYLE: MotionStyle = {
    position: 'absolute',
    top: 0, //LayoutContext.navHeight,
    paddingTop: `${LayoutContext.navHeight}vh`,
    bottom: 0, 
    left: 0,
    right: 0,
    height: `${200-LayoutContext.navHeight}vh`,

    display: 'flex',
    flexDirection: 'column',
    zIndex: -1,
    alignItems: 'center',
}

export const VARIANTS = {
    open: {
         y: "100%",
         transition: { duration: TRANSITION_DURATION, ease: 'easeOut' }
},
    closed: { 
        y: "0%",
        transition: { duration: TRANSITION_DURATION, ease: 'easeOut' }
     },
    exit: { 
        opacity: 1,
        transition: { duration: TRANSITION_DURATION, ease: 'easeOut' }
    },
}
