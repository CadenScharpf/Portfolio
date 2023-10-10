import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Work } from "./Components";
import { Box, Button, Grid, useTheme } from "@mui/material";
import ManimCsWebPreview from "./Assets/ManimCSWebPreview.png";
import ManimCsPreview from "./Assets/ManimCsPreview.png";
import PortfolioPreview from "./Assets/PortfolioPreview.png";
import LgsDel from "./Assets/LgsDeliveryEngine.png";
import HiveLink from "./Assets/HiveLinkThumbnail.png";
import Works from "./Works";
import TechIcon, { TechIconVariant } from "../../Components/TechIcon/TechIcon";


export interface IWorkInfo {
  img: string;
  title: string;
  description: string;
  site?: string;
  github?: string;
  tech?: TechIconVariant[];
}

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
     */ padding: "1vh 1vh 1vh 1vh",
    textDecoration: "none",
    color: "#000",
    fontWeight: "600",
    fontSize: "1.2rem",
  },
};



const WORKS_INFO: Record<string, IWorkInfo[]> = {
  web: [
    {
      img: HiveLink,
      title: "Hive Link Web UI",
      description:
        "HiveLink is an all-in-one platform for seamless smart home experiences. With HiveLink, you can effortlessly purchase, manage, and schedule installation services for a wide range of smart home devices. Built With React.js",
      github: "https://github.com/CadenScharpf/HiveLinkDomotics",
      tech: ["react", "mui", "ts", "css", "html", "docker" ]
    },
    {
      img: ManimCsWebPreview,
      title: "Manim CS Web Demo",
      description:
        "Web interfaced demonstration of the manim-cs animation library for python(github.com/CadenScharpf/manim-cs)",
      site: "https://manimcs-demo.cadenscharpf.tech/",
      github: "https://github.com/CadenScharpf/manim-cs-web",
      tech: ["react", "mui", "ts", "css", "html"]
    },
    {
      img: LgsDel,
      title: "LGS Delivery Engine",
      description:
        "QR Scanner/Logistics Tracking Software used by Local Grown Salads LLC delivery team members to manage active deliveries. Developed using React Native with the Expo CLI.",
      github: "https://github.com/CadenScharpf/LgsDeliveryEngine",
      tech: ["react_native", "js", "css", "html", "sql", "docker"]
    },
    {
      img: PortfolioPreview,
      title: "Development Portfolio",
      description:
        "Personal developer portfolio website developed using Typescript and ReactJS",
      site: "cadenscharpf.tech/",
      github: "https://github.com/CadenScharpf/manim-cs-web",
      tech: ["react", "mui", "ts", "css", "html"]
    },
  ],
  backend: [
    {
      img: HiveLink,
      title: "Hive Link API",
      description:
        "HiveLink is an all-in-one platform for seamless smart home experiences. With HiveLink, you can effortlessly purchase, manage, and schedule installation services for a wide range of smart home devices. Built With Express.js and React.js",
      github: "https://github.com/CadenScharpf/HiveLinkDomotics",
      tech: ["node", "ts", "sql", "docker"]
    },
    {
      img: ManimCsPreview,
      title: "Manim CS",
      description:
        "An animation library for explanatory Computer Science videos",
      site: "https://pypi.org/project/manimcs/",
      github: "https://github.com/CadenScharpf/manim-cs",
      tech: ["python", "flask", "docker"]
    },
  ],
};



const SECTIONS = {
  web: <Works apps={WORKS_INFO.web} />,
  backend: <Works apps={WORKS_INFO.backend} />,
};

export function WorksPage() {
  const [category, setCategory] = React.useState<keyof typeof SECTIONS>("web");
  const theme = useTheme();
  useEffect(() => {});
  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        position: "relative",
        width: "100%",
        height: "100%",

        overflow: "scroll",
      }}
    >
      <div style={styles.nav}>
        <Button
          variant="text"
          style={{
            ...styles.navItem,
            fontWeight: category === "web" ? "bold" : "",
            color:
              category === "web"
                ? theme.palette.primary.main
                : theme.palette.text.primary,
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
            color:
              category === "backend"
                ? theme.palette.primary.main
                : theme.palette.text.primary,
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
          {SECTIONS[category]}
        </Grid>
      </AnimatePresence>
    </Box>
  );
}
