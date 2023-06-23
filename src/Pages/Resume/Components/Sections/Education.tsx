import React from 'react'
import { SECTION_STYLE } from './SectionStyle'
import AsuIcon from './Assets/asu_fse.png'
import { Typography } from '@mui/material'

export function Education() {
  return (
    <div style={{ ...SECTION_STYLE, textAlign: 'center' }}>
      <Typography variant="h3" style={{paddingBottom: 0}}>Education</Typography>
      <img alt="" src={AsuIcon} style={{ width: '300px' }} />
      <h2 style={{ padding: 0, margin: 0 }}>Arizona State University</h2>
      <h3 style={{ padding: 0, margin: 0 }}>Bachelor of Science in Computer Science</h3>
      <p style={{ padding: 0, margin: 0, }}>August 2019 - May 2023</p>
    </div>
  )
}
