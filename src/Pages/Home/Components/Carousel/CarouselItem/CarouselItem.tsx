import { Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export type CarouselItemProps =
 {
      children: React.ReactNode;
    };

export function CarouselItem(props: CarouselItemProps) {
  return (
    <Box
      sx={{
        height: '100%', 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "scroll"
      }}
    >
        {props.children}
    </Box>
  );
}
