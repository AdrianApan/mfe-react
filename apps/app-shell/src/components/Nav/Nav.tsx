import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'

interface Props {
  showBoundaries: boolean
  toggleBoundaries: () => void
}

const Nav = ({ showBoundaries, toggleBoundaries }: Props) => {
  const navigate = useNavigate()
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ borderBottom: '1px solid #d3d3d3' }}
    >
      <Box>
        <Button size="small" onClick={() => navigate('/')}>
          Vertical
        </Button>
        <Button size="small" onClick={() => navigate('/horizontal')}>
          Horizontal
        </Button>
      </Box>

      <Button size="small" onClick={() => toggleBoundaries()}>
        {showBoundaries ? 'Hide' : 'Show'} boundaries
      </Button>
    </Box>
  )
}

export default Nav
