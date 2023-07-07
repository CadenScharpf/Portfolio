import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ContentWindow } from "../../Components/ContentWindow";
import { Technologies, Experience, Education } from "./Components";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, IconButton, SxProps, useTheme } from "@mui/material";
import { STATUS_CODES } from "http";
import { wrap } from "@popmotion/popcorn";

const Layout = {
  navButtonHeight: 40,
}

interface section {
  name: string;
  content: React.ReactNode;
}

const SECTIONS: section[] = [
  {name: "Technologies", content: <Technologies  showTitle/>},
  {name: "Experience", content: <Experience  showTitle/>},
  {name: "Education", content: <Education  showTitle/>},

]



const sectionVariants = {
  incoming: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { y: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};
const sliderTransition = {
  duration: 1,
  /* ease: [0.56, 0.03, 0.12, 1.04], */
};

export function Resume() {
  const theme = useTheme();
  const [[itemCount, direction], setItemCount] = useState([0, 1]);
  const activeItemIndex = wrap(0, Object.keys(SECTIONS).length, itemCount);

  const swipeToItem = (swipeDirection: number) => {
    setItemCount([itemCount + swipeDirection, swipeDirection]);
  };

  const STYLES: Record<string, SxProps  > = {
    navButton: {
      color: theme.palette.text.primary,
      fontSize: "1rem",
      flexDirection: "column",
      borderRadius: "5px",
      position: "absolute",
      left: 0,
      right: 0,
      marginLeft: "auto",
      marginRight: "auto",
      width: "120px" /* Need a specific value to work */,
      height: "40px",
      zIndex: 5,
      fontWeight: "bold",
      p:0
    },
    resume: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      overflow: "hidden",
      background: theme.palette.background.paper,
    },
    section: {
      position: "absolute",
      top: `${Layout.navButtonHeight}px`,
      width: "100%",
      height: `calc(100% - ${2*Layout.navButtonHeight}px)`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "scroll",

    },
  };

  return (
    <Box className="resume" sx={{ ...STYLES.resume }}>
      <IconButton
        sx={{
          ...STYLES.navButton,
          top: 0,
          display: activeItemIndex > 0 ? "flex" : "none",
        }}
        onClick={() => swipeToItem(-1)}
      >
        <ExpandLessIcon />
        {activeItemIndex > 0 ? SECTIONS[activeItemIndex - 1].name: ""}
      </IconButton>
      <AnimatePresence initial={false}>
        <Box
          component={motion.div}
          variants={sectionVariants}
          custom={direction}
          initial="incoming"
          animate="active"
          exit="exit"
          transition={sliderTransition}
          key={"resumeSection" + activeItemIndex}
          className="sectionMotionWrapper"
          sx={{ ...STYLES.section }}
        >
          {SECTIONS[activeItemIndex].content}
        </Box>
      </AnimatePresence>

      <IconButton
        sx={{
          ...STYLES.navButton,
          bottom: 0,
          p: 0,
          display:
             activeItemIndex < SECTIONS.length - 1
              ? "flex"
              : "none",
        }}
        onClick={() => swipeToItem(1)}
      >
        {activeItemIndex < SECTIONS.length-1?  SECTIONS[activeItemIndex + 1].name : ""}
        <ExpandMoreIcon sx={{p:0}} />
      </IconButton>
    </Box>
  );
}
