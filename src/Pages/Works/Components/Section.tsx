import { Grid } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

interface ISectionProps  {
    children: React.ReactNode
}
export function Section(props: ISectionProps) {
  return (
    <AnimatePresence mode="wait">

      <Grid container spacing={2} sx={{px: 2}} >
          {props.children}
      </Grid>
    </AnimatePresence>
  )
}

