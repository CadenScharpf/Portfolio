import React, { useContext } from "react";
import { LayoutContext } from "../../../../../Components/AnimatedRoutes/AnimatedRoutes";
import officeImageLrg from "../assets/pexels-burst-374147.jpg";
import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import iridiumLogo from "../assets/iridium.png";

function Iridium() {
  const lcp = useContext(LayoutContext);
  const DEFAULT_STYLES: Record<string, React.CSSProperties> = {
    imgLarge: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      backgroundImage: `url(${officeImageLrg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "cen",
    },
    content: {
      flexGrow: 1,
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { sm: "column", md: "row" },
        alignItems: "center",
        paddingTop: "40px",
        color: "white",
      }}
    >
      <div
        id="ContentLeft"
        className="Content"
        style={{ ...DEFAULT_STYLES.content, flexDirection: "column" }}
      >
        <Typography
          component={motion.h3}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0 } }}
          variant="h3"
          sx={{...DEFAULT_STYLES.text, maxWidth: '500px'}}
        >
          Full Stack Buisness Systems Developer
          <Divider
            sx={{
              width: "100%",
              marginBottom: "20px",
              borderColor: "white",
              position: "relative",
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Typography>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0 } }}
          sx={{ width: "100%" }}
        >
         
        </Box>
        <Typography
          component={motion.h4}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0 } }}
          variant="h4"
          sx={{ ...DEFAULT_STYLES.text }}
        >
          August 2021 - Present
        </Typography>
      </div>
      <div
        id="ContentRight"
        className="Content"
        style={{ ...DEFAULT_STYLES.content, flexDirection: "column", }}
      >
        <motion.img
          src={iridiumLogo}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
          style={{ width: "80%" }}
        />
        <Typography
          component={motion.h4}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
          variant="h4"
          sx={{ ...DEFAULT_STYLES.text, color: 'white', fontWeight: 'bold', }}
        >
          Iridium Satellite Communications
        </Typography>
      </div>
    </Box>
  );
}

export default Iridium;
