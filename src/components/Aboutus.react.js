import React from 'react';
import {Button} from 'react-bootstrap';


export default class AboutUs extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.context.router.transitionTo('home');
  }

  render() {
    return (
      <div id="aboutUs">
        <h1><em>Hi!</em>Did you find this website useful?</h1>

        <p>This is a non-profit project with no other purpose than giving information about Chicago&#39;s train service departure and arrival hours, in a fast and practical matter.</p>
        <p>All data is retrieved from <a href="http://metrarail.com/metra/en/home.html" target="_blank">Metra rail station&#39;s official website</a> and we are not associated in any way with <a href="http://metrarail.com/metra/en/home.html" target="_blank">Metra</a> or intend to impersonate their brand or website.</p>
        <p>We are not responsible of any misinformation or inconvenients caused by de use or misuse of this webpage.</p>
        <p>If you’ll like to get more information about us or this website please <a href="mailto:info@mintitmedia.com" title="Contact Us">contact us</a> in our email <a href="mailto:info@mintitmedia.com" title="Contact Us">info@mintitmedia.com</a></p>

        <Button onClick={this.handleClick}><span className="leftButtonDecoration">Back to home</span></Button>
      </div>
    );
  }
}

AboutUs.contextTypes = {
  router: React.PropTypes.func.isRequired,
};
