import React from "react";
import { SECTION_STYLE } from "./SectionStyle";
import AsuIcon from "./Assets/asu_fse.png";
import AsuCampusPicture from "./Assets/asu.jpg";
import { Box, Typography } from "@mui/material";

interface Props {
  addVerticalMargin?: boolean;
}
export function Education(props: Props) {
  return (
    <Box
      sx={{
        ...SECTION_STYLE,
        textAlign: "center",
        backgroundImage: `url("https://www.asu.edu/sites/default/files/2022-03/210618-CollegeSchool-HeroTempe.jpeg")`,
        backgroundPosition: "center",
        backgroundSize: "fill",
      }}
    >
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
        }}
      >
        <Typography variant="h3" style={{ paddingBottom: 0 }}>
          Education
        </Typography>
        <img alt="" src={AsuIcon} style={{ width: "300px" }} />
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Arizona State University
        </Typography>
        <Typography variant="h5" style={{maxWidth: '500px'}}>
          Graduated with a Bachelor of Science in Computer Science
        </Typography>
        <p style={{ padding: 0, margin: 0 }}>August 2019 - May 2023</p>
      </Box>
    </Box>
  );
}
