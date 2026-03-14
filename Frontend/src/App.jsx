import React from 'react'
import FaceExpression from './features/components/FaceExpression';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Face Expression Detection</h1>
      <FaceExpression />
    </div>
  )
}

export default App