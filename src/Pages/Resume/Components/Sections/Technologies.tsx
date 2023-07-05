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
import { Box, Typography, useTheme } from "@mui/material";
import { MainContent } from "./MainContent";

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
  const theme = useTheme();
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
  const styles: Record<string, React.CSSProperties> = {
    techBox: {
      display: "flex",
      flexDirection: "column",
      border: `3px solid ${theme.palette.primary.main}`,
      padding: 10,
      color: "black",
      marginTop: 2,
      marginBottom: 2,
      width: "90%",
      maxWidth: "600px",
      background: "white",
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
  return (
    <Box
      sx={{
        ...SECTION_STYLE,
        textAlign: "center",
        /* backgroundImage: `url("https://www.asu.edu/sites/default/files/2022-03/210618-CollegeSchool-HeroTempe.jpeg")`,
        backgroundPosition: "center",
        backgroundSize: "fill", */
      }}
    >
      <MainContent title="Tech I Use">
        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <div
            style={{
              ...styles.techBox,
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
            }}
          >
            <p style={{ margin: 0 }}>
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
          <div
            style={{
              ...styles.techBox,
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
            }}
          >
            <p style={{ margin: 0 }}>
              These are, but not limited to, the tech I use for building fast
              and scalable backend applications
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
          <div
            style={{
              ...styles.techBox,
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
            }}
          >
            <p style={{ margin: 0 }}>Others...and more!</p>
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
        </Box>
      </MainContent>
    </Box>
  );
}
