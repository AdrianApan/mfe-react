import React from 'react'
import { Box, Button } from '@mui/material'
import { EventsMap } from 'nanoevents'

import { LEFT_MFE_COLOR, LEFT_MFE_LABEL } from './constants'

import Label from './components/Label'

interface Props {
  emitter: EventsMap
}

const App = ({ emitter }: Props) => {
  const onEmitEvent = () => {
    const date = new Date().toISOString()
    emitter.emit('newEvent', date)
  }

  return (
    <Box
      p={4}
      mb={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'relative',
        border: `2px dashed ${LEFT_MFE_COLOR}`,
      }}
    >
      <Box textAlign="center">
        <Button variant="outlined" onClick={onEmitEvent} color="secondary">
          Emit event
        </Button>
      </Box>

      <Label color={LEFT_MFE_COLOR} label={LEFT_MFE_LABEL} />
    </Box>
  )
}

export default App
