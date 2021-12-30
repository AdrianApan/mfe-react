import React from 'react'
import { Chip } from '@mui/material'

interface Props {
  color: string
  label: string
}

const Label = ({ color, label }: Props) => (
  <Chip
    label={label}
    size="small"
    sx={{
      backgroundColor: color,
      borderRadius: 0,
      position: 'absolute',
      right: -2,
      bottom: -2,
    }}
  />
)

export default Label
