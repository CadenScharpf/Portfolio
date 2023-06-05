import { MotionStyle } from "framer-motion";
import { LayoutContext } from "../Context";
import React from "react";

export const TRANSITION_DURATION = 2 //!< The duration of the content window expansion animation

export const PAGE_STYLE: React.CSSProperties = {
    position: 'absolute',
    top: 0, //LayoutContext.navHeight,
    /* paddingTop: `${LayoutContext.navHeight}vh`, */
    bottom: 0, 
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    height: `${(100) - LayoutContext.navHeight}vh`,
}

