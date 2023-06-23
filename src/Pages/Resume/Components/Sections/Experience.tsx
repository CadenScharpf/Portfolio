import React from 'react'
import { SECTION_STYLE } from './SectionStyle'
import IridiumLogo from './Assets/iridium.png'
import { Button, IconButton, Typography } from '@mui/material'

const STYLES: Record<string, React.CSSProperties> = {
  employer: {
    margin: 0, 
    padding: 0
  },
  jobTitle: {
    margin: 0, padding: 0, paddingTop: 5
  },
  timeframe: {

  },

}

export function Experience() {
  return (
    <div style={SECTION_STYLE}>
      <div style={{ width: 'auto', textAlign: 'center'  }}>
        <Typography variant="h3" sx={{paddingBottom: 3}}>Professional Experience</Typography>
        <div className='experience' style={{}}>
          <Typography variant="h4" style={{...STYLES.employer}}>Iridium Satellite Communications</Typography>
          <div style={{ }}>
            <Typography variant="h5" style={{...STYLES.jobTitle}}>Software Engineering Intern</Typography>
            <Typography style={{padding: 0,margin:0}}>May 2021 - August 2021</Typography>

            <Typography variant="h5" style={{...STYLES.jobTitle}}>Full Stack Developer</Typography>
            <p style={{padding: 0,margin:0}}>August 2021 - Present</p>
          </div>
        </div>
        <div className='experience' style={{}}>
          <Typography variant="h4" sx={{...STYLES.employer, paddingTop: 2}}>Local Grown Salads LLC.</Typography>
          <div style={{ }}>
            <Typography variant="h5" style={{...STYLES.jobTitle}}>Application Development Intern</Typography>
            <p style={{padding: 0,margin:0}}>Aug. 2022 - Apr. 2023 </p>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0px 0px 0px'}}>
          <Button variant='contained' sx={{background: '', alignSelf: 'center'}} href='https://github.com/CadenScharpf/Public-Resume/blob/main/resume.pdf'>Download My Resume</Button>
        </div>
      </div>

    </div>
  )
}
