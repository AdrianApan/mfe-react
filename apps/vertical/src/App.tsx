import React from 'react'
import { Box, Typography } from '@mui/material'

import { VERTICAL_MFE_COLOR, VERTICAL_MFE_LABEL } from './constants'

import Label from './components/Label'

const App = () => (
  <Box
    p={2}
    mb={2}
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{
      position: 'relative',
      border: `2px dashed ${VERTICAL_MFE_COLOR}`,
    }}
  >
    <Typography variant="h5" p={2} align="center">
      This content lives in the Vertical MFE
    </Typography>

    <Label color={VERTICAL_MFE_COLOR} label={VERTICAL_MFE_LABEL} />
  </Box>
)

export default App
