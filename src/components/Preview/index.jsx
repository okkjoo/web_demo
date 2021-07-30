import React, { Component } from 'react'
/* globals marked, Prism, ,  */
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

// INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

export default class Preview extends Component {
  render() {
    return (
      <div
      dangerouslySetInnerHTML={{
        __html: marked(this.props.markdown, { renderer })
      }}
      id="preview"
    />
    )
  }
}
