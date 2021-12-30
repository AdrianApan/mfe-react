import React from 'react'
import { Box, Typography } from '@mui/material'

import { VERTICAL_MFE_COLOR, VERTICAL_MFE_LABEL } from './constants'

import Label from './components/Label'

const App = () => {
  return (
    <Box
      p={2}
      mb={2}
      sx={{
        position: 'relative',
        border: `2px dashed ${VERTICAL_MFE_COLOR}`,
      }}
    >
      <Typography variant="h5" mb={1}>
        This content lives in the vertical MFE
      </Typography>

      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>

      <Label color={VERTICAL_MFE_COLOR} label={VERTICAL_MFE_LABEL} />
    </Box>
  )
}

export default App
