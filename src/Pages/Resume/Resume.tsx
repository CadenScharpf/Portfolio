import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ContentWindow } from "../../Components/ContentWindow";
import { Technologies, Experience, Education } from "./Components";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, IconButton, useTheme } from "@mui/material";
import { STATUS_CODES } from "http";
import { wrap } from "@popmotion/popcorn";

const SECTIONS: Record<string, React.ReactNode> = {
  Education: <Education addVerticalMargin />,
  Technologies: <Technologies addVerticalMargin />,
  Experience: <Experience addVerticalMargin />,
};

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
  const [section, setSection] = React.useState("Education");
  const [[itemCount, direction], setItemCount] = useState([2, 1]);
  const activeItemIndex = wrap(0, Object.keys(SECTIONS).length, itemCount);

  const swipeToItem = (swipeDirection: number) => {
    setItemCount([itemCount + swipeDirection, swipeDirection]);
  };

  const STYLES: Record<string, React.CSSProperties> = {
    navButton: {
      color: "black",
      fontSize: "1rem",
      flexDirection: "column",
      borderRadius: "5px",
      position: "absolute",
      left: 0,
      right: 0,
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "3px",
      paddingRight: "3px",
      width: "120px" /* Need a specific value to work */,
      zIndex: 5,
      background: theme.palette.primary.main,
      border: "2.5px solid black",
      fontWeight: "bold",
    },
    resume: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: theme.palette.background.paper,
    },
    section: {
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
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
          top: 3,
          paddingTop: 0,
          display: activeItemIndex > 0 ? "flex" : "none",
        }}
        onClick={() => swipeToItem(-1)}
      >
        <ExpandLessIcon />
        {Object.keys(SECTIONS)[activeItemIndex - 1]}
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
          {SECTIONS[Object.keys(SECTIONS)[activeItemIndex]]}
        </Box>
      </AnimatePresence>

      <IconButton
        sx={{
          ...STYLES.navButton,
          bottom: 3,
          paddingBottom: 0,
          display:
            activeItemIndex < Object.keys(SECTIONS).length - 1
              ? "flex"
              : "none",
        }}
        onClick={() => swipeToItem(1)}
      >
        {Object.keys(SECTIONS)[activeItemIndex + 1]}
        <ExpandMoreIcon />
      </IconButton>
    </Box>
  );
}
