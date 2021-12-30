import React from 'react'
import { Box, Typography } from '@mui/material'

import { LEFT_MFE_COLOR, LEFT_MFE_LABEL } from './constants'

import Label from './components/Label'

const App = () => (
  <Box
    p={4}
    mb={2}
    sx={{
      position: 'relative',
      border: `2px dashed ${LEFT_MFE_COLOR}`,
    }}
  >
    <Typography variant="body2" align="center">
      This content lives in the Left MFE
    </Typography>

    <Label color={LEFT_MFE_COLOR} label={LEFT_MFE_LABEL} />
  </Box>
)

export default App
