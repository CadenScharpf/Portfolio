import React, { useContext } from "react";
import { LayoutContext } from "../../../../../Components/AnimatedRoutes/AnimatedRoutes";
import officeImageLrg from "../assets/pexels-burst-374147.jpg";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Technologies } from "../../../../Resume/Components";

function Section1Technologies() {
  const lcp = useContext(LayoutContext);
  const DEFAULT_STYLES: Record<string, React.CSSProperties> = {
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0 } }}
        style={{ width: "auto" }}
      >
        <Technologies />
      </motion.div>
    </Box>
  );
}

export default Section1Technologies;
