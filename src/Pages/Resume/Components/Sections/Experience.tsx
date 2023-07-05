import React from "react";
import { SECTION_STYLE } from "./SectionStyle";
import IridiumLogo from "./Assets/iridium.png";
import {
  Box,
  Button,
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
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const EXPERIENCE_DATA = [
  {
    employer: {name: "Iridium Satellite LLC", url: "https://www.iridium.com/"},
    jobTitle: "Buisness Systems Developer",
    timeframe: "May 2021 - Present",
    location: "Tempe, AZ",
    description:
      `Deliver high-quality, robust production code for a diverse array of projects ` +
      `for clients including Harvard Business School, Everytown for Gun Safety, Pratt ` +
      `Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide ` +
      `leadership within engineering department through close collaboration, knowledge ` +
      `shares, and mentorship`,
  },
  {
    employer: {name: "Iridium Satellite LLC", url: "https://www.iridium.com/"},
    jobTitle: "Full Stack Development Intern",
    timeframe: "May 2021 - Present",
    location: "Tempe, AZ",
    description:
      `Deliver high-quality, robust production code for a diverse array of projects ` +
      `for clients including Harvard Business School, Everytown for Gun Safety, Pratt ` +
      `Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide ` +
      `leadership within engineering department through close collaboration, knowledge ` +
      `shares, and mentorship`,
  },
];

interface Props {
  addVerticalMargin?: boolean;
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
    <div
      style={{
        ...SECTION_STYLE,
        /* backgroundImage: `url("https://www.asu.edu/sites/default/files/2022-03/210618-CollegeSchool-HeroTempe.jpeg")`,
        backgroundPosition: "center",
        backgroundSize: "fill", */
      }}
    >
      <MainContent title="Experience">
        <Box sx={{ p: 2, textAlign: 'left' }}>
          {EXPERIENCE_DATA.map((experience) => {
            return (
              <Grid container spacing={2} sx={{my:0}}>
                
                <Grid item xs={3}>
                  <Box sx={{  }}>
                    <Typography sx={{color: theme.palette.text.secondary}}>{experience.timeframe}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={9}>
                  <Box sx={{  }}>
                    <Typography sx={{color: theme.palette.text.primary}}>{experience.jobTitle} · {experience.employer.name}<Link sx={{color: theme.palette.primary.main}} href={experience.employer.url}><ArrowOutwardIcon fontSize="small"/></Link></Typography>
                    <Typography sx={{color: theme.palette.text.secondary}}>{experience.description}</Typography>
                  </Box>
                </Grid>
              </Grid>
            );
          })}
          {/*  <Box className="experience" sx={{ ...STYLES.experience }}>
            <Typography variant="h4" sx={{ ...STYLES.employer }}>
              Iridium Communications
            <Divider variant='middle' sx={{background: theme.palette.primary.main}}/>
            </Typography>
            <div style={{textAlign: 'left'}}>
              <Typography variant="h5" sx={{ ...STYLES.jobTitle }}>
                Software Engineering Intern
              </Typography>
              <Typography style={{ padding: 0, margin: 0 }}>
                May 2021 - August 2021
              </Typography>

              <Typography variant="h5" sx={{ ...STYLES.jobTitle }}>
                Full Stack Developer
              </Typography>
              <p style={{ padding: 0, margin: 0 }}>August 2021 - Present</p>
            </div>
          </Box>
          <Box className="experience" sx={{ ...STYLES.experience }}>
            <Typography variant="h4" sx={{ ...STYLES.employer }}>
              Local Grown Salads LLC.
            </Typography>
            <div style={{}}>
              <Typography variant="h5" sx={{ ...STYLES.jobTitle }}>
                Application Development Intern
              </Typography>
              <p style={{ padding: 0, margin: 0 }}>Aug. 2022 - Apr. 2023 </p>
            </div>
          </Box> 
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px 0px 0px",
            }}
          >
            <Button
              variant="contained"
              sx={{ background: "", alignSelf: "center" }}
              href="https://github.com/CadenScharpf/Public-Resume/blob/main/resume.pdf"
            >
              Download My Resume
            </Button>
          </div>*/}
        </Box>
      </MainContent>
    </div>
  );
}
