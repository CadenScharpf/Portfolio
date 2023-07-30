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
import { Box, Container, Tooltip, Typography, useTheme } from "@mui/material";
import { MainContent } from "./MainContent";
import ConstructionIcon from "@mui/icons-material/Construction";
import ICONS from "../../../../Icons";


type TechIconCategory = Record<string, string>;
type TechIconCategories = Record<string, TechIconCategory>;
const TECH_ICONS: TechIconCategories = {
  frontend: {JAVASCRIPT: ICONS.js, css: ICONS.css, HTML: ICONS.html, MaterialUI: ICONS.mui, ReactJS: ICONS.react},
  backend: {
    Node: ICONS.node,
    PythonFlask: ICONS.flask,
    JavaSpring: ICONS.spring,
    Sql: ICONS.sql,
    Typescript: ICONS.ts,
    Python: ICONS.python,
    Java: ICONS.java,}
  ,
  other: {AWS: ICONS.aws,Docker: ICONS.docker,Git: ICONS.git, Bash: ICONS.bash,NGINX: ICONS.nginx},
};
interface Props {
  showTitle?: boolean;
}
export function Technologies(props: Props) {
  const theme = useTheme();
  const iconMap = (techIconCategory: TechIconCategory) =>
    Object.keys(techIconCategory).map((techIcon: string, index: number) => (
      <Tooltip title={techIcon} arrow>
        <motion.img
        whileHover="hover"
        initial="initial"
        variants={ICON_VARIANTS}
        key={"icon" + index}
        src={techIconCategory[techIcon]}
        style={styles.icon}
      />
      </Tooltip>
      
    ));
  const styles: Record<string, React.CSSProperties> = {
    techBox: {
      display: "flex",
      flexDirection: "column",
      border: `3px solid ${theme.palette.primary.main}`,
      color: "black",
      marginTop: 2,
      marginBottom: 2,
      width: "90%",
      maxWidth: "800px",
      background: theme.palette.background.default,
      padding: 3,
    },
    icon: {
      height: 40,
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
      height: 40,
      margin: 10,
      filter: "grayscale(100%)",
    },
    hover: {
      filter: "grayscale(0%)",
      height: 60,
    },
  };
  return (
    <Box
      className="technologies"
      sx={{
        textAlign: "left",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        overflow: "scroll",
        alignItems: "center",
        px: 2,
      }}
    >
      {props.showTitle && (
        <>
          <ConstructionIcon
            sx={{
              fontSize: 100,
              color: theme.palette.text.primary,
              marginTop: 3,
            }}
          />
          <Typography
            variant="h3"
            sx={{ color: theme.palette.text.primary, marginBottom: 3 }}
          >
            Technologies
          </Typography>
        </>
      )}
      <div
        style={{
          ...styles.techBox,
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <p style={{ margin: 0 }}>
          These are, but not limited to, the tech I use for building client-side
          applications
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "left",
            backgroundColor: "transparent",
          }}
        >
          {iconMap(TECH_ICONS.frontend)}
        </div>
      </div>
      <div
        style={{
          ...styles.techBox,
          color: theme.palette.text.primary,
        }}
      >
        <p style={{ margin: 0 }}>
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
          {iconMap(TECH_ICONS.backend)}
        </div>
      </div>
      <div
        style={{
          ...styles.techBox,
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
          {iconMap(TECH_ICONS.other)}
        </div>
      </div>
    </Box>
  );
}
