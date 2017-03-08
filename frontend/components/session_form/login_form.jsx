import React from 'react';
import { Link, withRouter } from 'react-router';
import { login } from '../../actions/session_actions';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
    this.launchDemo = this.launchDemo.bind(this);
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


	launchDemo() {
    let i = 1;
    let that = this;
    const demoUser = "Thanks for stopping by!";
    const intervalID = setInterval(function () {
      if (i < demoUser.length) {
        that.setState({ username: demoUser.slice(0, i) });
      } else if (i === demoUser.length) {
        that.setState({ username: demoUser.slice(0, i + 1)});
        that.setState({ password: "super_groovy" });
      } else {
        window.clearInterval(intervalID);
        login({ user: that.state });
				document.getElementById("data-form").click();
      }
      i++;
    }, 75);
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
      <div>
      <div className="login-link">
  			<div className="login-container">
  				<form onSubmit={this.handleSubmit} className="login-form-box">
  					<h2 className="login-title">Log In</h2>
  					{this.renderErrors()}
  					<div className="login-form">
  						<br/>
              <label>
  							<input className="login-input" type="text" placeholder="username"
  								value={this.state.username}
  								onChange={this.update("username")} />
              </label>
  						<label>
  							<input className="login-input" type="password" placeholder="password"
  								value={this.state.password}
  								onChange={this.update("password")}/>
              </label>
  						<br/>
  						<input id="data-form" className="signup-button" type="submit" value="Log Me In!" />
  					</div>
             <li id="demo-or">Or</li>
            <label>
              <input type="button" value="View the Demo"
                onClick={this.launchDemo} onChange={this.updateInputText} className="demo"/>

            </label>
  				</form>
          <div className="content-frame-header">
            New to CrankStart? <Link id="signup-link" to="/signup">Sign up</Link>
          </div>
  			</div>
      </div>
      </div>
		);
	}
}

export default withRouter(LoginForm);
