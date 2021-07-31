import React, { Component } from "react";
import "./css/login.min.css";
export default class Login extends Component {
	render() {
		return (
			<div className="container">
				<h1>Please Login</h1>
				<form>
					<div className="form-control">
						<input type="text" required />
						<label>
							{/* css方法 */}
							<span style={{ transitionDelay: "0ms" }}>E</span>
							<span style={{ transitionDelay: "50ms" }}>m</span>
							<span style={{ transitionDelay: "100ms" }}>a</span>
							<span style={{ transitionDelay: "150ms" }}>i</span>
							<span style={{ transitionDelay: "200ms" }}>l</span>
						</label>
					</div>
					<div className="form-control">
						<input type="password" required />
						<label>
							{/* js方法 */}
							{"Password".split("").map((letter, idx) => (
								<span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
									{letter}
								</span>
							))}
						</label>
					</div>
					<button className="btn">Login</button>
					<p className="text">
						Dont't have an account?<a href="#">Register</a>
					</p>
				</form>
			</div>
		);
	}
}
