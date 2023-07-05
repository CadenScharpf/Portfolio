import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { PAGES } from "../../Pages";
import "./switch.scss";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import {
  AppBar,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import Logo from '../Logo/Logo'
import { AnimatePresence, motion } from "framer-motion";
import { LayoutContext } from "../../Components/AnimatedRoutes/AnimatedRoutes";

interface iNavProps {
  activePageIndex: number;
  setPage: (pageId: number) => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export function Nav(props: iNavProps) {
  const theme = useTheme();
  const LayoutContextProvider = useContext(LayoutContext);

  const styles: Record<string, React.CSSProperties> = {
    nav: {
      display: "flex",
      justifyContent: "left",
      alignItems: "right",
      padding: "0",
      height: LayoutContextProvider.navHeight,
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      paddingBottom: "0vh",
      background: "transparent",
      color: 'white'
    },

    navItem: {
      textDecoration: "none",
      color: theme.palette.text.primary,
      fontWeight: "600",
      fontSize: "1.2rem",
      padding: "1em",
    },
  };

  return (
    <AppBar className="nav" sx={styles.nav}>
      <Box sx={{  height: '100%', position: 'absolute', left: 0,display: 'flex', alignItems: 'center'  }}>
        <Logo fill="red"  height="50px"  />
        <Box
            className="container"
            sx={{
              justifyContent: LayoutContextProvider.isDarkMode ? "flex-end" : "flex-start",
              height: "40px",
              width: "100px",
              mx: 3,
              backgroundImage:
              LayoutContextProvider.isDarkMode ?
              "linear-gradient(109.8deg, rgba(62,5,116,1) -5.2%, rgba(41,14,151,1) -5.2%, rgba(216,68,148,1) 103.3%)":
                "radial-gradient(circle farthest-corner at 10% 20%, rgba(253,203,50,1) 0%, rgba(244,56,98,1) 100.2%)", 

              borderRadius: "25px",
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
              padding: "0 5px",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            data-darkmode={LayoutContextProvider.isDarkMode}
            onClick={() => props.setIsDarkMode(!LayoutContextProvider.isDarkMode)}
          >
            <Box
              component={motion.div}
              layout
              className="handle"
              sx={{
                height: "30px",
                width: '30px',
                borderRadius: "50%",
                display: "grid",
                alignItems: "center",
                justifyItems: "center",
                background: "white",
                overflow: "hidden",
              }}
            >
              <AnimatePresence initial={false}>
                <Box 
                  component={motion.div}
                  className={`icon`}
                  key={LayoutContextProvider.isDarkMode ? "moon" : "sun"}
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    color: LayoutContextProvider.isDarkMode? '#501a96': '#f88748' ,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {LayoutContextProvider.isDarkMode ? (<DarkModeIcon/>) : (<LightModeIcon sx={{width: 27}}/>)}
                </Box>
              </AnimatePresence>
            </Box>
          </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: { xs: "center", md: "right" },
          height: "100%",
          color: "black",
          alignItems: "center",
          background: LayoutContextProvider.isDarkMode ? "#282a36" : "white",
        }}
      >
          
        <Stack direction="row" sx={{ px: 5 }}>
          {PAGES.map((page) => {
            return (
              <Button
                sx={{ ...styles.navItem }}
                onClick={() => {
                  props.setPage(page.id);
                }}
              >
                <Typography
                  sx={{
                    fontWeight: props.activePageIndex == page.id ? "bold" : "",
                    color: LayoutContextProvider.isDarkMode? "#50fa7b": "black",
                  }}
                >
                  {page.title}
                </Typography>
              </Button>
            );
          })}
        </Stack>
      </Box>
    </AppBar>
  );
}
