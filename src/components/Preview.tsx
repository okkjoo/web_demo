import React, { useEffect } from 'react'
import Iframe from './Iframe'
import { useState } from 'react'

type IPreivew = {
  MobileUI: React.FC
  id: string
}
const Preview: React.FC<IPreivew> = ({ MobileUI, id }) => {
  const width = document.body.offsetWidth
  const [refresh, setRefresh] = useState(true)
  const isMobile = width < 768

  // 保证窗口变化后重新渲染 —— 后续可以节流优化一下
  useEffect(() => {
    const resizeListener = () => {
      setRefresh(!refresh)
    }
    window.addEventListener('resize', resizeListener)
    return () =>
      window.removeEventListener('resize', resizeListener)
  })

  return isMobile ? (
    <div>
      <MobileUI />
    </div>
  ) : (
    <>
      {' '}
      <Iframe
        title='Preview'
        id={id}
        style={{
          width: ' 400px',
          height: '690px',
          marginLeft: '200px',
          marginTop: '50px',
          border: '1px solid #000',
        }}
      >
        <MobileUI />
      </Iframe>
    </>
  )
}

export default Preview
