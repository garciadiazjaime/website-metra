'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var AboutUs = (function (_React$Component) {
  _inherits(AboutUs, _React$Component);

  function AboutUs(props) {
    _classCallCheck(this, AboutUs);

    _get(Object.getPrototypeOf(AboutUs.prototype), 'constructor', this).call(this, props);
    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(AboutUs, [{
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      this.context.router.transitionTo('home');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'aboutUs' },
        _react2['default'].createElement(
          'h1',
          null,
          _react2['default'].createElement(
            'em',
            null,
            'Hi!'
          ),
          'Did you find this website useful?'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'This is a non-profit project with no other purpose than giving information about Chicago\'s train service departure and arrival hours, in a fast and practical matter.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'All data is retrieved from ',
          _react2['default'].createElement(
            'a',
            { href: 'http://metrarail.com/metra/en/home.html', target: '_blank' },
            'Metra rail station\'s official website'
          ),
          ' and we are not associated in any way with ',
          _react2['default'].createElement(
            'a',
            { href: 'http://metrarail.com/metra/en/home.html', target: '_blank' },
            'Metra'
          ),
          ' or intend to impersonate their brand or website.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'We are not responsible of any misinformation or inconvenients caused by de use or misuse of this webpage.'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'If you’ll like to get more information about us or this website please ',
          _react2['default'].createElement(
            'a',
            { href: 'mailto:info@mintitmedia.com', title: 'Contact Us' },
            'contact us'
          ),
          ' in our email ',
          _react2['default'].createElement(
            'a',
            { href: 'mailto:info@mintitmedia.com', title: 'Contact Us' },
            'info@mintitmedia.com'
          )
        ),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          { onClick: this.handleClick },
          _react2['default'].createElement(
            'span',
            { className: 'leftButtonDecoration' },
            'Back to home'
          )
        )
      );
    }
  }]);

  return AboutUs;
})(_react2['default'].Component);

exports['default'] = AboutUs;

AboutUs.contextTypes = {
  router: _react2['default'].PropTypes.func.isRequired
};
module.exports = exports['default'];