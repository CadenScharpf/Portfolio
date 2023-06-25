import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  addVerticalMargin?: boolean;
  title?: string;
}

export function MainContent(props: Props) {
  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.8)",
        width: "80%",
        maxWidth: "800px",
        height: "75%",
        maxHeight: 500,
        borderRadius: "25px",
        border: "2.5px solid black ",
        my: props.addVerticalMargin ? "60px" : 0,
        overflow: "scroll",
        textAlign: "center",
        padding: "0 10px 10px 10px",
        ...props.style,
      }}
    >
      <div style={{ width: "100%", border: "2px solid black", borderWidth: '0px 0px 2px 0px', marginBottom: '10px'}}>
        {props.title && (
          <Typography variant="h3" sx={{ marginBottom: 1 }}>
            {props.title}
          </Typography>
        )}
      </div>
      {props.children}
    </Box>
  );
}
