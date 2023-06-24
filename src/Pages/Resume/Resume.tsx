import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ContentWindow } from "../../Components/ContentWindow";
import { Technologies, Experience, Education } from "./Components";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, IconButton } from "@mui/material";
import { STATUS_CODES } from "http";

const SECTIONS: Record<string, React.ReactNode> = {
  Education: <Education addVerticalMargin/>,
  Technologies: <Technologies addVerticalMargin />,
  Experience: <Experience addVerticalMargin/>,
};

export function Resume() {
  const [section, setSection] = React.useState("Education");
  let sections = 3;

  const STYLES: Record<string, React.CSSProperties> = {
    navButton: {
      color: "black",
      fontSize: "1rem",
      flexDirection: "column",
      borderRadius: "25px",
      padding: ".7rem",
      position: "absolute",
      left: 0,
      right: 0,
      marginLeft: 'auto', 
      marginRight: 'auto', 
      width: '100px', /* Need a specific value to work */
      zIndex: 5,
      background: "rgba(255, 255, 255, 0.8)",
    },
    resume: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    section: {
      position: "relative",
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
          style={{
            ...STYLES.navButton,
            top: 0,
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
      <Box className="sectionWrapper" sx={{ ...STYLES.section }}>
        {SECTIONS[section]}
      </Box>


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
  );
}
