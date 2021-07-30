import React, { Component } from "react";
import "./css/App.min.css";
import { placeholder } from "./constant.js";
import Toolbar from "./components/Toolbar";
// import Preview from './components/Preview'
import Editor from "./components/Editor";
import Preview from "./components/Preview";

// /* globals marked, Prism, ,  */
/* eslint-disable react/prop-types, no-nested-ternary */

export default class App extends Component {
  state = {
    markdown: placeholder,
    editorMaximized: false,
    previewMaximized: false
  }
  handleEditorSize= ()=>{
    this.setState({
      editorMaximized:!this.state.editorMaximized
    })
  }
  handlePreviewMaximize= ()=>{
    this.setState({
      previewMaximized:!this.state.previewMaximized
    })
  }
  handleChange = (e)=>{
    this.setState({
      markdown:e.target.value
    })
  }
	render() {
    const classes = this.state.editorMaximized
      ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
      : this.state.previewMaximized
      ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
      : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
		return (
			<div className='grid'>
				<div className={classes[0]}>
					<Toolbar icon={classes[2]} onClick={this.handleEditorSize} text="Editer"/>
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />					
				</div>
				<div className={classes[1]}>
          <Toolbar
            icon={classes[2]}
            onClick={this.handlePreviewMaximize}
            text="Previewer"
          />
          <Preview markdown={this.state.markdown} />				
				</div>
        
			</div>
		);
	}
}
