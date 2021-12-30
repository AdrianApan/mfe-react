import React from 'react'
import { Box, Typography } from '@mui/material'

import { VERTICAL_MFE_COLOR, VERTICAL_MFE_LABEL } from './constants'

import Label from './components/Label'

const App = () => (
  <Box
    p={2}
    mb={2}
    sx={{
      position: 'relative',
      border: `2px dashed ${VERTICAL_MFE_COLOR}`,
    }}
  >
    <Typography variant="h5" mb={1}>
      This content lives in the Horizontal MFE shell
    </Typography>

    <Typography variant="body2">Add antoher two MFEs here.</Typography>

    <Label color={VERTICAL_MFE_COLOR} label={VERTICAL_MFE_LABEL} />
  </Box>
)

export default App
