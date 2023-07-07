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
};

export default ICONS;