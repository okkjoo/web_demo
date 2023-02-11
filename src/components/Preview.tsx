import React, { useEffect } from 'react'
import Iframe from './Iframe'
import { useState } from 'react'
import '../css/App.css'

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

  // 通过动态插入样式表设置样式
  const cssLinkHref = 'App.css'
  useEffect(() => {
    let cssLink = document.createElement('link')
    cssLink.href = cssLinkHref
    cssLink.rel = 'stylesheet'
    cssLink.type = 'text/css'

    const iframeDom = window.frames[id].contentDocument
    /* or (
      document.getElementById(id) as HTMLIFrameElement
    )?.contentDocument */

    // console.log('iframeDom', iframeDom)
    // console.log(cssLink)

    const headDom = iframeDom
      ?.getElementsByTagName('HEAD')
      .item(0)
    // console.log('headDom', headDom)
    headDom?.appendChild(cssLink)
  }, [cssLinkHref, id])
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
