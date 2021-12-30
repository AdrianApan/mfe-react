import React from 'react'
import { Box, Typography } from '@mui/material'

import { RIGHT_MFE_COLOR, RIGHT_MFE_LABEL } from './constants'

import Label from './components/Label'

const App = () => (
  <Box
    p={4}
    mb={2}
    sx={{
      position: 'relative',
      border: `2px dashed ${RIGHT_MFE_COLOR}`,
    }}
  >
    <Typography variant="body2" align="center">
      This content lives in the Right MFE
    </Typography>

    <Label color={RIGHT_MFE_COLOR} label={RIGHT_MFE_LABEL} />
  </Box>
)

export default App
