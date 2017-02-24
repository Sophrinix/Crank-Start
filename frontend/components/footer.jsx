const React = require('react')

module.exports = React.createClass({
  render(){
    const footerClass = (this.props.show ? "show-footer" : "hide-footer");

    return  (
      <footer className={footerClass}>
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-top-left">
              <div className="pr-container">
                <ul className="pr-links">
                  <h5>About Us</h5>
                  <li>Our Mission</li>
                  <li>Press</li>
                  <li>Spotlight</li>
                </ul>
              </div>
              <div className="help-container">
                <ul>
                  <h5>Help</h5>
                  <li>Support</li>
                  <li>FAQ</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="footer-top-right">


            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-logo">Quack<span className="footer-span">Start</span></div>
            <p>2017</p>
          </div>
        </div>
      </footer>
    );
  }
});
