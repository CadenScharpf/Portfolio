import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ContentWindow } from '../../Components/ContentWindow'
import { Technologies, Experience, Education } from './Components'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore } from '@mui/icons-material';
import { IconButton } from '@mui/material';





const SECTIONS: Record<string,React.ReactNode> = {
  Experience: <Experience />,
  Tech: <Technologies />,
  Education: <Education />
}

export function Resume() {
  const [section, setSection] = React.useState('Tech')
  let idx = 0;
  let sections = 3;
  

  const STYLES: Record<string, React.CSSProperties> = {
    navButton: {
      position: 'absolute', color: 'white', fontSize: '1rem', flexDirection: 'column'
    }
  }

  useEffect(()=> {
    idx = Object.keys(SECTIONS).indexOf(section);
  });

  return (
    <ContentWindow style={{ backgroundImage: 'linear-gradient(to right, #8360c3, #2ebf91)' }}>
      <IconButton 
        style={{...STYLES.navButton, top: 0, display: Object.keys(SECTIONS).indexOf(section)>0? 'flex': 'none'}}
        onClick={()=> setSection(Object.keys(SECTIONS)[Object.keys(SECTIONS).indexOf(section)-1])}
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
