import React from 'react'

const One = React.lazy(() => import('acme_one/App'))
const Two = React.lazy(() => import('acme_two/App'))

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
