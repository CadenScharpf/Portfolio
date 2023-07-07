import React, { useContext } from "react";
import { AnimatePresence, MotionStyle, motion } from "framer-motion";
import { TRANSITION_DURATION } from "../PageStyle";
import { useTheme, IconButton, Box, SxProps, Button, Link, Grid } from "@mui/material";
import {} from "framer-motion";
import HeadShot from "./hs.png";
import { Container, Typography } from "@mui/material";
import { ContentWindow } from "../../Components/ContentWindow";
import { Carousel } from "./Components";
import { ITEMS } from "./CarouselItems";
import { Image } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { LayoutContext } from "../../Components/AnimatedRoutes/AnimatedRoutes";
import LetsTalk from "../../Components/SVGComponents/LetsTalk";

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
    position: "absolute",
    top: 0,
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    background: "rgba(255, 255, 255, 0.5)",
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
    backgroundColor: "#ff5555",
    borderStyle: "solid",
  },
  hover: {
    opacity: 0,
  },
};

const column1MotionVariants = {
  initial: { height: '100%', opacity: 0, transition: { duration: .75 } },
  animate: { height: "100%", opacity: 1, transition: { duration: .75 } },
  exit: {
    height: '100%', opacity: 0,
    transition: { duration: .75 },
  },
};

export function Home() {
  const theme = useTheme();
  const LCP = useContext(LayoutContext);
    const [contactPageState, setContactPageState] = React.useState(false);

  const toggleContactPageState = () => {
    setContactPageState(!contactPageState);
  };

  const getPhaseDelay = (phase: number): number => {
    return phase * PHASE_DURATION + TRANSITION_DURATION;
  };

  return (
    <Box id="container" sx={{...STYLES.container, background: theme.palette.background.paper}}>
      <Box id="column1" sx={{ ...STYLES.column,  }}>
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
              sx={{ ...STYLES.cardFlipMotionWrapper,  }}
              onClick={() => {
                setContactPageState(false);
              }}
            >
              <Box
                sx={{
                  width: "90%",
                  maxWidth: "500px",
                  height: "50%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "#44475a",
                  borderRadius: "10px",
                  position: "relative",
                  overflow: "hidden",
                  color: "#fff",
                  border: "3px solid black",
                }}
              >
                <Button
                  onClick={() => {
                    setContactPageState(false);
                  }}
                  sx={{ position: "absolute", top: "0", right: "0" }}
                >
                  close
                </Button>

                <Typography variant="h3" sx={{ marginTop: '3rem', marginBottom: '2rem',}}>
                  Let's Talk
                </Typography>


                  <Box sx={{display: 'flex'}}>
                    <EmailIcon sx={{paddingRight: 3}} />
                    <Typography variant="body1" sx={{  }}>
                      <Link href="mailto:Caden.Scharpf@icloud.com">Caden.Scharpf@icloud.com</Link>
                    </Typography>
                  </Box>
                  <Box sx={{display: 'flex', }}>
                    <ContactPhoneIcon sx={{paddingRight: 3}} />
                    <Typography variant="body1" sx={{  }}>
                      <Link href="tel:480-326-4178">+1 (480) 326-4178</Link>
                    </Typography>
                  </Box>


              </Box>
            </Box>
          ) : (
            <></>
          )}
        </AnimatePresence>
        <Box id="column1MainContent" sx={{ p: 3 }}>
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
            sx={{...STYLES.headshotSm, border: `3px solid ${theme.palette.primary.main}`}}
          />
          <Box
            id="titleMotionWrapper"
            component={motion.div}
            sx={{ margin: 0, padding: 0, color: theme.palette.text.primary /* LCP.isDarkMode? "#50fa7b":"#000"  */}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: getPhaseDelay(0),
              duration: PHASE_ANIMATION_DURATION,
            }}
          >
            <Typography id="title" variant="h1" >
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
            <Typography id="subtitle" variant="h2" sx={{color: theme.palette.text.secondary}}>
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
            <Typography id="description" variant="body1" sx={{color: LCP.isDarkMode? "#f8f8f2" : "black"}}>
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
              sx={{...STYLES.letsTalkMotionWrapper, }}
            >
              <IconButton
                onClick={() => {
                  setContactPageState(true);
                }}
              >
                <motion.div
                  variants={letsTalkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover=""
                  transition={{
                    delay: getPhaseDelay(3),
                    duration: PHASE_ANIMATION_DURATION,
                  }}
                  style={{ width: "60px" }}
                >

                  <LetsTalk fill={theme.palette.primary.main}  height="50px"/>
                </motion.div>
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
            sx={{...STYLES.headshotLg, border: `3px solid ${theme.palette.primary.main}`}}
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
          <Carousel data={ITEMS} style={{ width: "100%", height: "80%" }} />
        </Box>
      </Box>
    </Box>
  );
}
