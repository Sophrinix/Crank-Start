import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "", username: "", email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
      <div className="content-frame-header">
        Have an account? <Link id="login-link" to="/login">Log in</Link>
  			<div className="signup-container">
  				<form onSubmit={this.handleSubmit} className="login-form-box">
  					<h2 className="signup-title">Sign Up</h2>
  					<br/>
  					{this.renderErrors()}
  					<div className="signup-form">
  						<br/>
              <label>
  							<input className="input" type="text"
                  autofocus="autofocus"
                   placeholder="Name"
  								value={this.state.name}
  								onChange={this.update("name")}
  								className="login-input" />
  						</label>
  						<label>
  							<input className="input" type="text"
                  autofocus="autofocus"
                   placeholder="Username"
  								value={this.state.username}
  								onChange={this.update("username")}
  								 />
  						</label>
              <label>
  							<input className="input" type="text" autofocus="autofocus"
                   placeholder="Email"
  								value={this.state.email}
  								onChange={this.update("email")}
  								className="login-input" />
  						</label>
  						<br/>
  						<label>
  							<input className="input" type="password"
                  autofocus="autofocus"
                   placeholder="Password"
  								value={this.state.password}
  								onChange={this.update("password")}
  								className="login-input" />
  						</label>
  						<br/>
  						<input className="signup-button" type="submit" value="Sign me up!" />
  					</div>
  				</form>
  			</div>
      </div>
		);
	}
}

export default withRouter(SessionForm);
