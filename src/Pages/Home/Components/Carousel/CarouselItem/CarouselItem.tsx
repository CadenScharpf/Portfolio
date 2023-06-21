import { Container, Grid } from "@mui/material";
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
    <Container
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {"children" in props ? (
        props.children
      ) : (
        <>
          <h1>{props.title? props.title : ""}</h1>
        </>
      )}
    </Container>
  );
}
