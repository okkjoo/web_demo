import React, { Component } from 'react'

export default class Toobar extends Component {
  render() {
    return (
      <div className='toolbar'>
        <i className="fa fa-free-code-camp" title="no-stack-dub-sack" />
        {this.props.text}
      <i className={this.props.icon} onClick={this.props.onClick} />
      </div>
    )
  }
}
