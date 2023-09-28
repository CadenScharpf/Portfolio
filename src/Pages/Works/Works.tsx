import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BackendApps, Section, WebApplications, Work } from "./Components";
import { Box, Button, Grid, useTheme } from "@mui/material";

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: "inline-flex",
    position: "relative",
    top: "0",
    width: "100%",
    justifyContent: "center",
    /* backgroundColor: 'rgba(51, 170, 51, .4)', */
    marginBottom: "1rem",
  },
  navItem: {
/*     zIndex: 9999999,
 */    padding: "1vh 1vh 1vh 1vh",
    textDecoration: "none",
    color: "#000",
    fontWeight: "600",
    fontSize: "1.2rem",
  },
};

const SECTIONS = {
  web: WebApplications,
  backend: BackendApps,
};

export function Works() {
  const [category, setCategory] = React.useState<keyof typeof SECTIONS>("web");
  const theme = useTheme();
  useEffect(() => {});
  return (
    <Box sx={{
      background: theme.palette.background.paper,
      position: "relative",
      width: "100%",
      height: "100%",
      
      overflow: "scroll",
      }}>
      <div style={styles.nav}>
        <Button
          variant="text"
          style={{
            ...styles.navItem,
            fontWeight: category === "web" ? "bold" : "",
            color: category === "web"? theme.palette.primary.main : theme.palette.text.primary,
          }}
          onClick={() => {
            setCategory("web");
          }}
        >
          Front End
        </Button>
        <Button
          variant="text"
          style={{
            ...styles.navItem,
            fontWeight: category === "backend" ? "bold" : "",
            color: category === "backend"? theme.palette.primary.main : theme.palette.text.primary,
          }}
          onClick={() => {
            setCategory("backend");
          }}
        >
          Back End
        </Button>
      </div>
      <AnimatePresence>

        <Grid container spacing={3} sx={{ px: 2 }}>
          {React.createElement(SECTIONS[category])}
        </Grid>
      </AnimatePresence>
    </Box>
  );
}
