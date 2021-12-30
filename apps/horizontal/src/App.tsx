import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { createNanoEvents, EventsMap } from 'nanoevents'

import { HORIZONTAL_MFE_COLOR, HORIZONTAL_MFE_LABEL } from './constants'

import Label from './components/Label'

const Left = React.lazy(() => import('left/App'))
const Right = React.lazy(() => import('right/App'))

const renderMFE = (
  MFE: React.LazyExoticComponent<React.ComponentType<any>>,
  emitter: EventsMap,
) => {
  return (
    <React.Suspense fallback="Loading...">
      {React.createElement(MFE, { emitter }, null)}
    </React.Suspense>
  )
}

const App = () => {
  const emitter = createNanoEvents()

  return (
    <Box
      p={2}
      mb={2}
      sx={{
        position: 'relative',
        border: `2px dashed ${HORIZONTAL_MFE_COLOR}`,
      }}
    >
      <Typography variant="h5" mb={1}>
        This content lives in the Horizontal MFE shell
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {renderMFE(Left, emitter)}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderMFE(Right, emitter)}
        </Grid>
      </Grid>

      <Label color={HORIZONTAL_MFE_COLOR} label={HORIZONTAL_MFE_LABEL} />
    </Box>
  )
}

export default App
