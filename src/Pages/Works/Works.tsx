import { Grid } from "@mui/material";
import { IWorkInfo } from "./WorksPage";
import { motion } from "framer-motion";
import { Work } from "./Components";


const PHASE_DURATION = 0.25; //!< time between triggerings of each phase
const PHASE_ANIMATION_DURATION = 0.5; //!< time it takes for each phase to animate

export default function Works(props: { apps: IWorkInfo[] }) {
    return (
      <>
        {props.apps.map((app: IWorkInfo, index: number) => {
          return (
            <Grid
              component={motion.div}
              key={app.title}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: index * PHASE_DURATION,
                  duration: PHASE_ANIMATION_DURATION,
                },
              }}
              exit={{ opacity: 0 }}
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={4}
            >
              <Work
                img={app.img}
                title={app.title}
                description={app.description}
                site={app.site}
                github={app.github}
                tech={app.tech?? []}
              />
            </Grid>
          );
        })}
      </>
    );
  }