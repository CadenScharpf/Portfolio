import React from "react";
import { SECTION_STYLE } from "./SectionStyle";
import MuiIcon from "./Assets/icons/frontend/mui.png";
import ReactIcon from "./Assets/icons/frontend/react.png";
import NodeIcon from "./Assets/icons/backend/node.png";
import FlaskIcon from "./Assets/icons/backend/flask.png";
import SpringIcon from "./Assets/icons/backend/spring.png";
import SqlIcon from "./Assets/icons/backend/sql.png";
import AwsIcon from "./Assets/icons/other/aws.png";
import DockerIcon from "./Assets/icons/other/docker.png";
import GitIcon from "./Assets/icons/other/git.png";
import BashIcon from "./Assets/icons/other/bash.png";
import NginxIcon from "./Assets/icons/other/nginx.png";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const styles: Record<string, React.CSSProperties> = {
  techBox: {
    display: "flex",
    flexDirection: "column",
    border: "3px solid black",
    padding: 10,
    color: "black",
    margin: 2,
    width: '80%',
    maxWidth:'600px',
  },
  icon: {
    height: 30,
    margin: 10,
    filter: "grayscale(100%)",
  },
  iconHover: {
    filter: "grayscale(0%)",
    height: 50,
  },
};

const ICON_VARIANTS = {
  initial: {
    height: 30,
    margin: 10,
    filter: "grayscale(100%)",
  },
  hover: {
    filter: "grayscale(0%)",
    height: 50,
  },
};

const ICONS: Record<string, string[]> = {
  frontend: [
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png",
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
    MuiIcon,
    ReactIcon,
  ],
  backend: [
    NodeIcon,
    FlaskIcon,
    SpringIcon,
    SqlIcon,
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
  ],
  other: [AwsIcon, DockerIcon, GitIcon, BashIcon, NginxIcon],
};
interface Props {
  addVerticalMargin?: boolean;
}
export function Technologies(props: Props) {
  const iconMap = (iconPaths: string[]) =>
    iconPaths.map((file, idx) => (
      <motion.img
        whileHover="hover"
        initial="initial"
        variants={ICON_VARIANTS}
        key={"icon" + idx}
        src={file}
        style={styles.icon}
      />
    ));
  return (
    <Box sx={{...SECTION_STYLE, textAlign: 'center',  px: 2}}>

      <Box sx={{ py: props.addVerticalMargin? '60px' : 0, background: 'rgba(255, 255, 255, 0.8)', width: '80%', maxWidth: '800px', height: '75%', maxHeight: 500,  borderRadius: '25px', border: '2.5px solid black ', my: props.addVerticalMargin? "60px" : 0 , overflow:'scroll', padding: '0 10px 20px 10px',  }}>
        <div style={{ }}>
          <Typography variant="h3" sx={{ marginBottom: 1 }}>
            Tech I Use
          </Typography>
        </div>
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ ...styles.techBox }}>
            <p style={{ margin: 0, color: "#333" }}>
              These are, but not limited to, the tech I use for building
              client-side applications
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "left",
                backgroundColor: "transparent",
              }}
            >
              {iconMap(ICONS.frontend)}
            </div>
          </div>
          <div style={{ ...styles.techBox }}>
            <p style={{ margin: 0, color: "#333" }}>
              These are, but not limited to, the tech I use for building fast and
              scalable backend applications
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "left",
                backgroundColor: "transparent",
              }}
            >
              {iconMap(ICONS.backend)}
            </div>
          </div>
          <div style={{ ...styles.techBox }}>
            <p style={{ margin: 0, color: "#333" }}>Others...and more!</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "left",
                backgroundColor: "transparent",
              }}
            >
              {iconMap(ICONS.other)}
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
