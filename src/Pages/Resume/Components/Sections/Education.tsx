import React from "react";
import { SECTION_STYLE } from "./SectionStyle";
import AsuIcon from "./Assets/asu_fse.png";
import AsuCampusPicture from "./Assets/asu.jpg";
import { Box, Typography } from "@mui/material";
import { MainContent } from "./MainContent";

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
      <MainContent
        style={{
          width: "80%",
          maxWidth: "666px",
          height: "70%",
          maxHeight: 400,
        }}
        title="Education"
      >
        <img alt="" src={AsuIcon} style={{ width: "300px" }} />
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Arizona State University
        </Typography>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h5" style={{ maxWidth: "500px" }}>
            Graduated with a Bachelor of Science in Computer Science
          </Typography>
        </div>
        <p style={{ padding: 0, margin: 0 }}>August 2019 - May 2023</p>
      </MainContent>
    </Box>
  );
}
