import { PAGES } from "../../Pages";
import { AnimatePresence, motion, PanInfo, Variants } from "framer-motion";
import React, { createContext, useState } from "react";
import {
  Box,
  createTheme,
  keyframes,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { wrap } from "@popmotion/popcorn";
import { Nav } from "../Nav";
import { COLORS } from "../../colors";
import { LockPerson } from "@mui/icons-material";

const GRADIENT_COLOR_1 = "blue";
const GRADIENT_COLOR_2 = "red";
const BORDER_COLOR = `linear-gradient(white, white) padding-box, linear-gradient(to right, black, black) border-box`;
const BORDER_COLOR_GRAD = `linear-gradient(white, white) padding-box, linear-gradient(to right, ${GRADIENT_COLOR_1}, ${GRADIENT_COLOR_2}) border-box`;

const sliderVariants: Variants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0,
  }),
};

const sliderTransition = {
  duration: 1,
};

const defaultLayoutParams = {
  isDarkMode: false,
  navHeight: 64,
};

export const LayoutContext = createContext({
  isDarkMode: false,
  navHeight: 64,
});

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      text: {
        primary: '#f8f8f2',
        secondary:'#94a3b8',
      },
      background: {
        default: COLORS.dracula.background.main,
        paper: COLORS.dracula.foreground.main,
      },
      primary: {
        main: COLORS.dracula.green.main,
      },
      secondary: {
        main: COLORS.dracula.orange.main,

      },
      info: {
        main: COLORS.dracula.cyan.main,
      },

      
    },
  })
);
const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      text: {
        primary: "#000",
        secondary: "#94a3b8",
      },
      background: {
        default: "#fff",
        paper: "#f7f7f8",
      },
    },
    
  })
);

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export function AnimatedRoutes() {
  const [[itemCount, direction], setItemCount] = useState<[number, number]>([
    0, 1,
  ]);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const activeItemIndex = wrap(0, PAGES.length, itemCount);

  const swipeToItem = (swipeDirection: number) => {
    setItemCount([itemCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToItem(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToItem(1);
    }
  };

  const skipToItem = (imageId: number) => {
    setItemCount([imageId, imageId > activeItemIndex ? 1 : -1]);
  };

  return (
    <LayoutContext.Provider
      value={{
        isDarkMode: isDarkMode,
        navHeight: defaultLayoutParams.navHeight,
      }}
    >
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            height: "100vh",
            width: "100vw",
            background: isDarkMode ? "#282a36" : "white",
          }}
        >
          <AnimatePresence initial={true}>
            <Nav
              setIsDarkMode={setIsDarkMode}
              activePageIndex={activeItemIndex}
              setPage={skipToItem}
            />

            <Box
              component={motion.div}
              key={activeItemIndex}
              variants={sliderVariants}
              custom={direction}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                padding: "1rem",
                alignItems: "center",
                margin: "1rem",
                position: "absolute",
                top: defaultLayoutParams.navHeight,
                bottom: 0,
                width: "100%",
                m: 0,
                px: 0,
              }}
            >
              <Box
                className="gradient-border"
                sx={{
                  backgroundImage:
                    isDarkMode? 
                    `linear-gradient(45deg, ${COLORS.dracula.cyan.main}, ${COLORS.dracula.pink.main}, ${COLORS.dracula.yellow.main}, ${COLORS.dracula.green.main}, ${COLORS.dracula.red.main}, ${COLORS.dracula.pink.main}, ${COLORS.dracula.yellow.main}, ${COLORS.dracula.purple.main})` :
                    `linear-gradient(45deg, #000 , #000)`,
                  backgroundSize: "400% 400%",
                  animation: `${gradientAnimation} 10s ease infinite`,
                  width: "90%",
                  maxWidth: "1700px",
                  height: "95%",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "25px",
                  boxShadow: "0px 0px 5px 0px black",
                }}
              >
                <Box
                  id="content-window"
                  sx={{
                    width: "100%",
                     border: "4px solid transparent",
                     borderRadius: "25px",
                  /*borderWidth: "5px",
                  background: BORDER_COLOR, 
                  boxShadow: "0px 0px 5px 0px black",*/

                    overflow: "scroll",

                  }}
                >
                  {React.createElement(PAGES[activeItemIndex].component)}
                </Box>
              </Box>
            </Box>
          </AnimatePresence>
        </Box>
      </ThemeProvider>
    </LayoutContext.Provider>
  );
}
