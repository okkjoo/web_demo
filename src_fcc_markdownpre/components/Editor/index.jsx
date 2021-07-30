import React from 'react'

export default function Editor(props) {
  return (
    <textarea
      id="editor"
      onChange={props.onChange}
      type="text"
      value={props.markdown}
    />
  )
}

