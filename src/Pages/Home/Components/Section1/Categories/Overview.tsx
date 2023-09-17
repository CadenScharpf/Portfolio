import React, { useContext } from "react";
import { LayoutContext } from "../../../../../Components/AnimatedRoutes/AnimatedRoutes";
import officeImageLrg from "../assets/pexels-burst-374147.jpg";
import {
  Box,
  Button,
  IconButton,
  Link,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import LetsTalk from "../../../../../Components/SVGComponents/LetsTalk";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HeadShot from "../../..//hs.png";
import { COLORS } from "../../../../../colors";

const PHASE_DURATION = 1.5; //!< time between triggerings of each phase
const PHASE_ANIMATION_DURATION = 1; //!< time it takes for each phase to animate
const CARD_FLIP_DURATION = 2;

function Overview() {
  const lcp = useContext(LayoutContext);
  const theme = useTheme();
  const [contactPageState, setContactPageState] = React.useState(false);

  const toggleContactPageState = () => {
    setContactPageState(!contactPageState);
  };

  const getPhaseDelay = (phase: number): number => {
    return phase * PHASE_DURATION + 1;
  };

  const STYLES: Record<string, SxProps> = {
    imgLarge: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      backgroundImage: `url(${officeImageLrg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "cen",
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
    },
    titleMotionWrapper: { margin: 0, padding: 0, color: "#000" },
    subtitleMotionWrapper: { padding: 0, margin: 0, color: "#000" },
    descriptionMotionWrapper: {
      width: "100%",
      color: "#000",
      display: "flex",
      justifyContent: "center",
    },
    letsTalkRowContainer: {
      width: "100%",
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

      borderWidth: "8px",
    },
  };

  const column1MotionVariants = {
    initial: { height: "100%", opacity: 0, transition: { duration: 0.75 } },
    animate: { height: "100%", opacity: 1, transition: { duration: 0.75 } },
    exit: {
      height: "100%",
      opacity: 0,
      transition: { duration: 0.75 },
    },
  };

  const letsTalkMotionWrapperVariants = {
    initial: {
      width: "0px",
      height: "0px",
    },
    animate: {
      width: "50px",
      height: "50px",
      /*     backgroundColor: "#ff5555",
       */ borderStyle: "solid",
    },
    hover: {
      opacity: 0,
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        textShadow: '#000 1px 0 2px',
      }}
    >
        {contactPageState ? (
          <Box
            component={motion.div}
            id="home-contact-modal"
            key="contact"
            variants={column1MotionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 99,
              background: "rgba(255, 255, 255, 0.5)",
            }}
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

              <Typography
                variant="h3"
                sx={{ marginTop: "3rem", marginBottom: "2rem" }}
              >
                Let's Talk
              </Typography>

              <Box sx={{ display: "flex" }}>
                <EmailIcon sx={{ paddingRight: 3 }} />
                <Typography variant="body1" sx={{}}>
                  <Link href="mailto:Caden.Scharpf@icloud.com">
                    Caden.Scharpf@icloud.com
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <ContactPhoneIcon sx={{ paddingRight: 3 }} />
                <Typography variant="body1" sx={{}}>
                  <Link href="tel:480-326-4178">+1 (480) 326-4178</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      <Box id="column1MainContent" sx={{width:{xs: '100%', md: '50%'}, height: '100%', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center' }}>
        <Box
          id="headshotSm"
          component={motion.img}
          initial={{ display: "none", opacity: 0, width: "0" }}
          animate={{ display: "", opacity: 1, width: "15%" }}
          transition={{
            delay: getPhaseDelay(4),
            duration: PHASE_ANIMATION_DURATION,
          }}
          src={HeadShot}
          sx={{
            ...STYLES.headshotSm,
            border: `3px solid ${theme.palette.primary.main}`,
          }}
        />
        <Box
          id="titleMotionWrapper"
          component={motion.div}
          sx={{
            margin: 0,
            padding: 0,
            color: "white" /* LCP.isDarkMode? "#50fa7b":"#000"  */,
          }}
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
          <Typography id="subtitle" variant="h2" sx={{ color: "white" }}>
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
          <Typography
            id="description"
            variant="body1"
            sx={{
              color: 'white',
              maxWidth: "500px",
              fontSize: "1.5rem",
              display: {xs: "none", md: 'block'}
            }}
          >
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
            sx={{
              ...STYLES.letsTalkMotionWrapper,
              position: "relative",
              overflow: "hidden",
              borderColor: theme.palette.primary.light,
            }}
          >
            <IconButton
              onClick={() => {
                setContactPageState(true);
              }}
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                p: 0,
                m: 0,
              }}
            >
              <LetsTalk fill={theme.palette.primary.dark} width="100%" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Overview;
