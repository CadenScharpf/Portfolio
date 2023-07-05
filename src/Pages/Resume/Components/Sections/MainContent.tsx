import { Box, ThemeProvider, Typography, useTheme } from "@mui/material";
import React from "react";

interface Props {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  addVerticalMargin?: boolean;
  title?: string;
}

const titleHeight = 55;
const dividerHeight = 2;

export function MainContent(props: Props) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        width: "80%",
        maxWidth: "800px",
        height: "75%",
        maxHeight: 500,
        borderRadius: "25px",
        border: `3px solid ${theme.palette.primary.main}`,
        my: props.addVerticalMargin ? "60px" : 0,

        overflow: "scroll",
        textAlign: "center",
        padding: 0,
        ...props.style,
        positon: "relative",
        
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: titleHeight,
          border: "2px solid black",
          borderWidth: `0px 0px ${dividerHeight}px 0px`,
          background: `${theme.palette.primary.main}dd`,
          color: theme.palette.primary.contrastText,
        }}
      >
        {props.title && (
          <Typography variant="h3" sx={{ marginBottom: 1 }}>
            {props.title}
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          width: "100%",
          height: `calc(100% - ${titleHeight + dividerHeight}px)`,
          overflow: "scroll",
          /*  */
          alignItems: "center",

        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
