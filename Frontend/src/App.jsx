import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './app.routes.jsx'

import "./features/shared/styles/global.scss"


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App