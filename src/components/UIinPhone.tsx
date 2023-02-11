import React from 'react'
import '../css/App.css' //这样引入样式对于iframe中的组件是无效的

/**
 *
 * @returns 移动端的界面
 */
const UIinPhone: React.FC = () => {
  const handleClick: React.MouseEventHandler<
    HTMLDivElement
  > = (e) => {
    // console.log((e.target as HTMLDivElement).className)
    console.log(e.target as HTMLDivElement)
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
      }}
      onClick={handleClick}
    >
      <header
        style={{
          backgroundColor: 'aqua',
          width: '100vw',
          flexBasis: '100px',
        }}
      >
        header
      </header>
      <main
        style={{
          backgroundColor: 'bisque',
          flexGrow: 1,
        }}
      >
        main
      </main>
      <footer
        style={{
          backgroundColor: 'cadetblue',
          flexBasis: '100px',
        }}
      >
        footer
      </footer>
    </div>
  )
}

export default UIinPhone
