import React from 'react'
import Preview from './components/Preview'
import UIinPhone from './components/UIinPhone'
import './css/App.css'

const App: React.FC = () => {
  return (
    <>
      <Preview MobileUI={UIinPhone} />
    </>
  )
}
export default App
