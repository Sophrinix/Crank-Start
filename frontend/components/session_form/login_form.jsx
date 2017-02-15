import React from 'react';
import { Link, withRouter } from 'react-router';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
      console.log('redirecting');
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
      <div className="login-link">
  			<div className="login-container">
  				<form onSubmit={this.handleSubmit} className="login-form-box">
  					<h2>Log In</h2>
  					<br/>
  					{this.renderErrors()}
  					<div className="login-form">
  						<br/>
              <label>
  							<input className="input" type="text" placeholder="username"
  								value={this.state.name}
  								onChange={this.update("username")} />
  						</label>
  						<label>
  							<input className="input" type="password" placeholder="password"
  								value={this.state.password}
  								onChange={this.update("password")}/>
  						</label>
  						<br/>
  						<input className="signup-button" type="submit" value="Log Me In!" />
  					</div>
  				</form>
  			</div>
      </div>
		);
	}
}

export default withRouter(LoginForm);
