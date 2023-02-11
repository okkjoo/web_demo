import React from 'react'
import Preview from './components/Preview'
import UIinPhone from './components/UIinPhone'

const App: React.FC = () => {
  return (
    <>
      <Preview MobileUI={UIinPhone} id='preview' />
    </>
  )
}
export default App
