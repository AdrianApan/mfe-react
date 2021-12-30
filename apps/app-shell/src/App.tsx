import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import { APP_SHELL_COLOR, APP_SHELL_LABEL } from './constants'

import Nav from './components/Nav'
import Label from './components/Label'

const Vertical = React.lazy(() => import('vertical/App'))
const Two = React.lazy(() => import('two/App'))

const renderMFE = (MFE: React.FunctionComponent) => {
  return (
    <React.Suspense fallback="Loading...">
      <MFE />
    </React.Suspense>
  )
}

const App = () => {
  return (
    <Router>
      <Box
        p={2}
        sx={{
          position: 'relative',
          border: `2px dashed ${APP_SHELL_COLOR}`,
        }}
      >
        <Box mb={2}>
          <Nav />
        </Box>

        <React.Suspense fallback="Loading...">
          <Switch>
            <Route exact path="/" render={() => renderMFE(Vertical)} />
            <Route path="/horizontal" render={() => renderMFE(Two)} />
          </Switch>
        </React.Suspense>
        <Label color={APP_SHELL_COLOR} label={APP_SHELL_LABEL} />
      </Box>
    </Router>
  )
}

export default App
