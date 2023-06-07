import React from 'react'
import { SECTION_STYLE } from './SectionStyle'
import IridiumLogo from './Assets/iridium.png'
import { Button, IconButton } from '@mui/material'

export function Experience() {
  return (
    <div style={SECTION_STYLE}>
      <div style={{ width: '100%' }}>
        <h1 style={{}}>Professional Experience</h1>
        <div className='experience' style={{}}>
          <h2 style={{margin: 0}}>Iridium Satellite Communications</h2>
          <div style={{ }}>
            <h3 style={{margin: 0, padding: 0}}>Software Engineering Intern</h3>
            <p style={{padding: 0,margin:0}}>May 2021 - August 2021</p>

            <h3 style={{margin: 0, padding: 0}}>Full Stack Developer</h3>
            <p style={{padding: 0,margin:0}}>August 2021 - Present</p>
          </div>
        </div>
        <div className='experience' style={{}}>
          <h2 style={{marginBottom: 0}}>Local Grown Salads LLC.</h2>
          <div style={{ }}>
            <h3 style={{margin: 0, padding: 0}}>Software Engineering Intern</h3>
            <p style={{padding: 0,margin:0}}>Aug. 2022 - Apr. 2023 </p>
          </div>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '100px 0px 100px 0px'}}>
          <Button variant='contained' sx={{background: '', alignSelf: 'center'}} href='https://github.com/CadenScharpf/Public-Resume/blob/main/resume.pdf'>Download My Resume</Button>
        </div>
      </div>

    </div>
  )
}
