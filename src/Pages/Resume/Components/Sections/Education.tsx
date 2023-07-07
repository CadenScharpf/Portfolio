import React, { useContext } from "react";
import { SECTION_STYLE } from "./SectionStyle";
import AsuIconLight from "./../../../../Assets/asu_fse.png";
import AsuIconDark from "./../../../../Assets/asu_fse_white.png";
import AsuCampusPicture from "./../../../../Assets/asu_campus.jpg";
import { Box, Typography, useTheme } from "@mui/material";
import { MainContent } from "./MainContent";
import { LayoutContext } from "../../../../Components/AnimatedRoutes/AnimatedRoutes";
import { COLORS } from "../../../../colors";
import SchoolIcon from "@mui/icons-material/School";
import { School } from "@mui/icons-material";

interface Props {
  showTitle?: boolean;
}
export function Education(props: Props) {
  const theme = useTheme();
  const LCP = useContext(LayoutContext);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      <SchoolIcon
        sx={{
          fontSize: props.showTitle? 100 : 50,
          color: theme.palette.text.primary,
        }}
      />
      {props.showTitle && (
        <>
          <Typography
            variant="h3"
            sx={{ color: theme.palette.text.primary, marginBottom: 3 }}
          >
            Education
          </Typography>
        </>
      )}
      <Box
        sx={{
          border: `3px solid ${theme.palette.primary.main}`,
          width: "80%",
          maxWidth: "800px",
          background: `${theme.palette.background.paper}`,
          color: theme.palette.text.primary,
          p: 2,
        }}
      >
        <img
          alt=""
          src={LCP.isDarkMode ? AsuIconDark : AsuIconLight}
          style={{ width: "300px" }}
        />
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
  );
}
