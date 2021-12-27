import React from 'react'

const One = React.lazy(() => import('one/App'))
const Two = React.lazy(() => import('two/App'))

const App = () => (
  <>
    <p>This lives in the app shell</p>
    <React.Suspense fallback="Loading...">
      <One />
      <br />
      <Two />
    </React.Suspense>
  </>
)

export default App
