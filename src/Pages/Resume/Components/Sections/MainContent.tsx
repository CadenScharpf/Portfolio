import { Box } from "@mui/material";
import React from "react";

interface Props {
  style?: React.CSSProperties;
  children?: React.ReactNode;
    addVerticalMargin?: boolean;
}

export function MainContent(props: Props) {
  return (
    <Box
      sx={{
          background: "rgba(255, 255, 255, 0.8)",
          width: "80%",
          maxWidth: "666px",
          height: "70%",
          maxHeight: 400,
          borderRadius: "25px",
          border: "2.5px solid black ",
          my: props.addVerticalMargin ? "60px" : 0,
          overflow: "scroll",
          padding: "0 10px 20px 10px",
          ...props.style,
      }}
    >
      {props.children}
    </Box>
  );
}
