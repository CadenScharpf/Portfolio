import React, { useContext } from "react";
import { SECTION_STYLE } from "./SectionStyle";
import AsuIconLight from "./Assets/asu_fse.png";
import AsuIconDark from "./Assets/asu_fse_white.png";
import AsuCampusPicture from "./Assets/asu.jpg";
import { Box, Typography, useTheme } from "@mui/material";
import { MainContent } from "./MainContent";
import { LayoutContext } from "../../../../Components/AnimatedRoutes/AnimatedRoutes";
import { COLORS } from "../../../../colors";
import SchoolIcon from '@mui/icons-material/School';
import { School } from "@mui/icons-material";

interface Props {
  addVerticalMargin?: boolean;
}
export function Education(props: Props) {
  const theme = useTheme();
  const LCP = useContext(LayoutContext);
  return (
    <Box
      sx={{
        ...SECTION_STYLE,
        textAlign: "center",
        /* backgroundImage: `url("https://www.asu.edu/sites/default/files/2022-03/210618-CollegeSchool-HeroTempe.jpeg")`,
        backgroundPosition: "center",
        backgroundSize: "fill", */
      }}
    >
      <MainContent
        style={{
          /* width: "100%",
          maxWidth: "666px",
          height: "100%",
          maxHeight: 400, */
          /* backgroundImage: `url("https://www.asu.edu/sites/default/files/2022-03/210618-CollegeSchool-HeroTempe.jpeg")`,
          backgroundPosition: "center",
          backgroundSize: "fill", */

        }}
        title="Education"
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py:2
          }}
        >
          <SchoolIcon sx={{fontSize: 100, color: theme.palette.text.primary, marginBottom: 2}}/>
          <Box
            sx={{
              border: `3px solid ${theme.palette.primary.main}`,
              width: "80%",
              background: `${theme.palette.background.paper}`,
              color: theme.palette.text.primary,
              p:2
            }}
          >
            <img alt="" src={LCP.isDarkMode? AsuIconDark : AsuIconLight} style={{ width: "300px" }} />
            {/* <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }}>
              Arizona State University
            </Typography> */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" style={{ maxWidth: "500px" }}>
                Graduated with a Bachelor of Science in Computer Science
              </Typography>
            </div>
            <p style={{ padding: 0, margin: 0 }}>August 2019 - May 2023</p>
          </Box>
        </Box>
      </MainContent>
    </Box>
  );
}
