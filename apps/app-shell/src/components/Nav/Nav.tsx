import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'

const Nav = () => (
  <Box
    display="flex"
    justifyContent="flex-start"
    alignItems="center"
    sx={{ borderBottom: '1px solid #d3d3d3' }}
  >
    <Button size="small" component={Link} to={'/'}>
      Vertical
    </Button>

    <Button size="small" component={Link} to={'/horizontal'}>
      Horizontal
    </Button>
  </Box>
)

export default Nav
