import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ContentWindow } from '../../Components/ContentWindow'
import { Technologies, Experience, Education } from './Components'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';





const SECTIONS: Record<string,React.ReactNode> = {
  Technologies: <Technologies />,
  Experience: <Experience />,
  Education: <Education />
}

export function Resume() {
  const [section, setSection] = React.useState('Education')
  let sections = 3;

  const STYLES: Record<string, React.CSSProperties> = {
    navButton: {
      position: 'absolute', color: 'black', fontSize: '1rem', flexDirection: 'column'
    }
  }


  return (
    <ContentWindow style={{ /* backgroundImage: 'linear-gradient(to right, #8360c3, #2ebf91)' */ }}>
      <IconButton 
        style={{...STYLES.navButton, top: 0, display: Object.keys(SECTIONS).indexOf(section)>0? 'flex': 'none'}}
        onClick={() => setSection(Object.keys(SECTIONS)[Object.keys(SECTIONS).indexOf(section)-1])}
      >
        <ExpandLessIcon />
        {Object.keys(SECTIONS)[Object.keys(SECTIONS).indexOf(section)-1]}
      </IconButton>
      <IconButton 
        style={{...STYLES.navButton, bottom: 0, display: Object.keys(SECTIONS).indexOf(section)<sections-1? 'flex': 'none',}}
        onClick={()=> setSection(Object.keys(SECTIONS)[Object.keys(SECTIONS).indexOf(section)+1])}
      >
        {Object.keys(SECTIONS)[Object.keys(SECTIONS).indexOf(section)+1]}
        <ExpandMoreIcon />
      </IconButton>
      {SECTIONS[section]}
    </ContentWindow>
  )
}
