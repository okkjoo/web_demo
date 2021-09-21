import React from 'react'
import useMousePostion from './hooks/useMousePosition'

const App: React.FC = () => {
  const position = useMousePostion()
  return (
    <>
      <p>
        X:{position.x},Y:{position.y}
      </p>
    </>
  )
}
export default App
