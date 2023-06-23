import { Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export type CarouselItemProps =
  | {
      title?: string;
      subtitle?: string;
      description?: string;
      image?: string;
    }
  | {
      children: React.ReactNode;
    };

export function CarouselItem(props: CarouselItemProps) {
  return (
    <Box
      sx={{
        height: '90%', 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "scroll"
      }}
    >
      {"children" in props ? (
        props.children
      ) : (
        <>
          <h1>{props.title? props.title : ""}</h1>
        </>
      )}
    </Box>
  );
}
