import React from 'react'
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
import ReactNativeIcon from "./Assets/icons/frontend/react_native.webp";
import ExpressJsIcon from "./Assets/icons/backend/express-js.png";
import PrismaIcon from "./Assets/icons/backend/prisma.png";

import { Tooltip } from '@mui/material';
import { motion } from 'framer-motion';



export const ICONS: Record<string, string> = {
  js: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
  css: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png",
  html: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
  mui: MuiIcon,
  react: ReactIcon,
  node: NodeIcon,
  flask: FlaskIcon,
  spring: SpringIcon,
  sql: SqlIcon,
  ts: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
  python:
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
  java: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
  aws: AwsIcon,
  docker: DockerIcon,
  git: GitIcon,
  bash: BashIcon,
  nginx: NginxIcon,
  react_native: ReactNativeIcon,
    expressJs: ExpressJsIcon,
    prisma: PrismaIcon,
};

export type TechIconVariant = keyof typeof ICONS;


function TechIcon(props: {variant: keyof typeof ICONS, height?: number}) {
    const ICON_VARIANTS = {
        initial: {
          height: props.height || 40,
          margin: 10,
          filter: "grayscale(100%)",
        },
        hover: {
          filter: "grayscale(0%)",
          height: (props.height? props.height: 40) + 20,
        },
      };
  return (
    <Tooltip title={props.variant} arrow>
        <motion.img
        whileHover="hover"
        initial="initial"
        variants={ICON_VARIANTS}
        src={ICONS[props.variant]}
        style={{
            height: props.height || 40,
            margin: 10,
            filter: "grayscale(100%)",
          }}
      />
      </Tooltip>
  )
}

export default TechIcon