import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ContentWindow } from "../../Components/ContentWindow";
import { Technologies, Experience, Education } from "./Components";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, IconButton } from "@mui/material";

const SECTIONS: Record<string, React.ReactNode> = {
  Experience: <Experience />,
  Technologies: <Technologies />,
  Education: <Education />,
};

export function Resume() {
  const [section, setSection] = React.useState("Experience");
  let sections = 3;

  const STYLES: Record<string, React.CSSProperties> = {
    navButton: {
      color: "black",
      fontSize: "1rem",
      flexDirection: "column",
      borderRadius: "25px",
      padding: ".7rem",
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "10%",
          display: Object.keys(SECTIONS).indexOf(section) > 0 ? "flex" : "none",
          justifyContent: "center",
        }}
      >
        <IconButton
          style={{
            ...STYLES.navButton,
            display:
              Object.keys(SECTIONS).indexOf(section) > 0 ? "flex" : "none",
          }}
          onClick={() =>
            setSection(
              Object.keys(SECTIONS)[Object.keys(SECTIONS).indexOf(section) - 1]
            )
          }
        >
          <ExpandLessIcon />
          {Object.keys(SECTIONS)[Object.keys(SECTIONS).indexOf(section) - 1]}
        </IconButton>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          width: "100%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "scroll",
        }}
      >
        {SECTIONS[section]}
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "10%",
          display:
            Object.keys(SECTIONS).indexOf(section) < sections - 1
              ? "flex"
              : "none",
          justifyContent: "center",
        }}
      >
        <IconButton
          style={{
            ...STYLES.navButton,
            bottom: 0,
            display:
              Object.keys(SECTIONS).indexOf(section) < sections - 1
                ? "flex"
                : "none",
          }}
          onClick={() =>
            setSection(
              Object.keys(SECTIONS)[Object.keys(SECTIONS).indexOf(section) + 1]
            )
          }
        >
          {Object.keys(SECTIONS)[Object.keys(SECTIONS).indexOf(section) + 1]}
          <ExpandMoreIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
