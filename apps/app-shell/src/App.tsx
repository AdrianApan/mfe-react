import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import Nav from './components/Nav'
import Label from './components/Label'

const One = React.lazy(() => import('one/App'))
const Two = React.lazy(() => import('two/App'))

const APP_SHELL_COLOR = '#9ab4e9'

const App = () => {
  const [showBoundaries, setShowBoundaries] = useState(false)

  const toggleBoundaries = () => setShowBoundaries((prevShowBoundaries) => !prevShowBoundaries)

  return (
    <Router>
      <Box
        p={2}
        sx={{
          position: 'relative',
          border: `2px dashed ${showBoundaries ? APP_SHELL_COLOR : 'transparent'}`,
        }}
      >
        <Box mb={2}>
          <Nav showBoundaries={showBoundaries} toggleBoundaries={toggleBoundaries} />
        </Box>

        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="Loading...">
                <One />
              </React.Suspense>
            }
          />
          <Route
            path="/horizontal"
            element={
              <React.Suspense fallback="Loading...">
                <Two />
              </React.Suspense>
            }
          />
        </Routes>
        {showBoundaries && <Label color={APP_SHELL_COLOR} label="app-shell" />}
      </Box>
    </Router>
  )
}

export default App
