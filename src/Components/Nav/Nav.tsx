import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { PAGES } from "../../Pages";
import "./switch.scss";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import {
  AppBar,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import Logo from "../SVGComponents/Logo";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutContext } from "../../Components/AnimatedRoutes/AnimatedRoutes";
import { COLORS } from "../../colors";

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
      flexDirection: "row",
      padding: "0",
      height: LayoutContextProvider.navHeight,
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      paddingBottom: "0vh",
      background: "transparent",
      color: "white",
      justifyContent: "space-between"
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
    <AppBar className="nav" sx={{...styles.nav, boxShadow: 'none'}}>
      <Box
        sx={{
          height: "100%",
          left: 0,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          
        }}
      >
        <Logo fill={theme.palette.primary.main} height="50px" />
        <Box
          className="container"
          sx={{
            justifyContent: LayoutContextProvider.isDarkMode
              ? "flex-end"
              : "flex-start",
            height: "33px",
            width: "60px",
            mx: 3,
            backgroundImage: LayoutContextProvider.isDarkMode
              ? `linear-gradient(109.8deg, ${COLORS.dracula.cyan.main} -5.2%, ${COLORS.dracula.purple.main} -5.2%, ${COLORS.dracula.red.main} 103.3%)`
              : `radial-gradient(circle farthest-corner at 10% 20%, ${COLORS.dracula.yellow.main} 0%, ${COLORS.dracula.red.main} 100.2%)`,

            borderRadius: "25px",
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "0 5px",
            cursor: "pointer",
            border: `1.5px solid ${theme.palette.primary.main}`,
            transition: "all 0.3s",
          }}
          data-darkmode={LayoutContextProvider.isDarkMode}
          onClick={() => props.setIsDarkMode(!LayoutContextProvider.isDarkMode)}
        >
          <Box
            component={motion.div}
            layout
            sx={{
              height: "80%",
              aspectRatio: "1/1",
              borderRadius: "50%",
              display: "grid",
              alignItems: "center",
              justifyItems: "center",
              background: "white",
              overflow: "hidden",
              p: 0,
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
                  color: LayoutContextProvider.isDarkMode
                    ? "#501a96"
                    : "#f88748",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {LayoutContextProvider.isDarkMode ? (
                  <DarkModeIcon />
                ) : (
                  <LightModeIcon sx={{ width: "90%" }} />
                )}
              </Box>
            </AnimatePresence>
          </Box>
        </Box>
      </Box>

      <div >
        {PAGES.map((page) => {
          return (
            <Button
              sx={{ ...styles.navItem }}
              onClick={() => {
                props.setPage(page.id);
              }}
            >
              <Typography
                variant={props.activePageIndex == page.id ? "h5" : "h5"}
                sx={{
                  fontWeight: props.activePageIndex == page.id ? "bold" : "",

                  color:
                    props.activePageIndex == page.id
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                }}
              >
                {page.title}
              </Typography>
            </Button>
          );
        })}
      </div>
    </AppBar>
  );
}
