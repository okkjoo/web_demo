import React, { Component } from "react";

export default class Jokes extends Component {
	render() {
		return <div id="joke" className="joke">
      {this.props.joke}
    </div>;
	}
}
