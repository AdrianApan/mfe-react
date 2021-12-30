import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { EventsMap } from 'nanoevents'

import { RIGHT_MFE_COLOR, RIGHT_MFE_LABEL } from './constants'

import Label from './components/Label'

interface Props {
  emitter: EventsMap
}

const App = ({ emitter }: Props) => {
  const [event, setEvent] = useState('Listening to events...')

  emitter.on('newEvent', (date: string) => setEvent(date))

  return (
    <Box
      p={4}
      mb={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'relative',
        border: `2px dashed ${RIGHT_MFE_COLOR}`,
        minHeight: 36,
      }}
    >
      <Typography variant="body2">{event}</Typography>

      <Label color={RIGHT_MFE_COLOR} label={RIGHT_MFE_LABEL} />
    </Box>
  )
}

export default App
