import React from "react";
import { SECTION_STYLE } from "./SectionStyle";
import IridiumLogo from "./Assets/iridium.png";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import { MainContent } from "./MainContent";
import { COLORS } from "../../../../colors";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const EXPERIENCE_DATA = [
  {
    employer: {
      name: "Iridium Satellite LLC",
      url: "https://www.iridium.com/",
    },
    jobTitle: "Buisness Systems Developer",
    timeframe: "May 2021 - Present",
    location: "Tempe, AZ",
    description:
      `Developed Enterprise Java APIs for customers and internal users to automate business processes and provision devices on the Network. Designed and developed a web interface to allow customers and service providers to manage accounts and devices on the network.` 
  },
  {
    employer: {
      name: "Iridium Satellite LLC",
      url: "https://www.iridium.com/",
    },
    jobTitle: "Full Stack Development Intern",
    timeframe: "May 2021 - Aug. 2021",
    location: "Tempe, AZ",
    description:
      `Developed unit tests and performed bug fixes for the Iridium Web Services Enterprise Java API andontributed to the successful conversion of the SOAP-based API to RESTful architecture.`
  },
  {
    employer: {
      name: "Local Grown Salads",
      url: "https://www.localgrownsalads.com/",
    },
    jobTitle: "Application Development Intern",
    timeframe: "Aug. 2022 - Apr. 2023",
    location: "Tempe, AZ",
    description:
      `Developed and styled an interactive mobile application used by the internal logistics team to track and manage delivery metrics in real time.`
  },
];

interface Props {
  showTitle?: boolean;
}
export function Experience(props: Props) {
  const theme = useTheme();

  const STYLES: Record<string, SxProps> = {
    employer: {
      margin: 0,
      padding: 0,
    },
    jobTitle: {
      margin: 0,
      padding: 0,
      paddingTop: 5,
    },
    timeframe: {},
    experience: {
      border: `3px solid ${theme.palette.primary.main}`,
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
      marginBottom: 1,
      p: 1,
    },
  };

  return (
    <Box sx={{ px: 2, textAlign: "left", height: "100%" }}>
      {props.showTitle && (
        <Typography
          variant="h3"
          sx={{ color: theme.palette.text.primary, my: 3 }}
        >
          Experience
        </Typography>
      )}
      {EXPERIENCE_DATA.map((experience) => {
        return (
          <Grid container spacing={2} sx={{ my: 0 }}>
            <Grid item xs={3}>
              <Box sx={{}}>
                <Typography sx={{ color: theme.palette.text.secondary }}>
                  {experience.timeframe}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box sx={{}}>
                <Typography sx={{ color: theme.palette.text.primary }}>
                  {experience.jobTitle} · {experience.employer.name}
                  <Link
                    sx={{ color: theme.palette.primary.main }}
                    href={experience.employer.url}
                  >
                    <ArrowOutwardIcon fontSize="small" />
                  </Link>
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.text.secondary /* , maxWidth: 600 */,
                  }}
                >
                  {experience.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        );
      })}
      <Link
        sx={{ color: theme.palette.primary.main }}
        href="https://github.com/CadenScharpf/Public-Resume/blob/main/resume.pdf"
      >
        <Typography>See Full resume <ArrowOutwardIcon fontSize="small" /></Typography>
        
      </Link>
      {/* <Button
              variant="contained"
              sx={{ background: theme.palette.primary.main, color: theme.palette.primary.contrastText, marginTop: 2 }}
              href="https://github.com/CadenScharpf/Public-Resume/blob/main/resume.pdf"
            >
              See Full Resume
            </Button> */}
    </Box>
  );
}
