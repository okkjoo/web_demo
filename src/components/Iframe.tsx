import React, { useRef } from 'react'
import { createPortal } from 'react-dom'

type IIframe = {
  style: React.CSSProperties
  title: string
  id: string
}
const Iframe: React.FC<IIframe> = ({
  id,
  title,
  children,
  ...props
}) => {
  const contentRef = useRef<HTMLIFrameElement>(null!)

  const mountNode =
    contentRef.current?.contentWindow?.document?.body

  return (
    <iframe
      id={id}
      title={title}
      ref={contentRef}
      {...props}
      scrolling='no'
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  )
}

export default Iframe
