import React, { Component } from "react";
import "./css/App.min.css";
export default class App extends Component {
	state = {
		active: "",
	};
	handleClick = idx => {
		this.setState({
			activeid: idx,
		});
	};
	render() {
		const urlArr = [
			"/pictures/flower1.jpg",
			"/pictures/flower2.jpg",
			"/pictures/flower3.jpg",
			"/pictures/flower4.jpg",
			"/pictures/flower5.jpg",
		];
		const h3Arr = ["FLOWER!", "FLOWER@", "FLOWER#", "FLOWER$", "FLOWER%"];
		const pennels = urlArr.map((url, idx) => {
			const activeFlag = this.state.activeid === idx?'active':''
			return (
				<div
					key={idx}
					className={`pannel ${activeFlag}`}
					style={{ backgroundImage: `url(${url})` }}
					onClick={() => this.handleClick(idx)}
				>
					<h3>{h3Arr[idx]}</h3>
				</div>
			);
		});
		return (
			<div className="container">
				{pennels}				
			</div>
		);
	}
}
