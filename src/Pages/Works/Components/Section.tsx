import { Grid } from '@mui/material'
import React from 'react'

interface ISectionProps  {
    children: React.ReactNode
}
export function Section(props: ISectionProps) {
  return (
    <Grid container spacing={2} sx={{px: 2}} >
        {props.children}
    </Grid>
  )
}

