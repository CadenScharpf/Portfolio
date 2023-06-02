import { MotionStyle } from "framer-motion";
import { LayoutContext } from "../Context";

export const TRANSITION_DURATION = 1 //!< The duration of the page transition animation
export const CONTENT_WINDOW_ANIMATION_DURATION = 1 //!< The duration of the content window expansion animation

export const PAGE_STYLE: MotionStyle = {
    position: 'absolute',
    top: 0, //LayoutContext.navHeight,
    paddingTop: `${LayoutContext.navHeight}vh`,
    bottom: 0, 
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    zIndex: -1,
    alignItems: 'center',
    height: `${(100) - LayoutContext.navHeight}vh`
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
