import { MotionStyle } from "framer-motion";
import { LayoutContext } from "../Context";

export const PAGE_STYLE: MotionStyle = {
    position: 'absolute',
    top: 0, //LayoutContext.navHeight,
    paddingTop: LayoutContext.navHeight,
    bottom: 0, 
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    zIndex: -1,
}
