import React from "react";
import { AnimatePresence, MotionStyle, motion } from "framer-motion";
import { TRANSITION_DURATION } from "../PageStyle";
import { useTheme, IconButton, Box, SxProps, Button } from "@mui/material";
import {} from "framer-motion";
import LetsTalk from "./letsTalk.png";
import HeadShot from "./hs.png";
import { Container, Typography } from "@mui/material";
import { ContentWindow } from "../../Components/ContentWindow";
import { Carousel } from "./Components";
import { ITEMS } from "./CarouselItems";
import { Image } from "@mui/icons-material";

const PHASE_DURATION = 1.5; //!< time between triggerings of each phase
const PHASE_ANIMATION_DURATION = 1; //!< time it takes for each phase to animate
const CARD_FLIP_DURATION = 2;

const STYLES: Record<string, SxProps> = {
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    marginTop: "0%",
    textAlign: "left",
  },
  column: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    /*     overflow: "hidden", */
    overflow: "scroll",
    width: { xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" },
  },

  // Column 1 (left) ----------------------------------------------
  headshotSm: {
    m: 0,
    borderRadius: "50%",
    border: "1px solid red",
    marginLeft: "10%",
  },
  titleMotionWrapper: { margin: 0, padding: 0, color: "#000" },
  subtitleMotionWrapper: { padding: 0, margin: 0, color: "#000" },
  descriptionMotionWrapper: { width: "80%", color: "#000", textAlign: "left" },
  letsTalkRowContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: {
      xs: "flex",
      sm: "flex",
      md: "flex",
      lg: "flex",
      xl: "flex",
    },
  },
  letsTalkMotionWrapper: {
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "transparent",
    borderWidth: "2px",
  },

  // Column 2 (right) ----------------------------------------------
  cardFlipMotionWrapper: {
    p: 3,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 99,
  },

  //Scene 1
  headshotLgMotionWrapper: {
    position: "relative",
    top: 0,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headshotLg: {
    borderRadius: "50%",
    width: "100%",
    maxWidth: "400px",
    border: "2px solid red",
  },
  //Scene 2
  slideShowMotionWrapper: {
    position: "relative",
    bottom: 0,
    overflow: "hidden",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#282a36",
  },
};

const letsTalkVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  hover: { opacity: 0 },
};

const column1Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  hover: { opacity: 0 },
};

const letsTalkMotionWrapperVariants = {
  initial: {
    width: "60px",
    height: "60px",
  },
  animate: {
    width: "80px",
    height: "80px",
    backgroundColor: "#de1b48",
    borderStyle: "solid",
  },
  hover: {
    opacity: 0,
  },
};

const column1MotionVariants = {
  initial: { height: 0,  transition: { duration: 1.5,  }
},
  animate: { height: "100%",    transition: { duration: 1.5,  }
},
  exit: {
    height: 0,
    transition: { duration: 1.5,  },
  },
};

export function Home() {
  const theme = useTheme();
  const [contactPageState, setContactPageState] = React.useState(false);

  const toggleContactPageState = () => {
    setContactPageState(!contactPageState);
  };

  const getPhaseDelay = (phase: number): number => {
    return phase * PHASE_DURATION + TRANSITION_DURATION;
  };
  return (
    <Box id="container" sx={STYLES.container}>
      <Box component={motion.div} id="column1" sx={{ ...STYLES.column }}>
        <AnimatePresence mode="wait">
          {contactPageState ? (
            <Box
              component={motion.div}
              id="home-contact"
              key="contact"
              variants={column1MotionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              sx={{ ...STYLES.cardFlipMotionWrapper, backgroundColor: "#000" }}
            >
              <Button
                onClick={() => {
                  setContactPageState(false);
                }}
              >
                close
              </Button>
            </Box>
          ) : (<></>)}
          </AnimatePresence>
            <Box
              id="column1MainContent"
              sx={{ p:3 }}
            >
              <Box
                id="headshotSm"
                component={motion.img}
                initial={{ display: "none", opacity: 0, width: "0" }}
                animate={{ display: "", opacity: 1, width: "25%" }}
                transition={{
                  delay: getPhaseDelay(4),
                  duration: PHASE_ANIMATION_DURATION,
                }}
                src={HeadShot}
                sx={STYLES.headshotSm}
              />
              <Box
                id="titleMotionWrapper"
                component={motion.div}
                style={{ margin: 0, padding: 0, color: "#000" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: getPhaseDelay(0),
                  duration: PHASE_ANIMATION_DURATION,
                }}
              >
                <Typography id="title" variant="h1">
                  Caden
                  <br />
                  Scharpf
                </Typography>
              </Box>
              <Box
                component={motion.div}
                id="subtitleMotionWrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: getPhaseDelay(1),
                  duration: PHASE_ANIMATION_DURATION,
                }}
                sx={STYLES.subtitleMotionWrapper}
              >
                <Typography id="subtitle" variant="h2">
                  Software Engineer
                </Typography>
              </Box>
              <Box
                id="descriptionMotionWrapper"
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: getPhaseDelay(2),
                  duration: PHASE_ANIMATION_DURATION,
                }}
                sx={STYLES.descriptionMotionWrapper}
              >
                <Typography id="description" variant="body1">
                  Software Engineer with 2+ years of professional full stack
                  development and a solid foundation in building scalable
                  applications.
                </Typography>
              </Box>
              <Box id="letsTalkRowContainer" sx={STYLES.letsTalkRowContainer}>
                <Box
                  id="letsTalkMotionWrapper"
                  component={motion.div}
                  variants={letsTalkMotionWrapperVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    delay: getPhaseDelay(3),
                    duration: 2,
                    type: "spring",
                    bounce: 0.8,
                  }}
                  sx={STYLES.letsTalkMotionWrapper}
                >
                  <IconButton
                    onClick={() => {
                      setContactPageState(true);
                    }}
                  >
                    <motion.img
                      variants={letsTalkVariants}
                      initial="initial"
                      animate="animate"
                      whileHover=""
                      transition={{
                        delay: getPhaseDelay(3),
                        duration: PHASE_ANIMATION_DURATION,
                      }}
                      src={LetsTalk}
                      style={{ width: "60px" }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
        
      </Box>
      <Box
        id="column2"
        sx={{
          ...STYLES.column,
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
      >
        <Box
          component={motion.div}
          initial={{ height: "100%" }}
          animate={{ height: "0px" }}
          transition={{
            delay: getPhaseDelay(4),
            duration: PHASE_ANIMATION_DURATION,
          }}
          sx={STYLES.headshotLgMotionWrapper}
        >
          <Box
            component={motion.img}
            alt="Headshot Photo"
            src={HeadShot}
            sx={STYLES.headshotLg}
          />
        </Box>
        <Box
          component={motion.div}
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{
            delay: getPhaseDelay(4),
            duration: PHASE_ANIMATION_DURATION,
          }}
          sx={{ ...STYLES.slideShowMotionWrapper }}
        >
          <Carousel data={ITEMS} style={{ width: "90%", height: "80%" }} />
        </Box>
      </Box>
    </Box>
  );
}
