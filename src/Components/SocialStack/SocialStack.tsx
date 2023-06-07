import { Stack } from '@mui/material'
import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialStack() {
  return (
    <Stack style={{ position: 'absolute', left: '2%', top: "40%", zIndex: 99 }}>
            <a href="https://github.com/CadenScharpf"><GitHubIcon style={{ color: 'black', fontSize: '5rem', zIndex: '999', width: '40px' }} /></a>
            <a href="https://www.linkedin.com/in/cadenscharpf/"><LinkedInIcon style={{ color: '#0077b5', fontSize: '5rem', zIndex: '999', width: '40px' }} /></a>
            <a href="https://www.youtube.com/@CadenScharpf"><YouTubeIcon style={{ color: 'red', fontSize: '5rem', zIndex: '999', width: '40px' }} /></a>
          </Stack>
  )
}

export default SocialStack