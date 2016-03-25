require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dispatcherAppDispatcher = require('../dispatcher/AppDispatcher');

var _dispatcherAppDispatcher2 = _interopRequireDefault(_dispatcherAppDispatcher);

var _constantsLineConstants = require('../constants/LineConstants');

var _constantsLineConstants2 = _interopRequireDefault(_constantsLineConstants);

exports['default'] = {

  // ---- LINES
  requestLines: function requestLines(line) {
    _dispatcherAppDispatcher2['default'].dispatch({
      actionType: _constantsLineConstants2['default'].REQUEST_LINES,
      line: line
    });
  },

  // ---- STATIONS
  requestSations: function requestSations(line) {
    _dispatcherAppDispatcher2['default'].dispatch({
      actionType: _constantsLineConstants2['default'].REQUEST_STATIONS,
      line: line
    });
  },

  // ---- SCHEDULE
  requestSchedule: function requestSchedule(line, stationFrom, stationTo, day) {
    _dispatcherAppDispatcher2['default'].dispatch({
      actionType: _constantsLineConstants2['default'].REQUEST_SCHEDULE,
      line: line,
      station_from: stationFrom,
      station_to: stationTo,
      day: day
    });
  }

};
module.exports = exports['default'];
},{"../constants/LineConstants":12,"../dispatcher/AppDispatcher":13}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = window.React;

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
},{"react-bootstrap":76}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = window.React;

var _react2 = _interopRequireDefault(_react);

var Footer = (function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    _get(Object.getPrototypeOf(Footer.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "container" },
        _react2["default"].createElement(
          "p",
          null,
          "Powered by",
          _react2["default"].createElement(
            "a",
            { href: "http://mintitmedia.com/", title: "Mint IT Media - Design and web development", target: "_blank" },
            "Mint"
          )
        )
      );
    }
  }]);

  return Footer;
})(_react2["default"].Component);

exports["default"] = Footer;
module.exports = exports["default"];
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = window.React;

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var Header = (function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Header, [{
    key: 'handleClick',
    value: function handleClick(goTo, event) {
      event.preventDefault();
      this.context.router.transitionTo(goTo);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'container' },
        _react2['default'].createElement(
          'h1',
          { id: 'brand' },
          _react2['default'].createElement(
            'a',
            { onClick: this.handleClick.bind(this, 'home'), title: 'Return to home' },
            _react2['default'].createElement(
              'em',
              null,
              'Branding'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'hidden' },
              'Metra Train schedules in Chicago'
            )
          )
        ),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          { id: 'infoButton', onClick: this.handleClick.bind(this, 'aboutus') },
          'i'
        )
      );
    }
  }]);

  return Header;
})(_react2['default'].Component);

exports['default'] = Header;

Header.contextTypes = {
  router: _react2['default'].PropTypes.func.isRequired
};
module.exports = exports['default'];
},{"react-bootstrap":76}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = window.React;

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _widgetsSelectStationReact = require('./widgets/SelectStation.react');

var _widgetsSelectStationReact2 = _interopRequireDefault(_widgetsSelectStationReact);

var _widgetsSelectLineReact = require('./widgets/SelectLine.react');

var _widgetsSelectLineReact2 = _interopRequireDefault(_widgetsSelectLineReact);

var _widgetsSelectDayReact = require('./widgets/SelectDay.react');

var _widgetsSelectDayReact2 = _interopRequireDefault(_widgetsSelectDayReact);

var _actionsLineActions = require('../actions/LineActions');

var _actionsLineActions2 = _interopRequireDefault(_actionsLineActions);

var _storesLineStore = require('../stores/LineStore');

var _storesLineStore2 = _interopRequireDefault(_storesLineStore);

function getLineState() {
  return {
    lines: _storesLineStore2['default'].getLines(),
    stations: _storesLineStore2['default'].getStations(),
    selectedLine: _storesLineStore2['default'].getSelectedLine(),
    stationFrom: _storesLineStore2['default'].getSelectedStations().stationFrom,
    stationTo: _storesLineStore2['default'].getSelectedStations().stationTo,
    day: _storesLineStore2['default'].getSelectedStations().day
  };
}

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
    this.handleClick = this.handleClick.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state = getLineState();
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesLineStore2['default'].addChangeListener(this._onChange);
      _actionsLineActions2['default'].requestLines();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesLineStore2['default'].removeChangeListener(this._onChange);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      var selectedRide = this._getRideCodes(this.state.lines, this.state.stations, this.state.selectedLine, this.state.stationFrom, this.state.stationTo, this.state.day);
      this.context.router.transitionTo('schedule', selectedRide);
    }
  }, {
    key: '_onLineChange',
    value: function _onLineChange(event) {
      _actionsLineActions2['default'].requestSations(event.target.value);
    }
  }, {
    key: '_onStationChange',
    value: function _onStationChange(ref, event) {
      _storesLineStore2['default'].setStation(ref, parseInt(event.target.value, 10));
      this._onChange();
    }
  }, {
    key: '_onDayChange',
    value: function _onDayChange(event) {
      _storesLineStore2['default'].setDay(parseInt(event.target.value, 10));
      this._onChange();
    }
  }, {
    key: '_getRideCodes',
    value: function _getRideCodes(lines, stations, selectedLine, userStationFrom, userStationTo, day) {
      var dayName = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      var line = lines.filter(function (data) {
        return data.id === selectedLine;
      });

      var stationFrom = undefined;
      var stationTo = undefined;
      var index = 0;
      var len = stations.length;
      for (; index < len; index++) {
        if (stations[index].id === userStationFrom) {
          stationFrom = stations[index].code;
        }
        // TODO: add validation to not allow select same station. Convert this if into an else if
        if (stations[index].id === userStationTo) {
          stationTo = stations[index].code;
        }
        if (stationFrom && stationTo) {
          break;
        }
      }

      return {
        line: line[0].code,
        stationFrom: stationFrom,
        stationTo: stationTo,
        day: dayName[day].toLowerCase()
      };
    }
  }, {
    key: '_onChange',
    value: function _onChange() {
      this.setState(getLineState());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'p',
          null,
          'Welcome to Easy Metra Chicago, where you can consult departure and arrival hours of Metra\'s rail service. '
        ),
        _react2['default'].createElement(
          'label',
          null,
          'Train line'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'selectWrap' },
          _react2['default'].createElement(_widgetsSelectLineReact2['default'], { data: this.state.lines, name: 'line', handleChange: this._onLineChange, selectedLine: this.state.selectedLine })
        ),
        _react2['default'].createElement(
          'label',
          null,
          'Departing station'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'selectWrap' },
          _react2['default'].createElement(_widgetsSelectStationReact2['default'], { data: this.state.stations, handleChange: this._onStationChange.bind(this, 'stationFrom'), selectedStation: this.state.stationFrom })
        ),
        _react2['default'].createElement(
          'label',
          null,
          'Destination station'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'selectWrap' },
          _react2['default'].createElement(_widgetsSelectStationReact2['default'], { data: this.state.stations, handleChange: this._onStationChange.bind(this, 'stationTo'), selectedStation: this.state.stationTo })
        ),
        _react2['default'].createElement(
          'label',
          null,
          'Day'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'selectWrap' },
          _react2['default'].createElement(_widgetsSelectDayReact2['default'], { handleChange: this._onDayChange.bind(this), selectedDay: this.state.day })
        ),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          { onClick: this.handleClick },
          _react2['default'].createElement(
            'span',
            { className: 'rightButtonDecoration' },
            'View Schedule'
          )
        )
      );
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports['default'] = Home;

Home.contextTypes = {
  router: _react2['default'].PropTypes.func.isRequired
};
module.exports = exports['default'];
},{"../actions/LineActions":1,"../stores/LineStore":15,"./widgets/SelectDay.react":9,"./widgets/SelectLine.react":10,"./widgets/SelectStation.react":11,"react-bootstrap":76}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = window.React;

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _HeaderReact = require('./Header.react');

var _HeaderReact2 = _interopRequireDefault(_HeaderReact);

var _FooterReact = require('./Footer.react');

var _FooterReact2 = _interopRequireDefault(_FooterReact);

var Layout = (function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'header',
          { id: 'header' },
          _react2['default'].createElement(_HeaderReact2['default'], null)
        ),
        _react2['default'].createElement(
          'div',
          { id: 'mainContent', className: 'container' },
          _react2['default'].createElement(_reactRouter.RouteHandler, null)
        ),
        _react2['default'].createElement(
          'footer',
          { id: 'footer' },
          _react2['default'].createElement(_FooterReact2['default'], null)
        )
      );
    }
  }]);

  return Layout;
})(_react2['default'].Component);

exports['default'] = Layout;
module.exports = exports['default'];
},{"./Footer.react":3,"./Header.react":4,"react-router":111}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = window.React;

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _widgetsRideTableReact = require('./widgets/RideTable.react');

var _widgetsRideTableReact2 = _interopRequireDefault(_widgetsRideTableReact);

var _actionsLineActions = require('../actions/LineActions');

var _actionsLineActions2 = _interopRequireDefault(_actionsLineActions);

var _storesLineStore = require('../stores/LineStore');

var _storesLineStore2 = _interopRequireDefault(_storesLineStore);

function getRideState() {
  return {
    ride: _storesLineStore2['default'].getRide(),
    labels: _storesLineStore2['default'].getLabels()
  };
}

var SchedulePanel = (function (_React$Component) {
  _inherits(SchedulePanel, _React$Component);

  function SchedulePanel(props) {
    _classCallCheck(this, SchedulePanel);

    _get(Object.getPrototypeOf(SchedulePanel.prototype), 'constructor', this).call(this, props);
    this.handleClick = this.handleClick.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state = getRideState();
  }

  _createClass(SchedulePanel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dayName = ['', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      _storesLineStore2['default'].addChangeListener(this._onChange);
      _actionsLineActions2['default'].requestSchedule(this.props.params.line, this.props.params.stationFrom, this.props.params.stationTo, dayName.indexOf(this.props.params.day));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesLineStore2['default'].resetRide();
      _storesLineStore2['default'].removeChangeListener(this._onChange);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      this.context.router.transitionTo('home');
    }
  }, {
    key: '_onChange',
    value: function _onChange() {
      this.setState(getRideState());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h2',
          { id: 'scheduleTitle' },
          this.state.labels.line,
          '\'s Schedule ',
          _react2['default'].createElement(
            'span',
            { className: 'small' },
            'From ',
            this.state.labels.stationFrom,
            ' to ',
            this.state.labels.stationTo
          )
        ),
        _react2['default'].createElement(_widgetsRideTableReact2['default'], { data: this.state.ride, id: 'scheduleTable' }),
        _react2['default'].createElement(
          _reactBootstrap.Button,
          { onClick: this.handleClick },
          _react2['default'].createElement(
            'span',
            { className: 'rightButtonDecoration' },
            'New search'
          )
        ),
        _react2['default'].createElement(
          'p',
          { className: 'smallNote' },
          '* Scheduled time is displayed '
        )
      );
    }
  }]);

  return SchedulePanel;
})(_react2['default'].Component);

exports['default'] = SchedulePanel;

SchedulePanel.contextTypes = {
  router: _react2['default'].PropTypes.func.isRequired
};

SchedulePanel.propTypes = {
  params: {
    line: _react2['default'].PropTypes.string,
    stationFrom: _react2['default'].PropTypes.string,
    stationTo: _react2['default'].PropTypes.string,
    day: _react2['default'].PropTypes.string
  }
};
module.exports = exports['default'];
},{"../actions/LineActions":1,"../stores/LineStore":15,"./widgets/RideTable.react":8,"react-bootstrap":76}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = window.React;

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var RideTable = (function (_React$Component) {
  _inherits(RideTable, _React$Component);

  function RideTable() {
    _classCallCheck(this, RideTable);

    _get(Object.getPrototypeOf(RideTable.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(RideTable, [{
    key: 'getRideRender',
    value: function getRideRender(data) {
      return data.map(function (item, index) {
        return _react2['default'].createElement(
          _reactBootstrap.Row,
          { key: index },
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 4 },
            item.time_start.toLowerCase()
          ),
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 4 },
            item.time_end.toLowerCase()
          ),
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 2 },
            _react2['default'].createElement(
              'span',
              { className: 'smallerText' },
              item.train_num
            )
          ),
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 2 },
            _react2['default'].createElement(
              'span',
              { className: 'smallerText' },
              item.allow_bikes ? 'Y' : null
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var rideRender = this.props.data.length ? this.getRideRender(this.props.data) : null;

      return _react2['default'].createElement(
        'div',
        { id: this.props.id },
        _react2['default'].createElement(
          _reactBootstrap.Row,
          null,
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 4 },
            'Departure'
          ),
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 4 },
            'Arrival'
          ),
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 2 },
            'Train'
          ),
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 2 },
            'Bike'
          )
        ),
        rideRender
      );
    }
  }]);

  return RideTable;
})(_react2['default'].Component);

exports['default'] = RideTable;

RideTable.propTypes = {
  id: _react2['default'].PropTypes.string,
  data: _react2['default'].PropTypes.array
};
module.exports = exports['default'];
},{"react-bootstrap":76}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = window.React;

var _react2 = _interopRequireDefault(_react);

var SelectDay = (function (_React$Component) {
  _inherits(SelectDay, _React$Component);

  function SelectDay() {
    _classCallCheck(this, SelectDay);

    _get(Object.getPrototypeOf(SelectDay.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SelectDay, [{
    key: 'render',
    value: function render() {
      var dayNumber = new Date().getDay();
      var dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var optionsRender = [0, 1, 2, 3, 4, 5, 6].map(function (index) {
        return _react2['default'].createElement(
          'option',
          { value: (dayNumber + index) % 7 || 7, key: index },
          dayName[(dayNumber + index) % 7]
        );
      });
      return _react2['default'].createElement(
        'select',
        { onChange: this.props.handleChange, value: this.props.selectedDay },
        optionsRender
      );
    }
  }]);

  return SelectDay;
})(_react2['default'].Component);

exports['default'] = SelectDay;

SelectDay.propTypes = {
  handleChange: _react2['default'].PropTypes.func,
  selectedDay: _react2['default'].PropTypes.string
};
module.exports = exports['default'];
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = window.React;

var _react2 = _interopRequireDefault(_react);

var SelectLine = (function (_React$Component) {
  _inherits(SelectLine, _React$Component);

  function SelectLine() {
    _classCallCheck(this, SelectLine);

    _get(Object.getPrototypeOf(SelectLine.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SelectLine, [{
    key: 'render',
    value: function render() {
      var optionsRender = this.props.data.map(function (item, index) {
        return _react2['default'].createElement(
          'option',
          { value: item.id, key: index },
          item.name
        );
      });
      return _react2['default'].createElement(
        'select',
        { onChange: this.props.handleChange, value: this.props.selectedLine },
        optionsRender
      );
    }
  }]);

  return SelectLine;
})(_react2['default'].Component);

exports['default'] = SelectLine;

SelectLine.propTypes = {
  handleChange: _react2['default'].PropTypes.func,
  selectedLine: _react2['default'].PropTypes.string,
  data: _react2['default'].PropTypes.array
};
module.exports = exports['default'];
},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = window.React;

var _react2 = _interopRequireDefault(_react);

var SelectStation = (function (_React$Component) {
  _inherits(SelectStation, _React$Component);

  function SelectStation() {
    _classCallCheck(this, SelectStation);

    _get(Object.getPrototypeOf(SelectStation.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SelectStation, [{
    key: 'render',
    value: function render() {
      var optionsRender = this.props.data.map(function (item, index) {
        return _react2['default'].createElement(
          'option',
          { value: item.id, key: index },
          item.name
        );
      });

      return _react2['default'].createElement(
        'select',
        { onChange: this.props.handleChange, value: this.props.selectedStation },
        optionsRender
      );
    }
  }]);

  return SelectStation;
})(_react2['default'].Component);

exports['default'] = SelectStation;

SelectStation.propTypes = {
  data: _react2['default'].PropTypes.array,
  handleChange: _react2['default'].PropTypes.func,
  selectedStation: _react2['default'].PropTypes.string
};
module.exports = exports['default'];
},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var keyMirror = require('keymirror');

exports['default'] = keyMirror({
  REQUEST_LINES: null,
  REQUEST_STATIONS: null,
  REQUEST_SCHEDULE: null,
  SET_LINES: null,
  SET_STATIONS: null
});
module.exports = exports['default'];
},{"keymirror":23}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Dispatcher = require('flux').Dispatcher;

exports['default'] = new Dispatcher();
module.exports = exports['default'];
},{"flux":20}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = window.React;

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsLayoutReact = require('./components/Layout.react');

var _componentsLayoutReact2 = _interopRequireDefault(_componentsLayoutReact);

var _componentsHomeReact = require('./components/Home.react');

var _componentsHomeReact2 = _interopRequireDefault(_componentsHomeReact);

var _componentsAboutusReact = require('./components/Aboutus.react');

var _componentsAboutusReact2 = _interopRequireDefault(_componentsAboutusReact);

var _componentsScheduleReact = require('./components/Schedule.react');

var _componentsScheduleReact2 = _interopRequireDefault(_componentsScheduleReact);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { path: '/', handler: _componentsLayoutReact2['default'] },
  _react2['default'].createElement(_reactRouter.DefaultRoute, { name: 'home', handler: _componentsHomeReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { name: 'aboutus', path: '/aboutus', handler: _componentsAboutusReact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { name: 'schedule', path: '/schedule/:line/:stationFrom/:stationTo/:day', handler: _componentsScheduleReact2['default'] })
);
module.exports = exports['default'];
},{"./components/Aboutus.react":2,"./components/Home.react":5,"./components/Layout.react":6,"./components/Schedule.react":7,"react-router":111}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsMetraAPIUtils = require('../utils/MetraAPIUtils');

var _utilsMetraAPIUtils2 = _interopRequireDefault(_utilsMetraAPIUtils);

var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var AppDispatcher = require('../dispatcher/AppDispatcher');
var LineConstants = require('../constants/LineConstants');
var LineActions = require('../actions/LineActions');

var CHANGE_EVENT = 'change';

var _data = {
  cacheStations: {},
  cacheRides: {},
  selectedLine: null,
  lines: [],
  stations: [],
  ride: [],
  stationFrom: null,
  stationTo: null,
  day: new Date().getDay() || 7,
  loadFromScheduleView: false
};

var LineStore = assign({}, EventEmitter.prototype, {

  getLines: function getLines() {
    return _data.lines;
  },

  getSelectedLine: function getSelectedLine() {
    return _data.selectedLine;
  },

  getStations: function getStations() {
    return _data.stations;
  },

  getSelectedStations: function getSelectedStations() {
    return {
      stationFrom: _data.stationFrom,
      stationTo: _data.stationTo,
      day: _data.day
    };
  },

  getRide: function getRide() {
    return _data.ride;
  },

  getLabels: function getLabels() {
    var index = undefined;
    var len = undefined;
    var response = { line: null, stationFrom: null, stationTo: null };
    for (index = 0, len = _data.lines.length; index < len; index++) {
      if (_data.lines[index].id === parseInt(_data.selectedLine, 10)) {
        response.line = _data.lines[index].name;
        break;
      }
    }

    for (index = 0, len = _data.stations.length; index < len; index++) {
      if (!response.stationFrom && _data.stations[index].id === _data.stationFrom) {
        response.stationFrom = _data.stations[index].name;
      }
      if (!response.stationTo && _data.stations[index].id === _data.stationTo) {
        response.stationTo = _data.stations[index].name;
      }
      if (response.stationFrom && response.stationTo) {
        break;
      }
    }

    return response;
  },

  resetRide: function resetRide() {
    _data.ride = [];
  },

  setStation: function setStation(ref, value) {
    _data[ref] = value;
  },

  setDay: function setDay(value) {
    _data.day = value;
  },

  emitChange: function emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

function setLines(lines) {
  _data.lines = lines;
}

function areLinesEmpty() {
  return _data.lines.length ? false : true;
}

function setSelectedLine(line) {
  _data.selectedLine = line;
}

function setCacheStations(line, stations) {
  if (!_data.cacheStations[line]) {
    _data.cacheStations[line] = stations;
  }
}

function setCacheRides(key, ride) {
  if (key && ride && ride.length) {
    if (!_data.cacheRides[key]) {
      _data.cacheRides[key] = ride;
    }
  }
}

function getRideKey(ride) {
  return ride.day && ride.line && ride.station_from && ride.station_to ? ride.day + '-' + ride.line + '-' + ride.station_from + '-' + ride.station_to : false;
}

function loadFromScheduleView(value) {
  _data.loadFromScheduleView = value;
}

function setSelectedStations(stationFrom, stationTo) {
  _data.stationFrom = stationFrom ? stationFrom : null;
  _data.stationTo = stationTo ? stationTo : null;
}

function setStations(stations) {
  _data.stations = stations ? stations : [];
  // if the page is not loaded from /schedule we set by default stations from and to
  if (!_data.loadFromScheduleView) {
    if (stations && stations.length) {
      setSelectedStations(stations[0].id, stations[stations.length - 1].id);
    }
  } else {
    loadFromScheduleView(false);
  }
}

function setRide(ride) {
  _data.ride = ride;
}

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    // ---- LINES
    case LineConstants.REQUEST_LINES:
      if (!_data.lines.length) {
        _utilsMetraAPIUtils2['default'].getAllLines().then(function (response) {
          setLines(response.data);
          LineStore.emitChange();
          var lineID = action.line ? action.line : response.data[0].id;
          // now that we have line data we query stations for this line
          LineActions.requestSations(lineID);
        })['catch'](function (response) {
          console.log(response);
        });
      }
      break;

    // ---- STATIONS
    case LineConstants.REQUEST_STATIONS:
      setSelectedLine(action.line);
      // if stations have been searched before they should be on the "proxy"
      if (action.line && !_data.cacheStations[action.line]) {
        _utilsMetraAPIUtils2['default'].getStationsFromLine(action.line).then(function (response) {
          // set "proxy" to avoid extra calls to api
          setCacheStations(action.line, response.data);
          setStations(response.data);
          LineStore.emitChange();
        })['catch'](function (response) {
          console.log(response);
        });
      } else {
        setStations(_data.cacheStations[action.line]);
        LineStore.emitChange();
      }
      break;

    // ---- SCHEDULE
    case LineConstants.REQUEST_SCHEDULE:
      var cacheRideKey = getRideKey({
        day: action.day,
        line: action.line,
        station_from: action.station_from,
        station_to: action.station_to
      });
      if (cacheRideKey && !_data.cacheRides[cacheRideKey]) {
        _utilsMetraAPIUtils2['default'].getSchedule(action.line, action.station_from, action.station_to, action.day).then(function (response) {
          setCacheRides(cacheRideKey, response.data);
          setRide(response.data);
          setSelectedStations(response.data[0].station_from, response.data[0].station_to);
          LineStore.emitChange();

          // assure we only request lines->stations when user arrives site throught /schedule
          if (areLinesEmpty()) {
            // set flag that helps to dont overwrite stations from/to on action
            loadFromScheduleView(true);
            LineActions.requestLines(response.data[0].line);
          }
        })['catch'](function (response) {
          console.log(response);
        });
      } else if (cacheRideKey) {
        setRide(_data.cacheRides[cacheRideKey]);
        // use values from cache (ids) instead of params (code)
        setSelectedStations(_data.cacheRides[cacheRideKey][0].station_from, _data.cacheRides[cacheRideKey][0].station_to);
        LineStore.emitChange();
      }

      break;

    default:
    // no op
  }
});

exports['default'] = LineStore;
module.exports = exports['default'];
},{"../actions/LineActions":1,"../constants/LineConstants":12,"../dispatcher/AppDispatcher":13,"../utils/MetraAPIUtils":16,"events":18,"object-assign":24}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var apiURL = 'http://api-metra.rhcloud.com/api/metra/';

exports['default'] = {
  getAllLines: function getAllLines() {
    return axios.get(apiURL + 'lines/');
  },

  getStationsFromLine: function getStationsFromLine(line) {
    return axios.get(apiURL + 'stations/?line=' + line);
  },

  getSchedule: function getSchedule(line, stationFrom, stationTo, day) {
    return axios.get(apiURL + 'rides/?line=' + line + '&station_from=' + stationFrom + '&station_to=' + stationTo + '&day=' + day);
  }

};
module.exports = exports['default'];
},{}],17:[function(require,module,exports){
var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

module.exports = canUseDOM;
},{}],18:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],19:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;
}).call(this,require('_process'))
},{"_process":25}],20:[function(require,module,exports){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = require('./lib/Dispatcher');

},{"./lib/Dispatcher":21}],21:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * 
 * @preventMunge
 */

'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = require('fbjs/lib/invariant');

var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *         case 'city-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this._callbacks = {};
    this._isDispatching = false;
    this._isHandled = {};
    this._isPending = {};
    this._lastID = 1;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   */

  Dispatcher.prototype.register = function register(callback) {
    var id = _prefix + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   */

  Dispatcher.prototype.unregister = function unregister(id) {
    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
    delete this._callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */

  Dispatcher.prototype.waitFor = function waitFor(ids) {
    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this._isPending[id]) {
        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
        continue;
      }
      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
      this._invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   */

  Dispatcher.prototype.dispatch = function dispatch(payload) {
    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
    this._startDispatching(payload);
    try {
      for (var id in this._callbacks) {
        if (this._isPending[id]) {
          continue;
        }
        this._invokeCallback(id);
      }
    } finally {
      this._stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   */

  Dispatcher.prototype.isDispatching = function isDispatching() {
    return this._isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @internal
   */

  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
    for (var id in this._callbacks) {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    }
    this._pendingPayload = payload;
    this._isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
    delete this._pendingPayload;
    this._isDispatching = false;
  };

  return Dispatcher;
})();

module.exports = Dispatcher;
}).call(this,require('_process'))
},{"_process":25,"fbjs/lib/invariant":19}],22:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))
},{"_process":25}],23:[function(require,module,exports){
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

"use strict";

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var keyMirror = function(obj) {
  var ret = {};
  var key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

module.exports = keyMirror;

},{}],24:[function(require,module,exports){
/* eslint-disable no-unused-vars */
'use strict';
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],25:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],26:[function(require,module,exports){
var React = window.React;
var PanelGroup = require('./PanelGroup');

var Accordion = React.createClass({displayName: "Accordion",
  render: function () {
    return (
      React.createElement(PanelGroup, React.__spread({},  this.props, {accordion: true}), 
        this.props.children
      )
    );
  }
});

module.exports = Accordion;
},{"./PanelGroup":64}],27:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var AffixMixin = require('./AffixMixin');
var domUtils = require('./utils/domUtils');

var Affix = React.createClass({displayName: "Affix",
  statics: {
    domUtils: domUtils
  },

  mixins: [AffixMixin],

  render: function () {
    var holderStyle = {top: this.state.affixPositionTop};
    return (
      React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, this.state.affixClass), style: holderStyle}), 
        this.props.children
      )
    );
  }
});

module.exports = Affix;
},{"./AffixMixin":28,"./utils/domUtils":85,"./utils/joinClasses":86}],28:[function(require,module,exports){
/* global window, document */

var React = window.React;
var domUtils = require('./utils/domUtils');
var EventListener = require('./utils/EventListener');

var AffixMixin = {
  propTypes: {
    offset: React.PropTypes.number,
    offsetTop: React.PropTypes.number,
    offsetBottom: React.PropTypes.number
  },

  getInitialState: function () {
    return {
      affixClass: 'affix-top'
    };
  },

  getPinnedOffset: function (DOMNode) {
    if (this.pinnedOffset) {
      return this.pinnedOffset;
    }

    DOMNode.className = DOMNode.className.replace(/affix-top|affix-bottom|affix/, '');
    DOMNode.className += DOMNode.className.length ? ' affix' : 'affix';

    this.pinnedOffset = domUtils.getOffset(DOMNode).top - window.pageYOffset;

    return this.pinnedOffset;
  },

  checkPosition: function () {
    var DOMNode, scrollHeight, scrollTop, position, offsetTop, offsetBottom,
        affix, affixType, affixPositionTop;

    // TODO: or not visible
    if (!this.isMounted()) {
      return;
    }

    DOMNode = this.getDOMNode();
    scrollHeight = document.documentElement.offsetHeight;
    scrollTop = window.pageYOffset;
    position = domUtils.getOffset(DOMNode);
    offsetTop;
    offsetBottom;

    if (this.affixed === 'top') {
      position.top += scrollTop;
    }

    offsetTop = this.props.offsetTop != null ?
      this.props.offsetTop : this.props.offset;
    offsetBottom = this.props.offsetBottom != null ?
      this.props.offsetBottom : this.props.offset;

    if (offsetTop == null && offsetBottom == null) {
      return;
    }
    if (offsetTop == null) {
      offsetTop = 0;
    }
    if (offsetBottom == null) {
      offsetBottom = 0;
    }

    if (this.unpin != null && (scrollTop + this.unpin <= position.top)) {
      affix = false;
    } else if (offsetBottom != null && (position.top + DOMNode.offsetHeight >= scrollHeight - offsetBottom)) {
      affix = 'bottom';
    } else if (offsetTop != null && (scrollTop <= offsetTop)) {
      affix = 'top';
    } else {
      affix = false;
    }

    if (this.affixed === affix) {
      return;
    }

    if (this.unpin != null) {
      DOMNode.style.top = '';
    }

    affixType = 'affix' + (affix ? '-' + affix : '');

    this.affixed = affix;
    this.unpin = affix === 'bottom' ?
      this.getPinnedOffset(DOMNode) : null;

    if (affix === 'bottom') {
      DOMNode.className = DOMNode.className.replace(/affix-top|affix-bottom|affix/, 'affix-bottom');
      affixPositionTop = scrollHeight - offsetBottom - DOMNode.offsetHeight - domUtils.getOffset(DOMNode).top;
    }

    this.setState({
      affixClass: affixType,
      affixPositionTop: affixPositionTop
    });
  },

  checkPositionWithEventLoop: function () {
    setTimeout(this.checkPosition, 0);
  },

  componentDidMount: function () {
    this._onWindowScrollListener =
      EventListener.listen(window, 'scroll', this.checkPosition);
    this._onDocumentClickListener =
      EventListener.listen(document, 'click', this.checkPositionWithEventLoop);
  },

  componentWillUnmount: function () {
    if (this._onWindowScrollListener) {
      this._onWindowScrollListener.remove();
    }

    if (this._onDocumentClickListener) {
      this._onDocumentClickListener.remove();
    }
  },

  componentDidUpdate: function (prevProps, prevState) {
    if (prevState.affixClass === this.state.affixClass) {
      this.checkPositionWithEventLoop();
    }
  }
};

module.exports = AffixMixin;
},{"./utils/EventListener":78,"./utils/domUtils":85}],29:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var BootstrapMixin = require('./BootstrapMixin');


var Alert = React.createClass({displayName: "Alert",
  mixins: [BootstrapMixin],

  propTypes: {
    onDismiss: React.PropTypes.func,
    dismissAfter: React.PropTypes.number
  },

  getDefaultProps: function () {
    return {
      bsClass: 'alert',
      bsStyle: 'info'
    };
  },

  renderDismissButton: function () {
    return (
      React.createElement("button", {
        type: "button", 
        className: "close", 
        onClick: this.props.onDismiss, 
        "aria-hidden": "true"}, 
        "×"
      )
    );
  },

  render: function () {
    var classes = this.getBsClassSet();
    var isDismissable = !!this.props.onDismiss;

    classes['alert-dismissable'] = isDismissable;

    return (
      React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
        isDismissable ? this.renderDismissButton() : null, 
        this.props.children
      )
    );
  },

  componentDidMount: function() {
    if (this.props.dismissAfter && this.props.onDismiss) {
      this.dismissTimer = setTimeout(this.props.onDismiss, this.props.dismissAfter);
    }
  },

  componentWillUnmount: function() {
    clearTimeout(this.dismissTimer);
  }
});

module.exports = Alert;
},{"./BootstrapMixin":31,"./utils/classSet":82,"./utils/joinClasses":86}],30:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var ValidComponentChildren = require('./utils/ValidComponentChildren');
var classSet = require('./utils/classSet');

var Badge = React.createClass({displayName: "Badge",
  propTypes: {
    pullRight: React.PropTypes.bool
  },

  hasContent: function () {
    return ValidComponentChildren.hasValidComponent(this.props.children) ||
      (typeof this.props.children === 'string') ||
      (typeof this.props.children === 'number')
  },

  render: function () {
    var classes = {
      'pull-right': this.props.pullRight,
      'badge': this.hasContent()
    };
    return (
      React.createElement("span", React.__spread({}, 
        this.props, 
        {className: joinClasses(this.props.className, classSet(classes))}), 
        this.props.children
      )
    );
  }
});

module.exports = Badge;

},{"./utils/ValidComponentChildren":81,"./utils/classSet":82,"./utils/joinClasses":86}],31:[function(require,module,exports){
var React = window.React;
var constants = require('./constants');

var BootstrapMixin = {
  propTypes: {
    bsClass: React.PropTypes.oneOf(Object.keys(constants.CLASSES)),
    bsStyle: React.PropTypes.oneOf(Object.keys(constants.STYLES)),
    bsSize: React.PropTypes.oneOf(Object.keys(constants.SIZES))
  },

  getBsClassSet: function () {
    var classes = {};

    var bsClass = this.props.bsClass && constants.CLASSES[this.props.bsClass];
    if (bsClass) {
      classes[bsClass] = true;

      var prefix = bsClass + '-';

      var bsSize = this.props.bsSize && constants.SIZES[this.props.bsSize];
      if (bsSize) {
        classes[prefix + bsSize] = true;
      }

      var bsStyle = this.props.bsStyle && constants.STYLES[this.props.bsStyle];
      if (this.props.bsStyle) {
        classes[prefix + bsStyle] = true;
      }
    }

    return classes;
  },

  prefixClass: function(subClass) {
    return constants.CLASSES[this.props.bsClass] + '-' + subClass;
  }
};

module.exports = BootstrapMixin;

},{"./constants":75}],32:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var BootstrapMixin = require('./BootstrapMixin');

var Button = React.createClass({displayName: "Button",
  mixins: [BootstrapMixin],

  propTypes: {
    active:   React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    block:    React.PropTypes.bool,
    navItem:    React.PropTypes.bool,
    navDropdown: React.PropTypes.bool,
    componentClass: React.PropTypes.node,
    href: React.PropTypes.string,
    target: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      bsClass: 'button',
      bsStyle: 'default',
      type: 'button'
    };
  },

  render: function () {
    var classes = this.props.navDropdown ? {} : this.getBsClassSet();
    var renderFuncName;

    classes['active'] = this.props.active;
    classes['btn-block'] = this.props.block;

    if (this.props.navItem) {
      return this.renderNavItem(classes);
    }

    renderFuncName = this.props.href || this.props.target || this.props.navDropdown ?
      'renderAnchor' : 'renderButton';

    return this[renderFuncName](classes);
  },

  renderAnchor: function (classes) {

    var Component = this.props.componentClass || 'a';
    var href = this.props.href || '#';
    classes['disabled'] = this.props.disabled;

    return (
      React.createElement(Component, React.__spread({}, 
        this.props, 
        {href: href, 
        className: joinClasses(this.props.className, classSet(classes)), 
        role: "button"}), 
        this.props.children
      )
    );
  },

  renderButton: function (classes) {
    var Component = this.props.componentClass || 'button';

    return (
      React.createElement(Component, React.__spread({}, 
        this.props, 
        {className: joinClasses(this.props.className, classSet(classes))}), 
        this.props.children
      )
    );
  },

  renderNavItem: function (classes) {
    var liClasses = {
      active: this.props.active
    };

    return (
      React.createElement("li", {className: classSet(liClasses)}, 
        this.renderAnchor(classes)
      )
    );
  }
});

module.exports = Button;

},{"./BootstrapMixin":31,"./utils/classSet":82,"./utils/joinClasses":86}],33:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var BootstrapMixin = require('./BootstrapMixin');
var Button = require('./Button');

var ButtonGroup = React.createClass({displayName: "ButtonGroup",
  mixins: [BootstrapMixin],

  propTypes: {
    vertical:  React.PropTypes.bool,
    justified: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      bsClass: 'button-group'
    };
  },

  render: function () {
    var classes = this.getBsClassSet();
    classes['btn-group'] = !this.props.vertical;
    classes['btn-group-vertical'] = this.props.vertical;
    classes['btn-group-justified'] = this.props.justified;

    return (
      React.createElement("div", React.__spread({}, 
        this.props, 
        {className: joinClasses(this.props.className, classSet(classes))}), 
        this.props.children
      )
    );
  }
});

module.exports = ButtonGroup;
},{"./BootstrapMixin":31,"./Button":32,"./utils/classSet":82,"./utils/joinClasses":86}],34:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var BootstrapMixin = require('./BootstrapMixin');
var Button = require('./Button');

var ButtonToolbar = React.createClass({displayName: "ButtonToolbar",
  mixins: [BootstrapMixin],

  getDefaultProps: function () {
    return {
      bsClass: 'button-toolbar'
    };
  },

  render: function () {
    var classes = this.getBsClassSet();

    return (
      React.createElement("div", React.__spread({}, 
        this.props, 
        {role: "toolbar", 
        className: joinClasses(this.props.className, classSet(classes))}), 
        this.props.children
      )
    );
  }
});

module.exports = ButtonToolbar;
},{"./BootstrapMixin":31,"./Button":32,"./utils/classSet":82,"./utils/joinClasses":86}],35:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var cloneWithProps = require('./utils/cloneWithProps');
var BootstrapMixin = require('./BootstrapMixin');
var ValidComponentChildren = require('./utils/ValidComponentChildren');

var Carousel = React.createClass({displayName: "Carousel",
  mixins: [BootstrapMixin],

  propTypes: {
    slide: React.PropTypes.bool,
    indicators: React.PropTypes.bool,
    controls: React.PropTypes.bool,
    pauseOnHover: React.PropTypes.bool,
    wrap: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    onSlideEnd: React.PropTypes.func,
    activeIndex: React.PropTypes.number,
    defaultActiveIndex: React.PropTypes.number,
    direction: React.PropTypes.oneOf(['prev', 'next'])
  },

  getDefaultProps: function () {
    return {
      slide: true,
      interval: 5000,
      pauseOnHover: true,
      wrap: true,
      indicators: true,
      controls: true
    };
  },

  getInitialState: function () {
    return {
      activeIndex: this.props.defaultActiveIndex == null ?
        0 : this.props.defaultActiveIndex,
      previousActiveIndex: null,
      direction: null
    };
  },

  getDirection: function (prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }

    return prevIndex > index ?
      'prev' : 'next';
  },

  componentWillReceiveProps: function (nextProps) {
    var activeIndex = this.getActiveIndex();

    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
      clearTimeout(this.timeout);
      this.setState({
        previousActiveIndex: activeIndex,
        direction: nextProps.direction != null ?
          nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
      });
    }
  },

  componentDidMount: function () {
    this.waitForNext();
  },

  componentWillUnmount: function() {
    clearTimeout(this.timeout);
  },

  next: function (e) {
    if (e) {
      e.preventDefault();
    }

    var index = this.getActiveIndex() + 1;
    var count = ValidComponentChildren.numberOf(this.props.children);

    if (index > count - 1) {
      if (!this.props.wrap) {
        return;
      }
      index = 0;
    }

    this.handleSelect(index, 'next');
  },

  prev: function (e) {
    if (e) {
      e.preventDefault();
    }

    var index = this.getActiveIndex() - 1;

    if (index < 0) {
      if (!this.props.wrap) {
        return;
      }
      index = ValidComponentChildren.numberOf(this.props.children) - 1;
    }

    this.handleSelect(index, 'prev');
  },

  pause: function () {
    this.isPaused = true;
    clearTimeout(this.timeout);
  },

  play: function () {
    this.isPaused = false;
    this.waitForNext();
  },

  waitForNext: function () {
    if (!this.isPaused && this.props.slide && this.props.interval &&
        this.props.activeIndex == null) {
      this.timeout = setTimeout(this.next, this.props.interval);
    }
  },

  handleMouseOver: function () {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  },

  handleMouseOut: function () {
    if (this.isPaused) {
      this.play();
    }
  },

  render: function () {
    var classes = {
      carousel: true,
      slide: this.props.slide
    };

    return (
      React.createElement("div", React.__spread({}, 
        this.props, 
        {className: joinClasses(this.props.className, classSet(classes)), 
        onMouseOver: this.handleMouseOver, 
        onMouseOut: this.handleMouseOut}), 
        this.props.indicators ? this.renderIndicators() : null, 
        React.createElement("div", {className: "carousel-inner", ref: "inner"}, 
          ValidComponentChildren.map(this.props.children, this.renderItem)
        ), 
        this.props.controls ? this.renderControls() : null
      )
    );
  },

  renderPrev: function () {
    return (
      React.createElement("a", {className: "left carousel-control", href: "#prev", key: 0, onClick: this.prev}, 
        React.createElement("span", {className: "glyphicon glyphicon-chevron-left"})
      )
    );
  },

  renderNext: function () {
    return (
      React.createElement("a", {className: "right carousel-control", href: "#next", key: 1, onClick: this.next}, 
        React.createElement("span", {className: "glyphicon glyphicon-chevron-right"})
      )
    );
  },

  renderControls: function () {
    if (this.props.wrap) {
      var activeIndex = this.getActiveIndex();
      var count = ValidComponentChildren.numberOf(this.props.children);

      return [
        (activeIndex !== 0) ? this.renderPrev() : null,
        (activeIndex !== count - 1) ? this.renderNext() : null
      ];
    }

    return [
      this.renderPrev(),
      this.renderNext()
    ];
  },

  renderIndicator: function (child, index) {
    var className = (index === this.getActiveIndex()) ?
      'active' : null;

    return (
      React.createElement("li", {
        key: index, 
        className: className, 
        onClick: this.handleSelect.bind(this, index, null)})
    );
  },

  renderIndicators: function () {
    var indicators = [];
    ValidComponentChildren
      .forEach(this.props.children, function(child, index) {
        indicators.push(
          this.renderIndicator(child, index),

          // Force whitespace between indicator elements, bootstrap
          // requires this for correct spacing of elements.
          ' '
        );
      }, this);

    return (
      React.createElement("ol", {className: "carousel-indicators"}, 
        indicators
      )
    );
  },

  getActiveIndex: function () {
    return this.props.activeIndex != null ? this.props.activeIndex : this.state.activeIndex;
  },

  handleItemAnimateOutEnd: function () {
    this.setState({
      previousActiveIndex: null,
      direction: null
    }, function() {
      this.waitForNext();

      if (this.props.onSlideEnd) {
        this.props.onSlideEnd();
      }
    });
  },

  renderItem: function (child, index) {
    var activeIndex = this.getActiveIndex();
    var isActive = (index === activeIndex);
    var isPreviousActive = this.state.previousActiveIndex != null &&
            this.state.previousActiveIndex === index && this.props.slide;

    return cloneWithProps(
        child,
        {
          active: isActive,
          ref: child.ref,
          key: child.key ? child.key : index,
          index: index,
          animateOut: isPreviousActive,
          animateIn: isActive && this.state.previousActiveIndex != null && this.props.slide,
          direction: this.state.direction,
          onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd: null
        }
      );
  },

  handleSelect: function (index, direction) {
    clearTimeout(this.timeout);

    var previousActiveIndex = this.getActiveIndex();
    direction = direction || this.getDirection(previousActiveIndex, index);

    if (this.props.onSelect) {
      this.props.onSelect(index, direction);
    }

    if (this.props.activeIndex == null && index !== previousActiveIndex) {
      if (this.state.previousActiveIndex != null) {
        // If currently animating don't activate the new index.
        // TODO: look into queuing this canceled call and
        // animating after the current animation has ended.
        return;
      }

      this.setState({
        activeIndex: index,
        previousActiveIndex: previousActiveIndex,
        direction: direction
      });
    }
  }
});

module.exports = Carousel;
},{"./BootstrapMixin":31,"./utils/ValidComponentChildren":81,"./utils/classSet":82,"./utils/cloneWithProps":83,"./utils/joinClasses":86}],36:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var TransitionEvents = require('./utils/TransitionEvents');

var CarouselItem = React.createClass({displayName: "CarouselItem",
  propTypes: {
    direction: React.PropTypes.oneOf(['prev', 'next']),
    onAnimateOutEnd: React.PropTypes.func,
    active: React.PropTypes.bool,
    caption: React.PropTypes.node
  },

  getInitialState: function () {
    return {
      direction: null
    };
  },

  getDefaultProps: function () {
    return {
      animation: true
    };
  },

  handleAnimateOutEnd: function () {
    if (this.props.onAnimateOutEnd && this.isMounted()) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  },

  componentWillReceiveProps: function (nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({
        direction: null
      });
    }
  },

  componentDidUpdate: function (prevProps) {
    if (!this.props.active && prevProps.active) {
      TransitionEvents.addEndEventListener(
        this.getDOMNode(),
        this.handleAnimateOutEnd
      );
    }

    if (this.props.active !== prevProps.active) {
      setTimeout(this.startAnimation, 20);
    }
  },

  startAnimation: function () {
    if (!this.isMounted()) {
      return;
    }

    this.setState({
      direction: this.props.direction === 'prev' ?
        'right' : 'left'
    });
  },

  render: function () {
    var classes = {
      item: true,
      active: (this.props.active && !this.props.animateIn) || this.props.animateOut,
      next: this.props.active && this.props.animateIn && this.props.direction === 'next',
      prev: this.props.active && this.props.animateIn && this.props.direction === 'prev'
    };

    if (this.state.direction && (this.props.animateIn || this.props.animateOut)) {
      classes[this.state.direction] = true;
    }

    return (
      React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
        this.props.children, 
        this.props.caption ? this.renderCaption() : null
      )
    );
  },

  renderCaption: function () {
    return (
      React.createElement("div", {className: "carousel-caption"}, 
        this.props.caption
      )
    );
  }
});

module.exports = CarouselItem;
},{"./utils/TransitionEvents":80,"./utils/classSet":82,"./utils/joinClasses":86}],37:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var constants = require('./constants');


var Col = React.createClass({displayName: "Col",
  propTypes: {
    xs: React.PropTypes.number,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
    xsOffset: React.PropTypes.number,
    smOffset: React.PropTypes.number,
    mdOffset: React.PropTypes.number,
    lgOffset: React.PropTypes.number,
    xsPush: React.PropTypes.number,
    smPush: React.PropTypes.number,
    mdPush: React.PropTypes.number,
    lgPush: React.PropTypes.number,
    xsPull: React.PropTypes.number,
    smPull: React.PropTypes.number,
    mdPull: React.PropTypes.number,
    lgPull: React.PropTypes.number,
    componentClass: React.PropTypes.node.isRequired
  },

  getDefaultProps: function () {
    return {
      componentClass: 'div'
    };
  },

  render: function () {
    var ComponentClass = this.props.componentClass;
    var classes = {};

    Object.keys(constants.SIZES).forEach(function (key) {
      var size = constants.SIZES[key];
      var prop = size;
      var classPart = size + '-';

      if (this.props[prop]) {
        classes['col-' + classPart + this.props[prop]] = true;
      }

      prop = size + 'Offset';
      classPart = size + '-offset-';
      if (this.props[prop] >= 0) {
        classes['col-' + classPart + this.props[prop]] = true;
      }

      prop = size + 'Push';
      classPart = size + '-push-';
      if (this.props[prop] >= 0) {
        classes['col-' + classPart + this.props[prop]] = true;
      }

      prop = size + 'Pull';
      classPart = size + '-pull-';
      if (this.props[prop] >= 0) {
        classes['col-' + classPart + this.props[prop]] = true;
      }
    }, this);

    return (
      React.createElement(ComponentClass, React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
        this.props.children
      )
    );
  }
});

module.exports = Col;

},{"./constants":75,"./utils/classSet":82,"./utils/joinClasses":86}],38:[function(require,module,exports){
var React = window.React;
var TransitionEvents = require('react/lib/ReactTransitionEvents');

var CollapsableMixin = {

  propTypes: {
    defaultExpanded: React.PropTypes.bool,
    expanded: React.PropTypes.bool
  },

  getInitialState: function(){
    var defaultExpanded = this.props.defaultExpanded != null ?
      this.props.defaultExpanded :
        this.props.expanded != null ?
        this.props.expanded :
        false;

    return {
      expanded: defaultExpanded,
      collapsing: false
    };
  },

  componentWillUpdate: function(nextProps, nextState){
    var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;
    if (willExpanded === this.isExpanded()) {
      return;
    }

    // if the expanded state is being toggled, ensure node has a dimension value
    // this is needed for the animation to work and needs to be set before
    // the collapsing class is applied (after collapsing is applied the in class
    // is removed and the node's dimension will be wrong)

    var node = this.getCollapsableDOMNode();
    var dimension = this.dimension();
    var value = '0';

    if(!willExpanded){
      value = this.getCollapsableDimensionValue();
    }

    node.style[dimension] = value + 'px';

    this._afterWillUpdate();
  },

  componentDidUpdate: function(prevProps, prevState){
    // check if expanded is being toggled; if so, set collapsing
    this._checkToggleCollapsing(prevProps, prevState);

    // check if collapsing was turned on; if so, start animation
    this._checkStartAnimation(); 
  },

  // helps enable test stubs
  _afterWillUpdate: function(){
  },

  _checkStartAnimation: function(){
    if(!this.state.collapsing) {
      return;
    }

    var node = this.getCollapsableDOMNode();
    var dimension = this.dimension();
    var value = this.getCollapsableDimensionValue();

    // setting the dimension here starts the transition animation
    var result;
    if(this.isExpanded()) {
      result = value + 'px';
    } else {
      result = '0px';
    }
    node.style[dimension] = result;
  },

  _checkToggleCollapsing: function(prevProps, prevState){
    var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
    var isExpanded = this.isExpanded();
    if(wasExpanded !== isExpanded){
      if(wasExpanded) {
        this._handleCollapse();
      } else {
        this._handleExpand();
      }
    }
  },

  _handleExpand: function(){
    var node = this.getCollapsableDOMNode();
    var dimension = this.dimension();

    var complete = (function (){
      this._removeEndEventListener(node, complete);
      // remove dimension value - this ensures the collapsable item can grow
      // in dimension after initial display (such as an image loading)
      node.style[dimension] = '';
      this.setState({
        collapsing:false
      });
    }).bind(this);

    this._addEndEventListener(node, complete);

    this.setState({
      collapsing: true
    });
  },

  _handleCollapse: function(){
    var node = this.getCollapsableDOMNode();

    var complete = (function (){
      this._removeEndEventListener(node, complete);
      this.setState({
        collapsing: false
      });
    }).bind(this);

    this._addEndEventListener(node, complete);

    this.setState({
      collapsing: true
    });
  },

  // helps enable test stubs
  _addEndEventListener: function(node, complete){
    TransitionEvents.addEndEventListener(node, complete);
  },

  // helps enable test stubs
  _removeEndEventListener: function(node, complete){
    TransitionEvents.removeEndEventListener(node, complete);
  },

  dimension: function(){
    return (typeof this.getCollapsableDimension === 'function') ?
      this.getCollapsableDimension() :
      'height';
  },

  isExpanded: function(){
    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
  },

  getCollapsableClassSet: function (className) {
    var classes = {};

    if (typeof className === 'string') {
      className.split(' ').forEach(function (className) {
        if (className) {
          classes[className] = true;
        }
      });
    }

    classes.collapsing = this.state.collapsing;
    classes.collapse = !this.state.collapsing;
    classes['in'] = this.isExpanded() && !this.state.collapsing;

    return classes;
  }
};

module.exports = CollapsableMixin;

},{"react/lib/ReactTransitionEvents":129}],39:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var BootstrapMixin = require('./BootstrapMixin');
var CollapsableMixin = require('./CollapsableMixin');
var classSet = require('./utils/classSet');
var domUtils = require('./utils/domUtils');
var cloneWithProps = require('./utils/cloneWithProps');

var ValidComponentChildren = require('./utils/ValidComponentChildren');
var createChainedFunction = require('./utils/createChainedFunction');


var CollapsableNav = React.createClass({displayName: "CollapsableNav",
  mixins: [BootstrapMixin, CollapsableMixin],

  propTypes: {
    onSelect: React.PropTypes.func,
    expanded: React.PropTypes.bool,
    eventKey: React.PropTypes.any
  },

  getCollapsableDOMNode: function () {
    return this.getDOMNode();
  },

  getCollapsableDimensionValue: function () {
    var height = 0;
    var nodes = this.refs;
    for (var key in nodes) {
      if (nodes.hasOwnProperty(key)) {

        var n = nodes[key].getDOMNode()
          , h = n.offsetHeight
          , computedStyles = domUtils.getComputedStyles(n);

        height += (h + parseInt(computedStyles.marginTop, 10) + parseInt(computedStyles.marginBottom, 10));
      }
    }
    return height;
  },

  render: function () {
    /*
     * this.props.collapsable is set in NavBar when a eventKey is supplied.
     */
    var classes = this.props.collapsable ? this.getCollapsableClassSet() : {};
    /*
     * prevent duplicating navbar-collapse call if passed as prop. kind of overkill... good cadidate to have check implemented as a util that can
     * also be used elsewhere.
     */
    if (this.props.className == undefined || this.props.className.split(" ").indexOf('navbar-collapse') == -1)
      classes['navbar-collapse'] = this.props.collapsable;

    return (
      React.createElement("div", {eventKey: this.props.eventKey, className: joinClasses(this.props.className, classSet(classes))}, 
        ValidComponentChildren.map(this.props.children, (this.props.collapsable) ? this.renderCollapsableNavChildren : this.renderChildren)
      )
    );
  },

  getChildActiveProp: function (child) {
    if (child.props.active) {
      return true;
    }
    if (this.props.activeKey != null) {
      if (child.props.eventKey == this.props.activeKey) {
        return true;
      }
    }
    if (this.props.activeHref != null) {
      if (child.props.href === this.props.activeHref) {
        return true;
      }
    }

    return child.props.active;
  },

  renderChildren: function (child, index) {
    var key = child.key ? child.key : index;
    return cloneWithProps(
      child,
      {
        activeKey: this.props.activeKey,
        activeHref: this.props.activeHref,
        ref: 'nocollapse_' + key,
        key: key,
        navItem: true
      }
    );
  },

  renderCollapsableNavChildren: function (child, index) {
    var key = child.key ? child.key : index;
    return cloneWithProps(
      child,
      {
        active: this.getChildActiveProp(child),
        activeKey: this.props.activeKey,
        activeHref: this.props.activeHref,
        onSelect: createChainedFunction(child.props.onSelect, this.props.onSelect),
        ref: 'collapsable_' + key,
        key: key,
        navItem: true
      }
    );
  }
});

module.exports = CollapsableNav;

},{"./BootstrapMixin":31,"./CollapsableMixin":38,"./utils/ValidComponentChildren":81,"./utils/classSet":82,"./utils/cloneWithProps":83,"./utils/createChainedFunction":84,"./utils/domUtils":85,"./utils/joinClasses":86}],40:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var cloneWithProps = require('./utils/cloneWithProps');

var createChainedFunction = require('./utils/createChainedFunction');
var BootstrapMixin = require('./BootstrapMixin');
var DropdownStateMixin = require('./DropdownStateMixin');
var Button = require('./Button');
var ButtonGroup = require('./ButtonGroup');
var DropdownMenu = require('./DropdownMenu');
var ValidComponentChildren = require('./utils/ValidComponentChildren');


var DropdownButton = React.createClass({displayName: "DropdownButton",
  mixins: [BootstrapMixin, DropdownStateMixin],

  propTypes: {
    pullRight: React.PropTypes.bool,
    dropup:    React.PropTypes.bool,
    title:     React.PropTypes.node,
    href:      React.PropTypes.string,
    onClick:   React.PropTypes.func,
    onSelect:  React.PropTypes.func,
    navItem:   React.PropTypes.bool,
    noCaret:   React.PropTypes.bool
  },

  render: function () {
    var renderMethod = this.props.navItem ?
      'renderNavItem' : 'renderButtonGroup';

    var caret = this.props.noCaret ?
        null : (React.createElement("span", {className: "caret"}));

    return this[renderMethod]([
      React.createElement(Button, React.__spread({}, 
        this.props, 
        {ref: "dropdownButton", 
        className: "dropdown-toggle", 
        onClick: this.handleDropdownClick, 
        key: 0, 
        navDropdown: this.props.navItem, 
        navItem: null, 
        title: null, 
        pullRight: null, 
        dropup: null}), 
        this.props.title, ' ', 
        caret
      ),
      React.createElement(DropdownMenu, {
        ref: "menu", 
        "aria-labelledby": this.props.id, 
        pullRight: this.props.pullRight, 
        key: 1}, 
        ValidComponentChildren.map(this.props.children, this.renderMenuItem)
      )
    ]);
  },

  renderButtonGroup: function (children) {
    var groupClasses = {
        'open': this.state.open,
        'dropup': this.props.dropup
      };

    return (
      React.createElement(ButtonGroup, {
        bsSize: this.props.bsSize, 
        className: joinClasses(this.props.className, classSet(groupClasses))}, 
        children
      )
    );
  },

  renderNavItem: function (children) {
    var classes = {
        'dropdown': true,
        'open': this.state.open,
        'dropup': this.props.dropup
      };

    return (
      React.createElement("li", {className: joinClasses(this.props.className, classSet(classes))}, 
        children
      )
    );
  },

  renderMenuItem: function (child, index) {
    // Only handle the option selection if an onSelect prop has been set on the
    // component or it's child, this allows a user not to pass an onSelect
    // handler and have the browser preform the default action.
    var handleOptionSelect = this.props.onSelect || child.props.onSelect ?
      this.handleOptionSelect : null;

    return cloneWithProps(
      child,
      {
        // Capture onSelect events
        onSelect: createChainedFunction(child.props.onSelect, handleOptionSelect),

        // Force special props to be transferred
        key: child.key ? child.key : index,
        ref: child.ref
      }
    );
  },

  handleDropdownClick: function (e) {
    e.preventDefault();

    this.setDropdownState(!this.state.open);
  },

  handleOptionSelect: function (key) {
    if (this.props.onSelect) {
      this.props.onSelect(key);
    }

    this.setDropdownState(false);
  }
});

module.exports = DropdownButton;

},{"./BootstrapMixin":31,"./Button":32,"./ButtonGroup":33,"./DropdownMenu":41,"./DropdownStateMixin":42,"./utils/ValidComponentChildren":81,"./utils/classSet":82,"./utils/cloneWithProps":83,"./utils/createChainedFunction":84,"./utils/joinClasses":86}],41:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var cloneWithProps = require('./utils/cloneWithProps');

var createChainedFunction = require('./utils/createChainedFunction');
var ValidComponentChildren = require('./utils/ValidComponentChildren');

var DropdownMenu = React.createClass({displayName: "DropdownMenu",
  propTypes: {
    pullRight: React.PropTypes.bool,
    onSelect: React.PropTypes.func
  },

  render: function () {
    var classes = {
        'dropdown-menu': true,
        'dropdown-menu-right': this.props.pullRight
      };

    return (
        React.createElement("ul", React.__spread({}, 
          this.props, 
          {className: joinClasses(this.props.className, classSet(classes)), 
          role: "menu"}), 
          ValidComponentChildren.map(this.props.children, this.renderMenuItem)
        )
      );
  },

  renderMenuItem: function (child, index) {
    return cloneWithProps(
      child,
      {
        // Capture onSelect events
        onSelect: createChainedFunction(child.props.onSelect, this.props.onSelect),

        // Force special props to be transferred
        key: child.key ? child.key : index,
        ref: child.ref
      }
    );
  }
});

module.exports = DropdownMenu;
},{"./utils/ValidComponentChildren":81,"./utils/classSet":82,"./utils/cloneWithProps":83,"./utils/createChainedFunction":84,"./utils/joinClasses":86}],42:[function(require,module,exports){
var React = window.React;
var EventListener = require('./utils/EventListener');

/**
 * Checks whether a node is within
 * a root nodes tree
 *
 * @param {DOMElement} node
 * @param {DOMElement} root
 * @returns {boolean}
 */
function isNodeInRoot(node, root) {
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

var DropdownStateMixin = {
  getInitialState: function () {
    return {
      open: false
    };
  },

  setDropdownState: function (newState, onStateChangeComplete) {
    if (newState) {
      this.bindRootCloseHandlers();
    } else {
      this.unbindRootCloseHandlers();
    }

    this.setState({
      open: newState
    }, onStateChangeComplete);
  },

  handleDocumentKeyUp: function (e) {
    if (e.keyCode === 27) {
      this.setDropdownState(false);
    }
  },

  handleDocumentClick: function (e) {
    // If the click originated from within this component
    // don't do anything.
    if (isNodeInRoot(e.target, this.getDOMNode())) {
      return;
    }

    this.setDropdownState(false);
  },

  bindRootCloseHandlers: function () {
    this._onDocumentClickListener =
      EventListener.listen(document, 'click', this.handleDocumentClick);
    this._onDocumentKeyupListener =
      EventListener.listen(document, 'keyup', this.handleDocumentKeyUp);
  },

  unbindRootCloseHandlers: function () {
    if (this._onDocumentClickListener) {
      this._onDocumentClickListener.remove();
    }

    if (this._onDocumentKeyupListener) {
      this._onDocumentKeyupListener.remove();
    }
  },

  componentWillUnmount: function () {
    this.unbindRootCloseHandlers();
  }
};

module.exports = DropdownStateMixin;
},{"./utils/EventListener":78}],43:[function(require,module,exports){
/*global document */
// TODO: listen for onTransitionEnd to remove el
function getElementsAndSelf (root, classes){
  var els = root.querySelectorAll('.' + classes.join('.'));

  els = [].map.call(els, function(e){ return e; });

  for(var i = 0; i < classes.length; i++){
    if( !root.className.match(new RegExp('\\b' +  classes[i] + '\\b'))){
      return els;
    }
  }
  els.unshift(root);
  return els;
}

module.exports = {
  _fadeIn: function () {
    var els;

    if (this.isMounted()) {
      els = getElementsAndSelf(this.getDOMNode(), ['fade']);

      if (els.length) {
        els.forEach(function (el) {
          el.className += ' in';
        });
      }
    }
  },

  _fadeOut: function () {
    var els = getElementsAndSelf(this._fadeOutEl, ['fade', 'in']);

    if (els.length) {
      els.forEach(function (el) {
        el.className = el.className.replace(/\bin\b/, '');
      });
    }

    setTimeout(this._handleFadeOutEnd, 300);
  },

  _handleFadeOutEnd: function () {
    if (this._fadeOutEl && this._fadeOutEl.parentNode) {
      this._fadeOutEl.parentNode.removeChild(this._fadeOutEl);
    }
  },

  componentDidMount: function () {
    if (document.querySelectorAll) {
      // Firefox needs delay for transition to be triggered
      setTimeout(this._fadeIn, 20);
    }
  },

  componentWillUnmount: function () {
    var els = getElementsAndSelf(this.getDOMNode(), ['fade']),
        container = (this.props.container && this.props.container.getDOMNode()) || document.body;

    if (els.length) {
      this._fadeOutEl = document.createElement('div');
      container.appendChild(this._fadeOutEl);
      this._fadeOutEl.appendChild(this.getDOMNode().cloneNode(true));
      // Firefox needs delay for transition to be triggered
      setTimeout(this._fadeOut, 20);
    }
  }
};

},{}],44:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var BootstrapMixin = require('./BootstrapMixin');
var constants = require('./constants');

var Glyphicon = React.createClass({displayName: "Glyphicon",
  mixins: [BootstrapMixin],

  propTypes: {
    glyph: React.PropTypes.oneOf(constants.GLYPHS).isRequired
  },

  getDefaultProps: function () {
    return {
      bsClass: 'glyphicon'
    };
  },

  render: function () {
    var classes = this.getBsClassSet();

    classes['glyphicon-' + this.props.glyph] = true;

    return (
      React.createElement("span", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
        this.props.children
      )
    );
  }
});

module.exports = Glyphicon;
},{"./BootstrapMixin":31,"./constants":75,"./utils/classSet":82,"./utils/joinClasses":86}],45:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');

var Grid = React.createClass({displayName: "Grid",
  propTypes: {
    fluid: React.PropTypes.bool,
    componentClass: React.PropTypes.node.isRequired
  },

  getDefaultProps: function () {
    return {
      componentClass: 'div'
    };
  },

  render: function () {
    var ComponentClass = this.props.componentClass;
    var className = this.props.fluid ? 'container-fluid' : 'container';

    return (
      React.createElement(ComponentClass, React.__spread({}, 
        this.props, 
        {className: joinClasses(this.props.className, className)}), 
        this.props.children
      )
    );
  }
});

module.exports = Grid;
},{"./utils/joinClasses":86}],46:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var Button = require('./Button');

var Input = React.createClass({displayName: "Input",

  propTypes: {
    type: React.PropTypes.string,
    label: React.PropTypes.node,
    help: React.PropTypes.node,
    addonBefore: React.PropTypes.node,
    addonAfter: React.PropTypes.node,
    buttonBefore: React.PropTypes.node,
    buttonAfter: React.PropTypes.node,
    bsSize: React.PropTypes.oneOf(['small', 'medium', 'large']),
    bsStyle: function(props) {
      if (props.type === 'submit') {
        // Return early if `type=submit` as the `Button` component
        // it transfers these props to has its own propType checks.
        return;
      }

      return React.PropTypes.oneOf(['success', 'warning', 'error']).apply(null, arguments);
    },
    hasFeedback: React.PropTypes.bool,
    groupClassName: React.PropTypes.string,
    wrapperClassName: React.PropTypes.string,
    labelClassName: React.PropTypes.string,
    disabled: React.PropTypes.bool
  },

  getInputDOMNode: function () {
    return this.refs.input.getDOMNode();
  },

  getValue: function () {
    if (this.props.type === 'static') {
      return this.props.value;
    }
    else if (this.props.type) {
      if (this.props.type == "select" && this.props.multiple) {
        return this.getSelectedOptions();
      } else {
        return this.getInputDOMNode().value;
      }
    }
    else {
      throw Error('Cannot use getValue without specifying input type.');
    }
  },

  getChecked: function () {
    return this.getInputDOMNode().checked;
  },

  getSelectedOptions: function () {
    var values = [];

    Array.prototype.forEach.call(
      this.getInputDOMNode().getElementsByTagName('option'),
      function (option) {
        if (option.selected) {
          var value = option.getAttribute('value') || option.innerHTML;

          values.push(value);
        }
      }
    );

    return values;
  },

  isCheckboxOrRadio: function () {
    return this.props.type === 'radio' || this.props.type === 'checkbox';
  },

  isFile: function () {
    return this.props.type === 'file';
  },

  renderInput: function () {
    var input = null;

    if (!this.props.type) {
      return this.props.children
    }

    switch (this.props.type) {
      case 'select':
        input = (
          React.createElement("select", React.__spread({},  this.props, {className: joinClasses(this.props.className, 'form-control'), ref: "input", key: "input"}), 
            this.props.children
          )
        );
        break;
      case 'textarea':
        input = React.createElement("textarea", React.__spread({},  this.props, {className: joinClasses(this.props.className, 'form-control'), ref: "input", key: "input"}));
        break;
      case 'static':
        input = (
          React.createElement("p", React.__spread({},  this.props, {className: joinClasses(this.props.className, 'form-control-static'), ref: "input", key: "input"}), 
            this.props.value
          )
        );
        break;
      case 'submit':
        input = (
          React.createElement(Button, React.__spread({},  this.props, {componentClass: "input", ref: "input", key: "input"}))
        );
        break;
      default:
        var className = this.isCheckboxOrRadio() || this.isFile() ? '' : 'form-control';
        input = React.createElement("input", React.__spread({},  this.props, {className: joinClasses(this.props.className, className), ref: "input", key: "input"}));
    }

    return input;
  },

  renderInputGroup: function (children) {
    var addonBefore = this.props.addonBefore ? (
      React.createElement("span", {className: "input-group-addon", key: "addonBefore"}, 
        this.props.addonBefore
      )
    ) : null;

    var addonAfter = this.props.addonAfter ? (
      React.createElement("span", {className: "input-group-addon", key: "addonAfter"}, 
        this.props.addonAfter
      )
    ) : null;

    var buttonBefore = this.props.buttonBefore ? (
      React.createElement("span", {className: "input-group-btn"}, 
        this.props.buttonBefore
      )
    ) : null;

    var buttonAfter = this.props.buttonAfter ? (
      React.createElement("span", {className: "input-group-btn"}, 
        this.props.buttonAfter
      )
    ) : null;

    var inputGroupClassName;
    switch (this.props.bsSize) {
      case 'small': inputGroupClassName = 'input-group-sm'; break;
      case 'large': inputGroupClassName = 'input-group-lg'; break;
    }

    return addonBefore || addonAfter || buttonBefore || buttonAfter ? (
      React.createElement("div", {className: joinClasses(inputGroupClassName, 'input-group'), key: "input-group"}, 
        addonBefore, 
        buttonBefore, 
        children, 
        addonAfter, 
        buttonAfter
      )
    ) : children;
  },

  renderIcon: function () {
    var classes = {
      'glyphicon': true,
      'form-control-feedback': true,
      'glyphicon-ok': this.props.bsStyle === 'success',
      'glyphicon-warning-sign': this.props.bsStyle === 'warning',
      'glyphicon-remove': this.props.bsStyle === 'error'
    };

    return this.props.hasFeedback ? (
      React.createElement("span", {className: classSet(classes), key: "icon"})
    ) : null;
  },

  renderHelp: function () {
    return this.props.help ? (
      React.createElement("span", {className: "help-block", key: "help"}, 
        this.props.help
      )
    ) : null;
  },

  renderCheckboxandRadioWrapper: function (children) {
    var classes = {
      'checkbox': this.props.type === 'checkbox',
      'radio': this.props.type === 'radio'
    };

    return (
      React.createElement("div", {className: classSet(classes), key: "checkboxRadioWrapper"}, 
        children
      )
    );
  },

  renderWrapper: function (children) {
    return this.props.wrapperClassName ? (
      React.createElement("div", {className: this.props.wrapperClassName, key: "wrapper"}, 
        children
      )
    ) : children;
  },

  renderLabel: function (children) {
    var classes = {
      'control-label': !this.isCheckboxOrRadio()
    };
    classes[this.props.labelClassName] = this.props.labelClassName;

    return this.props.label ? (
      React.createElement("label", {htmlFor: this.props.id, className: classSet(classes), key: "label"}, 
        children, 
        this.props.label
      )
    ) : children;
  },

  renderFormGroup: function (children) {
    var classes = {
      'form-group': true,
      'has-feedback': this.props.hasFeedback,
      'has-success': this.props.bsStyle === 'success',
      'has-warning': this.props.bsStyle === 'warning',
      'has-error': this.props.bsStyle === 'error'
    };
    classes[this.props.groupClassName] = this.props.groupClassName;

    return (
      React.createElement("div", {className: classSet(classes)}, 
        children
      )
    );
  },

  render: function () {
    if (this.isCheckboxOrRadio()) {
      return this.renderFormGroup(
        this.renderWrapper([
          this.renderCheckboxandRadioWrapper(
            this.renderLabel(
              this.renderInput()
            )
          ),
          this.renderHelp()
        ])
      );
    }
    else {
      return this.renderFormGroup([
        this.renderLabel(),
        this.renderWrapper([
          this.renderInputGroup(
            this.renderInput()
          ),
          this.renderIcon(),
          this.renderHelp()
        ])
      ]);
    }
  }
});

module.exports = Input;

},{"./Button":32,"./utils/classSet":82,"./utils/joinClasses":86}],47:[function(require,module,exports){
// https://www.npmjs.org/package/react-interpolate-component
'use strict';

var React = window.React;
var ValidComponentChildren = require('./utils/ValidComponentChildren');
var assign = require('./utils/Object.assign');

var REGEXP = /\%\((.+?)\)s/;

var Interpolate = React.createClass({
  displayName: 'Interpolate',

  propTypes: {
    format: React.PropTypes.string
  },

  getDefaultProps: function() {
    return { component: 'span' };
  },

  render: function() {
    var format = (ValidComponentChildren.hasValidComponent(this.props.children) ||
        (typeof this.props.children === 'string')) ?
        this.props.children : this.props.format;
    var parent = this.props.component;
    var unsafe = this.props.unsafe === true;
    var props = assign({}, this.props);

    delete props.children;
    delete props.format;
    delete props.component;
    delete props.unsafe;

    if (unsafe) {
      var content = format.split(REGEXP).reduce(function(memo, match, index) {
        var html;

        if (index % 2 === 0) {
          html = match;
        } else {
          html = props[match];
          delete props[match];
        }

        if (React.isValidElement(html)) {
          throw new Error('cannot interpolate a React component into unsafe text');
        }

        memo += html;

        return memo;
      }, '');

      props.dangerouslySetInnerHTML = { __html: content };

      return React.createElement(parent, props);
    } else {
      var kids = format.split(REGEXP).reduce(function(memo, match, index) {
        var child;

        if (index % 2 === 0) {
          if (match.length === 0) {
            return memo;
          }

          child = match;
        } else {
          child = props[match];
          delete props[match];
        }

        memo.push(child);

        return memo;
      }, []);

      return React.createElement(parent, props, kids);
    }
  }
});

module.exports = Interpolate;

},{"./utils/Object.assign":79,"./utils/ValidComponentChildren":81}],48:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');

var Jumbotron = React.createClass({displayName: "Jumbotron",

  render: function () {
    return (
      React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, 'jumbotron')}), 
        this.props.children
      )
    );
  }
});

module.exports = Jumbotron;
},{"./utils/joinClasses":86}],49:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var BootstrapMixin = require('./BootstrapMixin');

var Label = React.createClass({displayName: "Label",
  mixins: [BootstrapMixin],

  getDefaultProps: function () {
    return {
      bsClass: 'label',
      bsStyle: 'default'
    };
  },

  render: function () {
    var classes = this.getBsClassSet();

    return (
      React.createElement("span", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
        this.props.children
      )
    );
  }
});

module.exports = Label;
},{"./BootstrapMixin":31,"./utils/classSet":82,"./utils/joinClasses":86}],50:[function(require,module,exports){
var React = window.React;
var classSet = require('./utils/classSet');
var cloneWithProps = require('./utils/cloneWithProps');

var ValidComponentChildren = require('./utils/ValidComponentChildren');
var createChainedFunction = require('./utils/createChainedFunction');

var ListGroup = React.createClass({displayName: "ListGroup",
  propTypes: {
    onClick: React.PropTypes.func
  },

  render: function () {
    return (
      React.createElement("div", {className: "list-group"}, 
        ValidComponentChildren.map(this.props.children, this.renderListItem)
      )
    );
  },

  renderListItem: function (child, index) {
    return cloneWithProps(child, {
      ref: child.ref,
      key: child.key ? child.key : index
    });
  }
});

module.exports = ListGroup;

},{"./utils/ValidComponentChildren":81,"./utils/classSet":82,"./utils/cloneWithProps":83,"./utils/createChainedFunction":84}],51:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var BootstrapMixin = require('./BootstrapMixin');
var classSet = require('./utils/classSet');
var cloneWithProps = require('./utils/cloneWithProps');

var ValidComponentChildren = require('./utils/ValidComponentChildren');

var ListGroupItem = React.createClass({displayName: "ListGroupItem",
  mixins: [BootstrapMixin],

  propTypes: {
    bsStyle: React.PropTypes.oneOf(['danger','info','success','warning']),
    active: React.PropTypes.any,
    disabled: React.PropTypes.any,
    header: React.PropTypes.node,
    onClick: React.PropTypes.func,
    eventKey: React.PropTypes.any,
    href: React.PropTypes.string,
    target: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      bsClass: 'list-group-item'
    };
  },

  render: function () {
    var classes = this.getBsClassSet();

    classes['active'] = this.props.active;
    classes['disabled'] = this.props.disabled;

    if (this.props.href || this.props.target || this.props.onClick) {
      return this.renderAnchor(classes);
    } else {
      return this.renderSpan(classes);
    }
  },

  renderSpan: function (classes) {
    return (
      React.createElement("span", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
        this.props.header ? this.renderStructuredContent() : this.props.children
      )
    );
  },

  renderAnchor: function (classes) {
    return (
      React.createElement("a", React.__spread({}, 
        this.props, 
        {className: joinClasses(this.props.className, classSet(classes))
      }), 
        this.props.header ? this.renderStructuredContent() : this.props.children
      )
    );
  },

  renderStructuredContent: function () {
    var header;
    if (React.isValidElement(this.props.header)) {
      header = cloneWithProps(this.props.header, {
        className: 'list-group-item-heading'
      });
    } else {
      header = (
        React.createElement("h4", {className: "list-group-item-heading"}, 
          this.props.header
        )
      );
    }

    var content = (
      React.createElement("p", {className: "list-group-item-text"}, 
        this.props.children
      )
    );

    return {
      header: header,
      content: content
    };
  }
});

module.exports = ListGroupItem;

},{"./BootstrapMixin":31,"./utils/ValidComponentChildren":81,"./utils/classSet":82,"./utils/cloneWithProps":83,"./utils/joinClasses":86}],52:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');

var MenuItem = React.createClass({displayName: "MenuItem",
  propTypes: {
    header:    React.PropTypes.bool,
    divider:   React.PropTypes.bool,
    href:      React.PropTypes.string,
    title:     React.PropTypes.string,
    target:    React.PropTypes.string,
    onSelect:  React.PropTypes.func,
    eventKey:  React.PropTypes.any
  },

  getDefaultProps: function () {
    return {
      href: '#'
    };
  },

  handleClick: function (e) {
    if (this.props.onSelect) {
      e.preventDefault();
      this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
    }
  },

  renderAnchor: function () {
    return (
      React.createElement("a", {onClick: this.handleClick, href: this.props.href, target: this.props.target, title: this.props.title, tabIndex: "-1"}, 
        this.props.children
      )
    );
  },

  render: function () {
    var classes = {
        'dropdown-header': this.props.header,
        'divider': this.props.divider
      };

    var children = null;
    if (this.props.header) {
      children = this.props.children;
    } else if (!this.props.divider) {
      children = this.renderAnchor();
    }

    return (
      React.createElement("li", React.__spread({},  this.props, {role: "presentation", title: null, href: null, 
        className: joinClasses(this.props.className, classSet(classes))}), 
        children
      )
    );
  }
});

module.exports = MenuItem;
},{"./utils/classSet":82,"./utils/joinClasses":86}],53:[function(require,module,exports){
/* global document:false */

var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var BootstrapMixin = require('./BootstrapMixin');
var FadeMixin = require('./FadeMixin');
var EventListener = require('./utils/EventListener');


// TODO:
// - aria-labelledby
// - Add `modal-body` div if only one child passed in that doesn't already have it
// - Tests

var Modal = React.createClass({displayName: "Modal",
  mixins: [BootstrapMixin, FadeMixin],

  propTypes: {
    title: React.PropTypes.node,
    backdrop: React.PropTypes.oneOf(['static', true, false]),
    keyboard: React.PropTypes.bool,
    closeButton: React.PropTypes.bool,
    animation: React.PropTypes.bool,
    onRequestHide: React.PropTypes.func.isRequired
  },

  getDefaultProps: function () {
    return {
      bsClass: 'modal',
      backdrop: true,
      keyboard: true,
      animation: true,
      closeButton: true
    };
  },

  render: function () {
    var modalStyle = {display: 'block'};
    var dialogClasses = this.getBsClassSet();
    delete dialogClasses.modal;
    dialogClasses['modal-dialog'] = true;

    var classes = {
      modal: true,
      fade: this.props.animation,
      'in': !this.props.animation || !document.querySelectorAll
    };

    var modal = (
      React.createElement("div", React.__spread({}, 
        this.props, 
        {title: null, 
        tabIndex: "-1", 
        role: "dialog", 
        style: modalStyle, 
        className: joinClasses(this.props.className, classSet(classes)), 
        onClick: this.props.backdrop === true ? this.handleBackdropClick : null, 
        ref: "modal"}), 
        React.createElement("div", {className: classSet(dialogClasses)}, 
          React.createElement("div", {className: "modal-content", style: {overflow: 'hidden'}}, 
            this.props.title ? this.renderHeader() : null, 
            this.props.children
          )
        )
      )
    );

    return this.props.backdrop ?
      this.renderBackdrop(modal) : modal;
  },

  renderBackdrop: function (modal) {
    var classes = {
      'modal-backdrop': true,
      'fade': this.props.animation
    };

    classes['in'] = !this.props.animation || !document.querySelectorAll;

    var onClick = this.props.backdrop === true ?
      this.handleBackdropClick : null;

    return (
      React.createElement("div", null, 
        React.createElement("div", {className: classSet(classes), ref: "backdrop", onClick: onClick}), 
        modal
      )
    );
  },

  renderHeader: function () {
    var closeButton;
    if (this.props.closeButton) {
      closeButton = (
          React.createElement("button", {type: "button", className: "close", "aria-hidden": "true", onClick: this.props.onRequestHide}, "×")
        );
    }

    var style = this.props.bsStyle;
    var classes = {
      'modal-header': true
    };
    classes['bg-' + style] = style;
    classes['text-' + style] = style;

    var className = classSet(classes);

    return (
      React.createElement("div", {className: className}, 
        closeButton, 
        this.renderTitle()
      )
    );
  },

  renderTitle: function () {
    return (
      React.isValidElement(this.props.title) ?
        this.props.title : React.createElement("h4", {className: "modal-title"}, this.props.title)
    );
  },

  iosClickHack: function () {
    // IOS only allows click events to be delegated to the document on elements
    // it considers 'clickable' - anchors, buttons, etc. We fake a click handler on the
    // DOM nodes themselves. Remove if handled by React: https://github.com/facebook/react/issues/1169
    this.refs.modal.getDOMNode().onclick = function () {};
    this.refs.backdrop.getDOMNode().onclick = function () {};
  },

  componentDidMount: function () {
    this._onDocumentKeyupListener =
      EventListener.listen(document, 'keyup', this.handleDocumentKeyUp);

    var container = (this.props.container && this.props.container.getDOMNode()) || document.body;
    container.className += container.className.length ? ' modal-open' : 'modal-open';

    if (this.props.backdrop) {
      this.iosClickHack();
    }
  },

  componentDidUpdate: function (prevProps) {
    if (this.props.backdrop && this.props.backdrop !== prevProps.backdrop) {
      this.iosClickHack();
    }
  },

  componentWillUnmount: function () {
    this._onDocumentKeyupListener.remove();
    var container = (this.props.container && this.props.container.getDOMNode()) || document.body;
    container.className = container.className.replace(/ ?modal-open/, '');
  },

  handleBackdropClick: function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onRequestHide();
  },

  handleDocumentKeyUp: function (e) {
    if (this.props.keyboard && e.keyCode === 27) {
      this.props.onRequestHide();
    }
  }
});

module.exports = Modal;

},{"./BootstrapMixin":31,"./FadeMixin":43,"./utils/EventListener":78,"./utils/classSet":82,"./utils/joinClasses":86}],54:[function(require,module,exports){
var React = window.React;
var OverlayMixin = require('./OverlayMixin');
var cloneWithProps = require('./utils/cloneWithProps');

var createChainedFunction = require('./utils/createChainedFunction');

var ModalTrigger = React.createClass({displayName: "ModalTrigger",
  mixins: [OverlayMixin],

  propTypes: {
    modal: React.PropTypes.node.isRequired
  },

  getInitialState: function () {
    return {
      isOverlayShown: false
    };
  },

  show: function () {
    this.setState({
      isOverlayShown: true
    });
  },

  hide: function () {
    this.setState({
      isOverlayShown: false
    });
  },

  toggle: function () {
    this.setState({
      isOverlayShown: !this.state.isOverlayShown
    });
  },

  renderOverlay: function () {
    if (!this.state.isOverlayShown) {
      return React.createElement("span", null);
    }

    return cloneWithProps(
      this.props.modal,
      {
        onRequestHide: this.hide
      }
    );
  },

  render: function () {
    var child = React.Children.only(this.props.children);
    return cloneWithProps(
      child,
      {
        onClick: createChainedFunction(child.props.onClick, this.toggle)
      }
    );
  }
});

module.exports = ModalTrigger;
},{"./OverlayMixin":58,"./utils/cloneWithProps":83,"./utils/createChainedFunction":84}],55:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var BootstrapMixin = require('./BootstrapMixin');
var CollapsableMixin = require('./CollapsableMixin');
var classSet = require('./utils/classSet');
var domUtils = require('./utils/domUtils');
var cloneWithProps = require('./utils/cloneWithProps');

var ValidComponentChildren = require('./utils/ValidComponentChildren');
var createChainedFunction = require('./utils/createChainedFunction');


var Nav = React.createClass({displayName: "Nav",
  mixins: [BootstrapMixin, CollapsableMixin],

  propTypes: {
    bsStyle: React.PropTypes.oneOf(['tabs','pills']),
    stacked: React.PropTypes.bool,
    justified: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    collapsable: React.PropTypes.bool,
    expanded: React.PropTypes.bool,
    navbar: React.PropTypes.bool,
    eventKey: React.PropTypes.any,
    right: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      bsClass: 'nav'
    };
  },

  getCollapsableDOMNode: function () {
    return this.getDOMNode();
  },

  getCollapsableDimensionValue: function () {
    var node = this.refs.ul.getDOMNode(),
        height = node.offsetHeight,
        computedStyles = domUtils.getComputedStyles(node);

    return height + parseInt(computedStyles.marginTop, 10) + parseInt(computedStyles.marginBottom, 10);
  },

  render: function () {
    var classes = this.props.collapsable ? this.getCollapsableClassSet() : {};

    classes['navbar-collapse'] = this.props.collapsable;

    if (this.props.navbar && !this.props.collapsable) {
      return (this.renderUl());
    }

    return (
      React.createElement("nav", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
        this.renderUl()
      )
    );
  },

  renderUl: function () {
    var classes = this.getBsClassSet();

    classes['nav-stacked'] = this.props.stacked;
    classes['nav-justified'] = this.props.justified;
    classes['navbar-nav'] = this.props.navbar;
    classes['pull-right'] = this.props.pullRight;
    classes['navbar-right'] = this.props.right;

    return (
      React.createElement("ul", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes)), ref: "ul"}), 
        ValidComponentChildren.map(this.props.children, this.renderNavItem)
      )
    );
  },

  getChildActiveProp: function (child) {
    if (child.props.active) {
      return true;
    }
    if (this.props.activeKey != null) {
      if (child.props.eventKey == this.props.activeKey) {
        return true;
      }
    }
    if (this.props.activeHref != null) {
      if (child.props.href === this.props.activeHref) {
        return true;
      }
    }

    return child.props.active;
  },

  renderNavItem: function (child, index) {
    return cloneWithProps(
      child,
      {
        active: this.getChildActiveProp(child),
        activeKey: this.props.activeKey,
        activeHref: this.props.activeHref,
        onSelect: createChainedFunction(child.props.onSelect, this.props.onSelect),
        ref: child.ref,
        key: child.key ? child.key : index,
        navItem: true
      }
    );
  }
});

module.exports = Nav;

},{"./BootstrapMixin":31,"./CollapsableMixin":38,"./utils/ValidComponentChildren":81,"./utils/classSet":82,"./utils/cloneWithProps":83,"./utils/createChainedFunction":84,"./utils/domUtils":85,"./utils/joinClasses":86}],56:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var BootstrapMixin = require('./BootstrapMixin');

var NavItem = React.createClass({displayName: "NavItem",
  mixins: [BootstrapMixin],

  propTypes: {
    onSelect: React.PropTypes.func,
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    title: React.PropTypes.string,
    eventKey: React.PropTypes.any,
    target: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      href: '#'
    };
  },

  render: function () {
    var $__0=
        
        
        
        
        
        
           this.props,disabled=$__0.disabled,active=$__0.active,href=$__0.href,title=$__0.title,target=$__0.target,children=$__0.children,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{disabled:1,active:1,href:1,title:1,target:1,children:1}),
        classes = {
          'active': active,
          'disabled': disabled
        },
        linkProps = {
          href:href,
          title:title,
          target:target,
          onClick: this.handleClick,
          ref: 'anchor'
        };

    if (href === '#') {
      linkProps.role = 'button';
    }

    return (
      React.createElement("li", React.__spread({},  props, {className: joinClasses(props.className, classSet(classes))}), 
        React.createElement("a", React.__spread({},  linkProps), 
          children 
        )
      )
    );
  },

  handleClick: function (e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
      }
    }
  }
});

module.exports = NavItem;

},{"./BootstrapMixin":31,"./utils/classSet":82,"./utils/joinClasses":86}],57:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var BootstrapMixin = require('./BootstrapMixin');
var classSet = require('./utils/classSet');
var cloneWithProps = require('./utils/cloneWithProps');

var ValidComponentChildren = require('./utils/ValidComponentChildren');
var createChainedFunction = require('./utils/createChainedFunction');
var Nav = require('./Nav');


var Navbar = React.createClass({displayName: "Navbar",
  mixins: [BootstrapMixin],

  propTypes: {
    fixedTop: React.PropTypes.bool,
    fixedBottom: React.PropTypes.bool,
    staticTop: React.PropTypes.bool,
    inverse: React.PropTypes.bool,
    fluid: React.PropTypes.bool,
    role: React.PropTypes.string,
    componentClass: React.PropTypes.node.isRequired,
    brand: React.PropTypes.node,
    toggleButton: React.PropTypes.node,
    toggleNavKey: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    onToggle: React.PropTypes.func,
    navExpanded: React.PropTypes.bool,
    defaultNavExpanded: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      bsClass: 'navbar',
      bsStyle: 'default',
      role: 'navigation',
      componentClass: 'Nav'
    };
  },

  getInitialState: function () {
    return {
      navExpanded: this.props.defaultNavExpanded
    };
  },

  shouldComponentUpdate: function() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleToggle: function () {
    if (this.props.onToggle) {
      this._isChanging = true;
      this.props.onToggle();
      this._isChanging = false;
    }

    this.setState({
      navExpanded: !this.state.navExpanded
    });
  },

  isNavExpanded: function () {
    return this.props.navExpanded != null ? this.props.navExpanded : this.state.navExpanded;
  },

  render: function () {
    var classes = this.getBsClassSet();
    var ComponentClass = this.props.componentClass;

    classes['navbar-fixed-top'] = this.props.fixedTop;
    classes['navbar-fixed-bottom'] = this.props.fixedBottom;
    classes['navbar-static-top'] = this.props.staticTop;
    classes['navbar-inverse'] = this.props.inverse;

    return (
      React.createElement(ComponentClass, React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
        React.createElement("div", {className: this.props.fluid ? 'container-fluid' : 'container'}, 
          (this.props.brand || this.props.toggleButton || this.props.toggleNavKey != null) ? this.renderHeader() : null, 
          ValidComponentChildren.map(this.props.children, this.renderChild)
        )
      )
    );
  },

  renderChild: function (child, index) {
    return cloneWithProps(child, {
      navbar: true,
      collapsable: this.props.toggleNavKey != null && this.props.toggleNavKey === child.props.eventKey,
      expanded: this.props.toggleNavKey != null && this.props.toggleNavKey === child.props.eventKey && this.isNavExpanded(),
      key: child.key ? child.key : index,
      ref: child.ref
    });
  },

  renderHeader: function () {
    var brand;

    if (this.props.brand) {
      brand = React.isValidElement(this.props.brand) ?
        cloneWithProps(this.props.brand, {
          className: 'navbar-brand'
        }) : React.createElement("span", {className: "navbar-brand"}, this.props.brand);
    }

    return (
      React.createElement("div", {className: "navbar-header"}, 
        brand, 
        (this.props.toggleButton || this.props.toggleNavKey != null) ? this.renderToggleButton() : null
      )
    );
  },

  renderToggleButton: function () {
    var children;

    if (React.isValidElement(this.props.toggleButton)) {
      return cloneWithProps(this.props.toggleButton, {
        className: 'navbar-toggle',
        onClick: createChainedFunction(this.handleToggle, this.props.toggleButton.props.onClick)
      });
    }

    children = (this.props.toggleButton != null) ?
      this.props.toggleButton : [
        React.createElement("span", {className: "sr-only", key: 0}, "Toggle navigation"),
        React.createElement("span", {className: "icon-bar", key: 1}),
        React.createElement("span", {className: "icon-bar", key: 2}),
        React.createElement("span", {className: "icon-bar", key: 3})
    ];

    return (
      React.createElement("button", {className: "navbar-toggle", type: "button", onClick: this.handleToggle}, 
        children
      )
    );
  }
});

module.exports = Navbar;

},{"./BootstrapMixin":31,"./Nav":55,"./utils/ValidComponentChildren":81,"./utils/classSet":82,"./utils/cloneWithProps":83,"./utils/createChainedFunction":84,"./utils/joinClasses":86}],58:[function(require,module,exports){
var React = window.React;
var CustomPropTypes = require('./utils/CustomPropTypes');

module.exports = {
  propTypes: {
    container: CustomPropTypes.mountable
  },

  getDefaultProps: function () {
    return {
      container: {
        // Provide `getDOMNode` fn mocking a React component API. The `document.body`
        // reference needs to be contained within this function so that it is not accessed
        // in environments where it would not be defined, e.g. nodejs. Equally this is needed
        // before the body is defined where `document.body === null`, this ensures
        // `document.body` is only accessed after componentDidMount.
        getDOMNode: function getDOMNode() {
          return document.body;
        }
      }
    };
  },

  componentWillUnmount: function () {
    this._unrenderOverlay();
    if (this._overlayTarget) {
      this.getContainerDOMNode()
        .removeChild(this._overlayTarget);
      this._overlayTarget = null;
    }
  },

  componentDidUpdate: function () {
    this._renderOverlay();
  },

  componentDidMount: function () {
    this._renderOverlay();
  },

  _mountOverlayTarget: function () {
    this._overlayTarget = document.createElement('div');
    this.getContainerDOMNode()
      .appendChild(this._overlayTarget);
  },

  _renderOverlay: function () {
    if (!this._overlayTarget) {
      this._mountOverlayTarget();
    }

    var overlay = this.renderOverlay();

    // Save reference to help testing
    if (overlay !== null) {
      this._overlayInstance = React.render(overlay, this._overlayTarget);
    } else {
      // Unrender if the component is null for transitions to null
      this._unrenderOverlay();
    }
  },

  _unrenderOverlay: function () {
    React.unmountComponentAtNode(this._overlayTarget);
    this._overlayInstance = null;
  },

  getOverlayDOMNode: function () {
    if (!this.isMounted()) {
      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
    }

    if (this._overlayInstance) {
      return this._overlayInstance.getDOMNode();
    }

    return null;
  },

  getContainerDOMNode: function () {
    return this.props.container.getDOMNode ?
      this.props.container.getDOMNode() : this.props.container;
  }
};

},{"./utils/CustomPropTypes":77}],59:[function(require,module,exports){
var React = window.React;
var OverlayMixin = require('./OverlayMixin');
var domUtils = require('./utils/domUtils');
var cloneWithProps = require('./utils/cloneWithProps');

var createChainedFunction = require('./utils/createChainedFunction');
var assign = require('./utils/Object.assign');

/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
  if (Array.isArray(of)) {
    return of.indexOf(one) >= 0;
  }
  return one === of;
}

var OverlayTrigger = React.createClass({displayName: "OverlayTrigger",
  mixins: [OverlayMixin],

  propTypes: {
    trigger: React.PropTypes.oneOfType([
      React.PropTypes.oneOf(['manual', 'click', 'hover', 'focus']),
      React.PropTypes.arrayOf(React.PropTypes.oneOf(['click', 'hover', 'focus']))
    ]),
    placement: React.PropTypes.oneOf(['top','right', 'bottom', 'left']),
    delay: React.PropTypes.number,
    delayShow: React.PropTypes.number,
    delayHide: React.PropTypes.number,
    defaultOverlayShown: React.PropTypes.bool,
    overlay: React.PropTypes.node.isRequired
  },

  getDefaultProps: function () {
    return {
      placement: 'right',
      trigger: ['hover', 'focus']
    };
  },

  getInitialState: function () {
    return {
      isOverlayShown: this.props.defaultOverlayShown == null ?
        false : this.props.defaultOverlayShown,
      overlayLeft: null,
      overlayTop: null
    };
  },

  show: function () {
    this.setState({
      isOverlayShown: true
    }, function() {
      this.updateOverlayPosition();
    });
  },

  hide: function () {
    this.setState({
      isOverlayShown: false
    });
  },

  toggle: function () {
    this.state.isOverlayShown ?
      this.hide() : this.show();
  },

  renderOverlay: function () {
    if (!this.state.isOverlayShown) {
      return React.createElement("span", null);
    }

    return cloneWithProps(
      this.props.overlay,
      {
        onRequestHide: this.hide,
        placement: this.props.placement,
        positionLeft: this.state.overlayLeft,
        positionTop: this.state.overlayTop
      }
    );
  },

  render: function () {
    if (this.props.trigger === 'manual') {
      return React.Children.only(this.props.children);
    }

    var props = {};

    if (isOneOf('click', this.props.trigger)) {
      props.onClick = createChainedFunction(this.toggle, this.props.onClick);
    }

    if (isOneOf('hover', this.props.trigger)) {
      props.onMouseOver = createChainedFunction(this.handleDelayedShow, this.props.onMouseOver);
      props.onMouseOut = createChainedFunction(this.handleDelayedHide, this.props.onMouseOut);
    }

    if (isOneOf('focus', this.props.trigger)) {
      props.onFocus = createChainedFunction(this.handleDelayedShow, this.props.onFocus);
      props.onBlur = createChainedFunction(this.handleDelayedHide, this.props.onBlur);
    }

    return cloneWithProps(
      React.Children.only(this.props.children),
      props
    );
  },

  componentWillUnmount: function() {
    clearTimeout(this._hoverDelay);
  },

  componentDidMount: function() {
    if (this.props.defaultOverlayShown) {
      this.updateOverlayPosition();
    }
  },

  handleDelayedShow: function () {
    if (this._hoverDelay != null) {
      clearTimeout(this._hoverDelay);
      this._hoverDelay = null;
      return;
    }

    var delay = this.props.delayShow != null ?
      this.props.delayShow : this.props.delay;

    if (!delay) {
      this.show();
      return;
    }

    this._hoverDelay = setTimeout(function() {
      this._hoverDelay = null;
      this.show();
    }.bind(this), delay);
  },

  handleDelayedHide: function () {
    if (this._hoverDelay != null) {
      clearTimeout(this._hoverDelay);
      this._hoverDelay = null;
      return;
    }

    var delay = this.props.delayHide != null ?
      this.props.delayHide : this.props.delay;

    if (!delay) {
      this.hide();
      return;
    }

    this._hoverDelay = setTimeout(function() {
      this._hoverDelay = null;
      this.hide();
    }.bind(this), delay);
  },

  updateOverlayPosition: function () {
    if (!this.isMounted()) {
      return;
    }

    var pos = this.calcOverlayPosition();

    this.setState({
      overlayLeft: pos.left,
      overlayTop: pos.top
    });
  },

  calcOverlayPosition: function () {
    var childOffset = this.getPosition();

    var overlayNode = this.getOverlayDOMNode();
    var overlayHeight = overlayNode.offsetHeight;
    var overlayWidth = overlayNode.offsetWidth;

    switch (this.props.placement) {
      case 'right':
        return {
          top: childOffset.top + childOffset.height / 2 - overlayHeight / 2,
          left: childOffset.left + childOffset.width
        };
      case 'left':
        return {
          top: childOffset.top + childOffset.height / 2 - overlayHeight / 2,
          left: childOffset.left - overlayWidth
        };
      case 'top':
        return {
          top: childOffset.top - overlayHeight,
          left: childOffset.left + childOffset.width / 2 - overlayWidth / 2
        };
      case 'bottom':
        return {
          top: childOffset.top + childOffset.height,
          left: childOffset.left + childOffset.width / 2 - overlayWidth / 2
        };
      default:
        throw new Error('calcOverlayPosition(): No such placement of "' + this.props.placement + '" found.');
    }
  },

  getPosition: function () {
    var node = this.getDOMNode();
    var container = this.getContainerDOMNode();

    var offset = container.tagName == 'BODY' ?
      domUtils.getOffset(node) : domUtils.getPosition(node, container);

    return assign({}, offset, {
      height: node.offsetHeight,
      width: node.offsetWidth
    });
  }
});

module.exports = OverlayTrigger;
},{"./OverlayMixin":58,"./utils/Object.assign":79,"./utils/cloneWithProps":83,"./utils/createChainedFunction":84,"./utils/domUtils":85}],60:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');

var PageHeader = React.createClass({displayName: "PageHeader",

  render: function () {
    return (
      React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, 'page-header')}), 
        React.createElement("h1", null, this.props.children)
      )
    );
  }
});

module.exports = PageHeader;
},{"./utils/joinClasses":86}],61:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');

var PageItem = React.createClass({displayName: "PageItem",

  propTypes: {
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    previous: React.PropTypes.bool,
    next: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    eventKey: React.PropTypes.any
  },

  getDefaultProps: function () {
    return {
      href: '#'
    };
  },

  render: function () {
    var classes = {
      'disabled': this.props.disabled,
      'previous': this.props.previous,
      'next': this.props.next
    };

    return (
      React.createElement("li", React.__spread({}, 
        this.props, 
        {className: joinClasses(this.props.className, classSet(classes))}), 
        React.createElement("a", {
          href: this.props.href, 
          title: this.props.title, 
          target: this.props.target, 
          onClick: this.handleSelect, 
          ref: "anchor"}, 
          this.props.children
        )
      )
    );
  },

  handleSelect: function (e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
      }
    }
  }
});

module.exports = PageItem;
},{"./utils/classSet":82,"./utils/joinClasses":86}],62:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var cloneWithProps = require('./utils/cloneWithProps');

var ValidComponentChildren = require('./utils/ValidComponentChildren');
var createChainedFunction = require('./utils/createChainedFunction');

var Pager = React.createClass({displayName: "Pager",

  propTypes: {
    onSelect: React.PropTypes.func
  },

  render: function () {
    return (
      React.createElement("ul", React.__spread({}, 
        this.props, 
        {className: joinClasses(this.props.className, 'pager')}), 
        ValidComponentChildren.map(this.props.children, this.renderPageItem)
      )
    );
  },

  renderPageItem: function (child, index) {
    return cloneWithProps(
      child,
      {
        onSelect: createChainedFunction(child.props.onSelect, this.props.onSelect),
        ref: child.ref,
        key: child.key ? child.key : index
      }
    );
  }
});

module.exports = Pager;
},{"./utils/ValidComponentChildren":81,"./utils/cloneWithProps":83,"./utils/createChainedFunction":84,"./utils/joinClasses":86}],63:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var cloneWithProps = require('./utils/cloneWithProps');

var BootstrapMixin = require('./BootstrapMixin');
var CollapsableMixin = require('./CollapsableMixin');

var Panel = React.createClass({displayName: "Panel",
  mixins: [BootstrapMixin, CollapsableMixin],

  propTypes: {
    collapsable: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    header: React.PropTypes.node,
    footer: React.PropTypes.node,
    eventKey: React.PropTypes.any
  },

  getDefaultProps: function () {
    return {
      bsClass: 'panel',
      bsStyle: 'default'
    };
  },

  handleSelect: function(e){
    e.selected = true;

    if (this.props.onSelect) {
      this.props.onSelect(e, this.props.eventKey);
    } else {
      e.preventDefault();
    }

    if (e.selected) {
      this.handleToggle();
    }
  },

  handleToggle: function(){
    this.setState({expanded:!this.state.expanded});
  },

  getCollapsableDimensionValue: function () {
    return this.refs.panel.getDOMNode().scrollHeight;
  },

  getCollapsableDOMNode: function () {
    if (!this.isMounted() || !this.refs || !this.refs.panel) {
      return null;
    }

    return this.refs.panel.getDOMNode();
  },

  render: function () {
    var classes = this.getBsClassSet();

    return (
      React.createElement("div", React.__spread({},  this.props, 
        {className: joinClasses(this.props.className, classSet(classes)), 
        id: this.props.collapsable ? null : this.props.id, onSelect: null}), 
        this.renderHeading(), 
        this.props.collapsable ? this.renderCollapsableBody() : this.renderBody(), 
        this.renderFooter()
      )
    );
  },

  renderCollapsableBody: function () {
    var collapseClass = this.prefixClass('collapse');

    return (
      React.createElement("div", {
        className: classSet(this.getCollapsableClassSet(collapseClass)), 
        id: this.props.id, 
        ref: "panel", 
        "aria-expanded": this.isExpanded() ? 'true' : 'false'}, 
        this.renderBody()
      )
    );
  },

  renderBody: function () {
    var allChildren = this.props.children;
    var bodyElements = [];
    var panelBodyChildren = [];
    var bodyClass = this.prefixClass('body');

    function getProps() {
      return {key: bodyElements.length};
    }

    function addPanelChild (child) {
      bodyElements.push(cloneWithProps(child, getProps()));
    }

    function addPanelBody (children) {
      bodyElements.push(
        React.createElement("div", React.__spread({className: bodyClass},  getProps()), 
          children
        )
      );
    }

    function maybeRenderPanelBody () {
      if (panelBodyChildren.length === 0) {
        return;
      }

      addPanelBody(panelBodyChildren);
      panelBodyChildren = [];
    }

    // Handle edge cases where we should not iterate through children.
    if (!Array.isArray(allChildren) || allChildren.length === 0) {
      if (this.shouldRenderFill(allChildren)) {
        addPanelChild(allChildren);
      } else {
        addPanelBody(allChildren);
      }
    } else {

      allChildren.forEach(function(child) {
        if (this.shouldRenderFill(child)) {
          maybeRenderPanelBody();

          // Separately add the filled element.
          addPanelChild(child);
        } else {
          panelBodyChildren.push(child);
        }
      }.bind(this));

      maybeRenderPanelBody();
    }

    return bodyElements;
  },

  shouldRenderFill: function (child) {
    return React.isValidElement(child) && child.props.fill != null;
  },

  renderHeading: function () {
    var header = this.props.header;

    if (!header) {
      return null;
    }

    if (!React.isValidElement(header) || Array.isArray(header)) {
      header = this.props.collapsable ?
        this.renderCollapsableTitle(header) : header;
    } else if (this.props.collapsable) {
      header = cloneWithProps(header, {
        className: this.prefixClass('title'),
        children: this.renderAnchor(header.props.children)
      });
    } else {
      header = cloneWithProps(header, {
        className: this.prefixClass('title')
      });
    }

    return (
      React.createElement("div", {className: this.prefixClass('heading')}, 
        header
      )
    );
  },

  renderAnchor: function (header) {
    return (
      React.createElement("a", {
        href: '#' + (this.props.id || ''), 
        className: this.isExpanded() ? null : 'collapsed', 
        "aria-expanded": this.isExpanded() ? 'true' : 'false', 
        onClick: this.handleSelect}, 
        header
      )
    );
  },

  renderCollapsableTitle: function (header) {
    return (
      React.createElement("h4", {className: this.prefixClass('title')}, 
        this.renderAnchor(header)
      )
    );
  },

  renderFooter: function () {
    if (!this.props.footer) {
      return null;
    }

    return (
      React.createElement("div", {className: this.prefixClass('footer')}, 
        this.props.footer
      )
    );
  }
});

module.exports = Panel;

},{"./BootstrapMixin":31,"./CollapsableMixin":38,"./utils/classSet":82,"./utils/cloneWithProps":83,"./utils/joinClasses":86}],64:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var cloneWithProps = require('./utils/cloneWithProps');

var BootstrapMixin = require('./BootstrapMixin');
var ValidComponentChildren = require('./utils/ValidComponentChildren');

var PanelGroup = React.createClass({displayName: "PanelGroup",
  mixins: [BootstrapMixin],

  propTypes: {
    collapsable: React.PropTypes.bool,
    activeKey: React.PropTypes.any,
    defaultActiveKey: React.PropTypes.any,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      bsClass: 'panel-group'
    };
  },

  getInitialState: function () {
    var defaultActiveKey = this.props.defaultActiveKey;

    return {
      activeKey: defaultActiveKey
    };
  },

  render: function () {
    var classes = this.getBsClassSet();
    return (
      React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes)), onSelect: null}), 
        ValidComponentChildren.map(this.props.children, this.renderPanel)
      )
    );
  },

  renderPanel: function (child, index) {
    var activeKey =
      this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

    var props = {
      bsStyle: child.props.bsStyle || this.props.bsStyle,
      key: child.key ? child.key : index,
      ref: child.ref
    };

    if (this.props.accordion) {
      props.collapsable = true;
      props.expanded = (child.props.eventKey === activeKey);
      props.onSelect = this.handleSelect;
    }

    return cloneWithProps(
      child,
      props
    );
  },

  shouldComponentUpdate: function() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleSelect: function (e, key) {
    e.preventDefault();
      
    if (this.props.onSelect) {
      this._isChanging = true;
      this.props.onSelect(key);
      this._isChanging = false;
    }

    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({
      activeKey: key
    });
  }
});

module.exports = PanelGroup;
},{"./BootstrapMixin":31,"./utils/ValidComponentChildren":81,"./utils/classSet":82,"./utils/cloneWithProps":83,"./utils/joinClasses":86}],65:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var BootstrapMixin = require('./BootstrapMixin');


var Popover = React.createClass({displayName: "Popover",
  mixins: [BootstrapMixin],

  propTypes: {
    placement: React.PropTypes.oneOf(['top','right', 'bottom', 'left']),
    positionLeft: React.PropTypes.number,
    positionTop: React.PropTypes.number,
    arrowOffsetLeft: React.PropTypes.number,
    arrowOffsetTop: React.PropTypes.number,
    title: React.PropTypes.node
  },

  getDefaultProps: function () {
    return {
      placement: 'right'
    };
  },

  render: function () {
    var classes = {};
    classes['popover'] = true;
    classes[this.props.placement] = true;
    classes['in'] = this.props.positionLeft != null || this.props.positionTop != null;

    var style = {};
    style['left'] = this.props.positionLeft;
    style['top'] = this.props.positionTop;
    style['display'] = 'block';

    var arrowStyle = {};
    arrowStyle['left'] = this.props.arrowOffsetLeft;
    arrowStyle['top'] = this.props.arrowOffsetTop;

    return (
      React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes)), style: style, title: null}), 
        React.createElement("div", {className: "arrow", style: arrowStyle}), 
        this.props.title ? this.renderTitle() : null, 
        React.createElement("div", {className: "popover-content"}, 
          this.props.children
        )
      )
    );
  },

  renderTitle: function() {
    return (
      React.createElement("h3", {className: "popover-title"}, this.props.title)
    );
  }
});

module.exports = Popover;
},{"./BootstrapMixin":31,"./utils/classSet":82,"./utils/joinClasses":86}],66:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var Interpolate = require('./Interpolate');
var BootstrapMixin = require('./BootstrapMixin');
var classSet = require('./utils/classSet');
var cloneWithProps = require('./utils/cloneWithProps');

var ValidComponentChildren = require('./utils/ValidComponentChildren');


var ProgressBar = React.createClass({displayName: "ProgressBar",
  propTypes: {
    min: React.PropTypes.number,
    now: React.PropTypes.number,
    max: React.PropTypes.number,
    label: React.PropTypes.node,
    srOnly: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    active: React.PropTypes.bool
  },

  mixins: [BootstrapMixin],

  getDefaultProps: function () {
    return {
      bsClass: 'progress-bar',
      min: 0,
      max: 100
    };
  },

  getPercentage: function (now, min, max) {
    return Math.ceil((now - min) / (max - min) * 100);
  },

  render: function () {
    var classes = {
        progress: true
      };

    if (this.props.active) {
      classes['progress-striped'] = true;
      classes['active'] = true;
    } else if (this.props.striped) {
      classes['progress-striped'] = true;
    }

    if (!ValidComponentChildren.hasValidComponent(this.props.children)) {
      if (!this.props.isChild) {
        return (
          React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
            this.renderProgressBar()
          )
        );
      } else {
        return (
          this.renderProgressBar()
        );
      }
    } else {
      return (
        React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
          ValidComponentChildren.map(this.props.children, this.renderChildBar)
        )
      );
    }
  },

  renderChildBar: function (child, index) {
    return cloneWithProps(child, {
      isChild: true,
      key: child.key ? child.key : index,
      ref: child.ref
    });
  },

  renderProgressBar: function () {
    var percentage = this.getPercentage(
        this.props.now,
        this.props.min,
        this.props.max
      );

    var label;

    if (typeof this.props.label === "string") {
      label = this.renderLabel(percentage);
    } else if (this.props.label) {
      label = this.props.label;
    }

    if (this.props.srOnly) {
      label = this.renderScreenReaderOnlyLabel(label);
    }

    var classes = this.getBsClassSet();

    return (
      React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes)), role: "progressbar", 
        style: {width: percentage + '%'}, 
        "aria-valuenow": this.props.now, 
        "aria-valuemin": this.props.min, 
        "aria-valuemax": this.props.max}), 
        label
      )
    );
  },

  renderLabel: function (percentage) {
    var InterpolateClass = this.props.interpolateClass || Interpolate;

    return (
      React.createElement(InterpolateClass, {
        now: this.props.now, 
        min: this.props.min, 
        max: this.props.max, 
        percent: percentage, 
        bsStyle: this.props.bsStyle}, 
        this.props.label
      )
    );
  },

  renderScreenReaderOnlyLabel: function (label) {
    return (
      React.createElement("span", {className: "sr-only"}, 
        label
      )
    );
  }
});

module.exports = ProgressBar;

},{"./BootstrapMixin":31,"./Interpolate":47,"./utils/ValidComponentChildren":81,"./utils/classSet":82,"./utils/cloneWithProps":83,"./utils/joinClasses":86}],67:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');

var Row = React.createClass({displayName: "Row",
  propTypes: {
    componentClass: React.PropTypes.node.isRequired
  },

  getDefaultProps: function () {
    return {
      componentClass: 'div'
    };
  },

  render: function () {
    var ComponentClass = this.props.componentClass;

    return (
      React.createElement(ComponentClass, React.__spread({},  this.props, {className: joinClasses(this.props.className, 'row')}), 
        this.props.children
      )
    );
  }
});

module.exports = Row;
},{"./utils/joinClasses":86}],68:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var BootstrapMixin = require('./BootstrapMixin');
var DropdownStateMixin = require('./DropdownStateMixin');
var Button = require('./Button');
var ButtonGroup = require('./ButtonGroup');
var DropdownMenu = require('./DropdownMenu');

var SplitButton = React.createClass({displayName: "SplitButton",
  mixins: [BootstrapMixin, DropdownStateMixin],

  propTypes: {
    pullRight:     React.PropTypes.bool,
    title:         React.PropTypes.node,
    href:          React.PropTypes.string,
    target:        React.PropTypes.string,
    dropdownTitle: React.PropTypes.node,
    onClick:       React.PropTypes.func,
    onSelect:      React.PropTypes.func,
    disabled:      React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      dropdownTitle: 'Toggle dropdown'
    };
  },

  render: function () {
    var groupClasses = {
        'open': this.state.open,
        'dropup': this.props.dropup
      };

    var button = (
      React.createElement(Button, React.__spread({}, 
        this.props, 
        {ref: "button", 
        onClick: this.handleButtonClick, 
        title: null, 
        id: null}), 
        this.props.title
      )
    );

    var dropdownButton = (
      React.createElement(Button, React.__spread({}, 
        this.props, 
        {ref: "dropdownButton", 
        className: joinClasses(this.props.className, 'dropdown-toggle'), 
        onClick: this.handleDropdownClick, 
        title: null, 
        href: null, 
        target: null, 
        id: null}), 
        React.createElement("span", {className: "sr-only"}, this.props.dropdownTitle), 
        React.createElement("span", {className: "caret"})
      )
    );

    return (
      React.createElement(ButtonGroup, {
        bsSize: this.props.bsSize, 
        className: classSet(groupClasses), 
        id: this.props.id}, 
        button, 
        dropdownButton, 
        React.createElement(DropdownMenu, {
          ref: "menu", 
          onSelect: this.handleOptionSelect, 
          "aria-labelledby": this.props.id, 
          pullRight: this.props.pullRight}, 
          this.props.children
        )
      )
    );
  },

  handleButtonClick: function (e) {
    if (this.state.open) {
      this.setDropdownState(false);
    }

    if (this.props.onClick) {
      this.props.onClick(e, this.props.href, this.props.target);
    }
  },

  handleDropdownClick: function (e) {
    e.preventDefault();

    this.setDropdownState(!this.state.open);
  },

  handleOptionSelect: function (key) {
    if (this.props.onSelect) {
      this.props.onSelect(key);
    }

    this.setDropdownState(false);
  }
});

module.exports = SplitButton;

},{"./BootstrapMixin":31,"./Button":32,"./ButtonGroup":33,"./DropdownMenu":41,"./DropdownStateMixin":42,"./utils/classSet":82,"./utils/joinClasses":86}],69:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var cloneWithProps = require('./utils/cloneWithProps');

var ValidComponentChildren = require('./utils/ValidComponentChildren');
var createChainedFunction = require('./utils/createChainedFunction');
var BootstrapMixin = require('./BootstrapMixin');


var SubNav = React.createClass({displayName: "SubNav",
  mixins: [BootstrapMixin],

  propTypes: {
    onSelect: React.PropTypes.func,
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    title: React.PropTypes.string,
    text: React.PropTypes.node,
    target: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      bsClass: 'nav'
    };
  },

  handleClick: function (e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
      }
    }
  },

  isActive: function () {
    return this.isChildActive(this);
  },

  isChildActive: function (child) {
    if (child.props.active) {
      return true;
    }

    if (this.props.activeKey != null && this.props.activeKey === child.props.eventKey) {
      return true;
    }

    if (this.props.activeHref != null && this.props.activeHref === child.props.href) {
      return true;
    }

    if (child.props.children) {
      var isActive = false;

      ValidComponentChildren.forEach(
        child.props.children,
        function (child) {
          if (this.isChildActive(child)) {
            isActive = true;
          }
        },
        this
      );

      return isActive;
    }

    return false;
  },

  getChildActiveProp: function (child) {
    if (child.props.active) {
      return true;
    }
    if (this.props.activeKey != null) {
      if (child.props.eventKey == this.props.activeKey) {
        return true;
      }
    }
    if (this.props.activeHref != null) {
      if (child.props.href === this.props.activeHref) {
        return true;
      }
    }

    return child.props.active;
  },

  render: function () {
    var classes = {
      'active': this.isActive(),
      'disabled': this.props.disabled
    };

    return (
      React.createElement("li", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
        React.createElement("a", {
          href: this.props.href, 
          title: this.props.title, 
          target: this.props.target, 
          onClick: this.handleClick, 
          ref: "anchor"}, 
          this.props.text
        ), 
        React.createElement("ul", {className: "nav"}, 
          ValidComponentChildren.map(this.props.children, this.renderNavItem)
        )
      )
    );
  },

  renderNavItem: function (child, index) {
    return cloneWithProps(
      child,
      {
        active: this.getChildActiveProp(child),
        onSelect: createChainedFunction(child.props.onSelect, this.props.onSelect),
        ref: child.ref,
        key: child.key ? child.key : index
      }
    );
  }
});

module.exports = SubNav;

},{"./BootstrapMixin":31,"./utils/ValidComponentChildren":81,"./utils/classSet":82,"./utils/cloneWithProps":83,"./utils/createChainedFunction":84,"./utils/joinClasses":86}],70:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var TransitionEvents = require('./utils/TransitionEvents');

var TabPane = React.createClass({displayName: "TabPane",
  getDefaultProps: function () {
    return {
      animation: true
    };
  },

  getInitialState: function () {
    return {
      animateIn: false,
      animateOut: false
    };
  },

  componentWillReceiveProps: function (nextProps) {
    if (this.props.animation) {
      if (!this.state.animateIn && nextProps.active && !this.props.active) {
        this.setState({
          animateIn: true
        });
      } else if (!this.state.animateOut && !nextProps.active && this.props.active) {
        this.setState({
          animateOut: true
        });
      }
    }
  },

  componentDidUpdate: function () {
    if (this.state.animateIn) {
      setTimeout(this.startAnimateIn, 0);
    }
    if (this.state.animateOut) {
      TransitionEvents.addEndEventListener(
        this.getDOMNode(),
        this.stopAnimateOut
      );
    }
  },

  startAnimateIn: function () {
    if (this.isMounted()) {
      this.setState({
        animateIn: false
      });
    }
  },

  stopAnimateOut: function () {
    if (this.isMounted()) {
      this.setState({
        animateOut: false
      });

      if (typeof this.props.onAnimateOutEnd === 'function') {
        this.props.onAnimateOutEnd();
      }
    }
  },

  render: function () {
    var classes = {
      'tab-pane': true,
      'fade': true,
      'active': this.props.active || this.state.animateOut,
      'in': this.props.active && !this.state.animateIn
    };

    return (
      React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
        this.props.children
      )
    );
  }
});

module.exports = TabPane;
},{"./utils/TransitionEvents":80,"./utils/classSet":82,"./utils/joinClasses":86}],71:[function(require,module,exports){
var React = window.React;
var BootstrapMixin = require('./BootstrapMixin');
var cloneWithProps = require('./utils/cloneWithProps');

var ValidComponentChildren = require('./utils/ValidComponentChildren');
var Nav = require('./Nav');
var NavItem = require('./NavItem');

function getDefaultActiveKeyFromChildren(children) {
  var defaultActiveKey;

  ValidComponentChildren.forEach(children, function(child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });

  return defaultActiveKey;
}

var TabbedArea = React.createClass({displayName: "TabbedArea",
  mixins: [BootstrapMixin],

  propTypes: {
    bsStyle: React.PropTypes.oneOf(['tabs','pills']),
    animation: React.PropTypes.bool,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      bsStyle: "tabs",
      animation: true
    };
  },

  getInitialState: function () {
    var defaultActiveKey = this.props.defaultActiveKey != null ?
      this.props.defaultActiveKey : getDefaultActiveKeyFromChildren(this.props.children);

    // TODO: In __DEV__ mode warn via `console.warn` if no `defaultActiveKey` has
    // been set by this point, invalid children or missing key properties are likely the cause.

    return {
      activeKey: defaultActiveKey,
      previousActiveKey: null
    };
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.activeKey != null && nextProps.activeKey !== this.props.activeKey) {
      this.setState({
        previousActiveKey: this.props.activeKey
      });
    }
  },

  handlePaneAnimateOutEnd: function () {
    this.setState({
      previousActiveKey: null
    });
  },

  render: function () {
    var activeKey =
      this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

    function renderTabIfSet(child) {
      return child.props.tab != null ? this.renderTab(child) : null;
    }

    var nav = (
      React.createElement(Nav, React.__spread({},  this.props, {activeKey: activeKey, onSelect: this.handleSelect, ref: "tabs"}), 
        ValidComponentChildren.map(this.props.children, renderTabIfSet, this)
      )
    );

    return (
      React.createElement("div", null, 
        nav, 
        React.createElement("div", {id: this.props.id, className: "tab-content", ref: "panes"}, 
          ValidComponentChildren.map(this.props.children, this.renderPane)
        )
      )
    );
  },

  getActiveKey: function () {
    return this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
  },

  renderPane: function (child, index) {
    var activeKey = this.getActiveKey();

    return cloneWithProps(
        child,
        {
          active: (child.props.eventKey === activeKey &&
            (this.state.previousActiveKey == null || !this.props.animation)),
          ref: child.ref,
          key: child.key ? child.key : index,
          animation: this.props.animation,
          onAnimateOutEnd: (this.state.previousActiveKey != null &&
            child.props.eventKey === this.state.previousActiveKey) ? this.handlePaneAnimateOutEnd: null
        }
      );
  },

  renderTab: function (child) {
    var key = child.props.eventKey;
    return (
      React.createElement(NavItem, {
        ref: 'tab' + key, 
        eventKey: key}, 
        child.props.tab
      )
    );
  },

  shouldComponentUpdate: function() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleSelect: function (key) {
    if (this.props.onSelect) {
      this._isChanging = true;
      this.props.onSelect(key);
      this._isChanging = false;
    } else if (key !== this.getActiveKey()) {
      this.setState({
        activeKey: key,
        previousActiveKey: this.getActiveKey()
      });
    }
  }
});

module.exports = TabbedArea;
},{"./BootstrapMixin":31,"./Nav":55,"./NavItem":56,"./utils/ValidComponentChildren":81,"./utils/cloneWithProps":83}],72:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');

var Table = React.createClass({displayName: "Table",
  propTypes: {
    striped: React.PropTypes.bool,
    bordered: React.PropTypes.bool,
    condensed: React.PropTypes.bool,
    hover: React.PropTypes.bool,
    responsive: React.PropTypes.bool
  },

  render: function () {
    var classes = {
      'table': true,
      'table-striped': this.props.striped,
      'table-bordered': this.props.bordered,
      'table-condensed': this.props.condensed,
      'table-hover': this.props.hover
    };
    var table = (
      React.createElement("table", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
        this.props.children
      )
    );

    return this.props.responsive ? (
      React.createElement("div", {className: "table-responsive"}, 
        table
      )
    ) : table;
  }
});

module.exports = Table;
},{"./utils/classSet":82,"./utils/joinClasses":86}],73:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var BootstrapMixin = require('./BootstrapMixin');


var Tooltip = React.createClass({displayName: "Tooltip",
  mixins: [BootstrapMixin],

  propTypes: {
    placement: React.PropTypes.oneOf(['top','right', 'bottom', 'left']),
    positionLeft: React.PropTypes.number,
    positionTop: React.PropTypes.number,
    arrowOffsetLeft: React.PropTypes.number,
    arrowOffsetTop: React.PropTypes.number
  },

  getDefaultProps: function () {
    return {
      placement: 'right'
    };
  },

  render: function () {
    var classes = {};
    classes['tooltip'] = true;
    classes[this.props.placement] = true;
    classes['in'] = this.props.positionLeft != null || this.props.positionTop != null;

    var style = {};
    style['left'] = this.props.positionLeft;
    style['top'] = this.props.positionTop;

    var arrowStyle = {};
    arrowStyle['left'] = this.props.arrowOffsetLeft;
    arrowStyle['top'] = this.props.arrowOffsetTop;

    return (
        React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes)), style: style}), 
          React.createElement("div", {className: "tooltip-arrow", style: arrowStyle}), 
          React.createElement("div", {className: "tooltip-inner"}, 
            this.props.children
          )
        )
      );
  }
});

module.exports = Tooltip;
},{"./BootstrapMixin":31,"./utils/classSet":82,"./utils/joinClasses":86}],74:[function(require,module,exports){
var React = window.React;
var joinClasses = require('./utils/joinClasses');
var classSet = require('./utils/classSet');
var BootstrapMixin = require('./BootstrapMixin');

var Well = React.createClass({displayName: "Well",
  mixins: [BootstrapMixin],

  getDefaultProps: function () {
    return {
      bsClass: 'well'
    };
  },

  render: function () {
    var classes = this.getBsClassSet();

    return (
      React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
        this.props.children
      )
    );
  }
});

module.exports = Well;
},{"./BootstrapMixin":31,"./utils/classSet":82,"./utils/joinClasses":86}],75:[function(require,module,exports){
module.exports = {
  CLASSES: {
    'alert': 'alert',
    'button': 'btn',
    'button-group': 'btn-group',
    'button-toolbar': 'btn-toolbar',
    'column': 'col',
    'input-group': 'input-group',
    'form': 'form',
    'glyphicon': 'glyphicon',
    'label': 'label',
    'list-group-item': 'list-group-item',
    'panel': 'panel',
    'panel-group': 'panel-group',
    'progress-bar': 'progress-bar',
    'nav': 'nav',
    'navbar': 'navbar',
    'modal': 'modal',
    'row': 'row',
    'well': 'well'
  },
  STYLES: {
    'default': 'default',
    'primary': 'primary',
    'success': 'success',
    'info': 'info',
    'warning': 'warning',
    'danger': 'danger',
    'link': 'link',
    'inline': 'inline',
    'tabs': 'tabs',
    'pills': 'pills'
  },
  SIZES: {
    'large': 'lg',
    'medium': 'md',
    'small': 'sm',
    'xsmall': 'xs'
  },
  GLYPHS: [
    'asterisk',
    'plus',
    'euro',
    'eur',
    'minus',
    'cloud',
    'envelope',
    'pencil',
    'glass',
    'music',
    'search',
    'heart',
    'star',
    'star-empty',
    'user',
    'film',
    'th-large',
    'th',
    'th-list',
    'ok',
    'remove',
    'zoom-in',
    'zoom-out',
    'off',
    'signal',
    'cog',
    'trash',
    'home',
    'file',
    'time',
    'road',
    'download-alt',
    'download',
    'upload',
    'inbox',
    'play-circle',
    'repeat',
    'refresh',
    'list-alt',
    'lock',
    'flag',
    'headphones',
    'volume-off',
    'volume-down',
    'volume-up',
    'qrcode',
    'barcode',
    'tag',
    'tags',
    'book',
    'bookmark',
    'print',
    'camera',
    'font',
    'bold',
    'italic',
    'text-height',
    'text-width',
    'align-left',
    'align-center',
    'align-right',
    'align-justify',
    'list',
    'indent-left',
    'indent-right',
    'facetime-video',
    'picture',
    'map-marker',
    'adjust',
    'tint',
    'edit',
    'share',
    'check',
    'move',
    'step-backward',
    'fast-backward',
    'backward',
    'play',
    'pause',
    'stop',
    'forward',
    'fast-forward',
    'step-forward',
    'eject',
    'chevron-left',
    'chevron-right',
    'plus-sign',
    'minus-sign',
    'remove-sign',
    'ok-sign',
    'question-sign',
    'info-sign',
    'screenshot',
    'remove-circle',
    'ok-circle',
    'ban-circle',
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'arrow-down',
    'share-alt',
    'resize-full',
    'resize-small',
    'exclamation-sign',
    'gift',
    'leaf',
    'fire',
    'eye-open',
    'eye-close',
    'warning-sign',
    'plane',
    'calendar',
    'random',
    'comment',
    'magnet',
    'chevron-up',
    'chevron-down',
    'retweet',
    'shopping-cart',
    'folder-close',
    'folder-open',
    'resize-vertical',
    'resize-horizontal',
    'hdd',
    'bullhorn',
    'bell',
    'certificate',
    'thumbs-up',
    'thumbs-down',
    'hand-right',
    'hand-left',
    'hand-up',
    'hand-down',
    'circle-arrow-right',
    'circle-arrow-left',
    'circle-arrow-up',
    'circle-arrow-down',
    'globe',
    'wrench',
    'tasks',
    'filter',
    'briefcase',
    'fullscreen',
    'dashboard',
    'paperclip',
    'heart-empty',
    'link',
    'phone',
    'pushpin',
    'usd',
    'gbp',
    'sort',
    'sort-by-alphabet',
    'sort-by-alphabet-alt',
    'sort-by-order',
    'sort-by-order-alt',
    'sort-by-attributes',
    'sort-by-attributes-alt',
    'unchecked',
    'expand',
    'collapse-down',
    'collapse-up',
    'log-in',
    'flash',
    'log-out',
    'new-window',
    'record',
    'save',
    'open',
    'saved',
    'import',
    'export',
    'send',
    'floppy-disk',
    'floppy-saved',
    'floppy-remove',
    'floppy-save',
    'floppy-open',
    'credit-card',
    'transfer',
    'cutlery',
    'header',
    'compressed',
    'earphone',
    'phone-alt',
    'tower',
    'stats',
    'sd-video',
    'hd-video',
    'subtitles',
    'sound-stereo',
    'sound-dolby',
    'sound-5-1',
    'sound-6-1',
    'sound-7-1',
    'copyright-mark',
    'registration-mark',
    'cloud-download',
    'cloud-upload',
    'tree-conifer',
    'tree-deciduous',
    'cd',
    'save-file',
    'open-file',
    'level-up',
    'copy',
    'paste',
    'alert',
    'equalizer',
    'king',
    'queen',
    'pawn',
    'bishop',
    'knight',
    'baby-formula',
    'tent',
    'blackboard',
    'bed',
    'apple',
    'erase',
    'hourglass',
    'lamp',
    'duplicate',
    'piggy-bank',
    'scissors',
    'bitcoin',
    'yen',
    'ruble',
    'scale',
    'ice-lolly',
    'ice-lolly-tasted',
    'education',
    'option-horizontal',
    'option-vertical',
    'menu-hamburger',
    'modal-window',
    'oil',
    'grain',
    'sunglasses',
    'text-size',
    'text-color',
    'text-background',
    'object-align-top',
    'object-align-bottom',
    'object-align-horizontal',
    'object-align-left',
    'object-align-vertical',
    'object-align-right',
    'triangle-right',
    'triangle-left',
    'triangle-bottom',
    'triangle-top',
    'console',
    'superscript',
    'subscript',
    'menu-left',
    'menu-right',
    'menu-down',
    'menu-up'
  ]
};

},{}],76:[function(require,module,exports){
module.exports = {
  Accordion: require('./Accordion'),
  Affix: require('./Affix'),
  AffixMixin: require('./AffixMixin'),
  Alert: require('./Alert'),
  BootstrapMixin: require('./BootstrapMixin'),
  Badge: require('./Badge'),
  Button: require('./Button'),
  ButtonGroup: require('./ButtonGroup'),
  ButtonToolbar: require('./ButtonToolbar'),
  Carousel: require('./Carousel'),
  CarouselItem: require('./CarouselItem'),
  Col: require('./Col'),
  CollapsableNav: require('./CollapsableNav'),
  CollapsableMixin: require('./CollapsableMixin'),
  DropdownButton: require('./DropdownButton'),
  DropdownMenu: require('./DropdownMenu'),
  DropdownStateMixin: require('./DropdownStateMixin'),
  FadeMixin: require('./FadeMixin'),
  Glyphicon: require('./Glyphicon'),
  Grid: require('./Grid'),
  Input: require('./Input'),
  Interpolate: require('./Interpolate'),
  Jumbotron: require('./Jumbotron'),
  Label: require('./Label'),
  ListGroup: require('./ListGroup'),
  ListGroupItem: require('./ListGroupItem'),
  MenuItem: require('./MenuItem'),
  Modal: require('./Modal'),
  Nav: require('./Nav'),
  Navbar: require('./Navbar'),
  NavItem: require('./NavItem'),
  ModalTrigger: require('./ModalTrigger'),
  OverlayTrigger: require('./OverlayTrigger'),
  OverlayMixin: require('./OverlayMixin'),
  PageHeader: require('./PageHeader'),
  Panel: require('./Panel'),
  PanelGroup: require('./PanelGroup'),
  PageItem: require('./PageItem'),
  Pager: require('./Pager'),
  Popover: require('./Popover'),
  ProgressBar: require('./ProgressBar'),
  Row: require('./Row'),
  SplitButton: require('./SplitButton'),
  SubNav: require('./SubNav'),
  TabbedArea: require('./TabbedArea'),
  Table: require('./Table'),
  TabPane: require('./TabPane'),
  Tooltip: require('./Tooltip'),
  Well: require('./Well')
};

},{"./Accordion":26,"./Affix":27,"./AffixMixin":28,"./Alert":29,"./Badge":30,"./BootstrapMixin":31,"./Button":32,"./ButtonGroup":33,"./ButtonToolbar":34,"./Carousel":35,"./CarouselItem":36,"./Col":37,"./CollapsableMixin":38,"./CollapsableNav":39,"./DropdownButton":40,"./DropdownMenu":41,"./DropdownStateMixin":42,"./FadeMixin":43,"./Glyphicon":44,"./Grid":45,"./Input":46,"./Interpolate":47,"./Jumbotron":48,"./Label":49,"./ListGroup":50,"./ListGroupItem":51,"./MenuItem":52,"./Modal":53,"./ModalTrigger":54,"./Nav":55,"./NavItem":56,"./Navbar":57,"./OverlayMixin":58,"./OverlayTrigger":59,"./PageHeader":60,"./PageItem":61,"./Pager":62,"./Panel":63,"./PanelGroup":64,"./Popover":65,"./ProgressBar":66,"./Row":67,"./SplitButton":68,"./SubNav":69,"./TabPane":70,"./TabbedArea":71,"./Table":72,"./Tooltip":73,"./Well":74}],77:[function(require,module,exports){
var React = window.React;

var ANONYMOUS = '<<anonymous>>';

var CustomPropTypes = {
  /**
   * Checks whether a prop provides a DOM element
   *
   * The element can be provided in two forms:
   * - Directly passed
   * - Or passed an object which has a `getDOMNode` method which will return the required DOM element
   *
   * @param props
   * @param propName
   * @param componentName
   * @returns {Error|undefined}
   */
  mountable: createMountableChecker()
};

/**
 * Create chain-able isRequired validator
 *
 * Largely copied directly from:
 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
 */
function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName) {
    componentName = componentName || ANONYMOUS;
    if (props[propName] == null) {
      if (isRequired) {
        return new Error(
          'Required prop `' + propName + '` was not specified in ' +
            '`' + componentName + '`.'
        );
      }
    } else {
      return validate(props, propName, componentName);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createMountableChecker() {
  function validate(props, propName, componentName) {
    if (typeof props[propName] !== 'object' ||
      typeof props[propName].getDOMNode !== 'function' && props[propName].nodeType !== 1) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to ' +
          '`' + componentName + '`, expected a DOM element or an object that has a `getDOMNode` method'
      );
    }
  }

  return createChainableTypeChecker(validate);
}

module.exports = CustomPropTypes;
},{}],78:[function(require,module,exports){
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * This file contains a modified version of:
 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/EventListener.js
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * TODO: remove in favour of solution provided by:
 *  https://github.com/facebook/react/issues/285
 */

/**
 * Does not take into account specific nature of platform.
 */
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  }
};

module.exports = EventListener;

},{}],79:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This file contains an unmodified version of:
 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/Object.assign.js
 *
 * This source code is licensed under the BSD-style license found here:
 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
 * An additional grant of patent rights can be found here:
 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  return to;
};

module.exports = assign;

},{}],80:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This file contains a modified version of:
 * https://github.com/facebook/react/blob/v0.12.0/src/addons/transitions/ReactTransitionEvents.js
 *
 * This source code is licensed under the BSD-style license found here:
 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
 * An additional grant of patent rights can be found here:
 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
 */

var canUseDOM = !!(
  typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );

/**
 * EVENT_NAME_MAP is used to determine which event fired when a
 * transition/animation ends, based on the style property used to
 * define that event.
 */
var EVENT_NAME_MAP = {
  transitionend: {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'mozTransitionEnd',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd'
  },

  animationend: {
    'animation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd',
    'MozAnimation': 'mozAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'msAnimation': 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are useable, and if not remove them
  // from the map
  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    var baseEvents = EVENT_NAME_MAP[baseEventName];
    for (var styleName in baseEvents) {
      if (styleName in style) {
        endEvents.push(baseEvents[styleName]);
        break;
      }
    }
  }
}

if (canUseDOM) {
  detectEvents();
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var ReactTransitionEvents = {
  addEndEventListener: function(node, eventListener) {
    if (endEvents.length === 0) {
      // If CSS transitions are not supported, trigger an "end animation"
      // event immediately.
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function(endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },

  removeEndEventListener: function(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function(endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

module.exports = ReactTransitionEvents;

},{}],81:[function(require,module,exports){
var React = window.React;

/**
 * Maps children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} mapFunction.
 * @param {*} mapContext Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapValidComponents(children, func, context) {
  var index = 0;

  return React.Children.map(children, function (child) {
    if (React.isValidElement(child)) {
      var lastIndex = index;
      index++;
      return func.call(context, child, lastIndex);
    }

    return child;
  });
}

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc.
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachValidComponents(children, func, context) {
  var index = 0;

  return React.Children.forEach(children, function (child) {
    if (React.isValidElement(child)) {
      func.call(context, child, index);
      index++;
    }
  });
}

/**
 * Count the number of "valid components" in the Children container.
 *
 * @param {?*} children Children tree container.
 * @returns {number}
 */
function numberOfValidComponents(children) {
  var count = 0;

  React.Children.forEach(children, function (child) {
    if (React.isValidElement(child)) { count++; }
  });

  return count;
}

/**
 * Determine if the Child container has one or more "valid components".
 *
 * @param {?*} children Children tree container.
 * @returns {boolean}
 */
function hasValidComponent(children) {
  var hasValid = false;

  React.Children.forEach(children, function (child) {
    if (!hasValid && React.isValidElement(child)) {
      hasValid = true;
    }
  });

  return hasValid;
}

module.exports = {
  map: mapValidComponents,
  forEach: forEachValidComponents,
  numberOf: numberOfValidComponents,
  hasValidComponent: hasValidComponent
};
},{}],82:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This file contains an unmodified version of:
 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/cx.js
 *
 * This source code is licensed under the BSD-style license found here:
 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
 * An additional grant of patent rights can be found here:
 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
 */

/**
 * This function is used to mark string literals representing CSS class names
 * so that they can be transformed statically. This allows for modularization
 * and minification of CSS class names.
 *
 * In static_upstream, this function is actually implemented, but it should
 * eventually be replaced with something more descriptive, and the transform
 * that is used in the main stack should be ported for use elsewhere.
 *
 * @param string|object className to modularize, or an object of key/values.
 *                      In the object case, the values are conditions that
 *                      determine if the className keys should be included.
 * @param [string ...]  Variable list of classNames in the string case.
 * @return string       Renderable space-separated CSS className.
 */
function cx(classNames) {
  if (typeof classNames == 'object') {
    return Object.keys(classNames).filter(function(className) {
      return classNames[className];
    }).join(' ');
  } else {
    return Array.prototype.join.call(arguments, ' ');
  }
}

module.exports = cx;
},{}],83:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This file contains modified versions of:
 * https://github.com/facebook/react/blob/v0.12.0/src/utils/cloneWithProps.js
 * https://github.com/facebook/react/blob/v0.12.0/src/core/ReactPropTransferer.js
 *
 * This source code is licensed under the BSD-style license found here:
 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
 * An additional grant of patent rights can be found here:
 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
 *
 * TODO: This should be replaced as soon as cloneWithProps is available via
 *  the core React package or a separate package.
 *  @see https://github.com/facebook/react/issues/1906
 */

var React = window.React;
var joinClasses = require('./joinClasses');
var assign = require("./Object.assign");

/**
 * Creates a transfer strategy that will merge prop values using the supplied
 * `mergeStrategy`. If a prop was previously unset, this just sets it.
 *
 * @param {function} mergeStrategy
 * @return {function}
 */
function createTransferStrategy(mergeStrategy) {
  return function(props, key, value) {
    if (!props.hasOwnProperty(key)) {
      props[key] = value;
    } else {
      props[key] = mergeStrategy(props[key], value);
    }
  };
}

var transferStrategyMerge = createTransferStrategy(function(a, b) {
  // `merge` overrides the first object's (`props[key]` above) keys using the
  // second object's (`value`) keys. An object's style's existing `propA` would
  // get overridden. Flip the order here.
  return assign({}, b, a);
});

function emptyFunction() {}

/**
 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
 * NOTE: if you add any more exceptions to this list you should be sure to
 * update `cloneWithProps()` accordingly.
 */
var TransferStrategies = {
  /**
   * Never transfer `children`.
   */
  children: emptyFunction,
  /**
   * Transfer the `className` prop by merging them.
   */
  className: createTransferStrategy(joinClasses),
  /**
   * Transfer the `style` prop (which is an object) by merging them.
   */
  style: transferStrategyMerge
};

/**
 * Mutates the first argument by transferring the properties from the second
 * argument.
 *
 * @param {object} props
 * @param {object} newProps
 * @return {object}
 */
function transferInto(props, newProps) {
  for (var thisKey in newProps) {
    if (!newProps.hasOwnProperty(thisKey)) {
      continue;
    }

    var transferStrategy = TransferStrategies[thisKey];

    if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
      transferStrategy(props, thisKey, newProps[thisKey]);
    } else if (!props.hasOwnProperty(thisKey)) {
      props[thisKey] = newProps[thisKey];
    }
  }
  return props;
}

/**
 * Merge two props objects using TransferStrategies.
 *
 * @param {object} oldProps original props (they take precedence)
 * @param {object} newProps new props to merge in
 * @return {object} a new object containing both sets of props merged.
 */
function mergeProps(oldProps, newProps) {
  return transferInto(assign({}, oldProps), newProps);
}


var ReactPropTransferer = {
  mergeProps: mergeProps
};

var CHILDREN_PROP = 'children';

/**
 * Sometimes you want to change the props of a child passed to you. Usually
 * this is to add a CSS class.
 *
 * @param {object} child child component you'd like to clone
 * @param {object} props props you'd like to modify. They will be merged
 * as if you used `transferPropsTo()`.
 * @return {object} a clone of child with props merged in.
 */
function cloneWithProps(child, props) {
  var newProps = ReactPropTransferer.mergeProps(props, child.props);

  // Use `child.props.children` if it is provided.
  if (!newProps.hasOwnProperty(CHILDREN_PROP) &&
    child.props.hasOwnProperty(CHILDREN_PROP)) {
    newProps.children = child.props.children;
  }

  if (React.version.substr(0, 4) === '0.12'){
    var mockLegacyFactory = function(){};
    mockLegacyFactory.isReactLegacyFactory = true;
    mockLegacyFactory.type = child.type;

    return React.createElement(mockLegacyFactory, newProps);
  }

  // The current API doesn't retain _owner and _context, which is why this
  // doesn't use ReactElement.cloneAndReplaceProps.
  return React.createElement(child.type, newProps);
}

module.exports = cloneWithProps;
},{"./Object.assign":79,"./joinClasses":86}],84:[function(require,module,exports){
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} one
 * @param {function} two
 * @returns {function|null}
 */
function createChainedFunction(one, two) {
  var hasOne = typeof one === 'function';
  var hasTwo = typeof two === 'function';

  if (!hasOne && !hasTwo) { return null; }
  if (!hasOne) { return two; }
  if (!hasTwo) { return one; }

  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

module.exports = createChainedFunction;
},{}],85:[function(require,module,exports){

/**
 * Shortcut to compute element style
 *
 * @param {HTMLElement} elem
 * @returns {CssStyle}
 */
function getComputedStyles(elem) {
  return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
}

/**
 * Get elements offset
 *
 * TODO: REMOVE JQUERY!
 *
 * @param {HTMLElement} DOMNode
 * @returns {{top: number, left: number}}
 */
function getOffset(DOMNode) {
  if (window.jQuery) {
    return window.jQuery(DOMNode).offset();
  }

  var docElem = document.documentElement;
  var box = { top: 0, left: 0 };

  // If we don't have gBCR, just use 0,0 rather than error
  // BlackBerry 5, iOS 3 (original iPhone)
  if ( typeof DOMNode.getBoundingClientRect !== 'undefined' ) {
    box = DOMNode.getBoundingClientRect();
  }

  return {
    top: box.top + window.pageYOffset - docElem.clientTop,
    left: box.left + window.pageXOffset - docElem.clientLeft
  };
}

/**
 * Get elements position
 *
 * TODO: REMOVE JQUERY!
 *
 * @param {HTMLElement} elem
 * @param {HTMLElement?} offsetParent
 * @returns {{top: number, left: number}}
 */
function getPosition(elem, offsetParent) {
  if (window.jQuery) {
    return window.jQuery(elem).position();
  }

  var offset,
      parentOffset = {top: 0, left: 0};

  // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
  if (getComputedStyles(elem).position === 'fixed' ) {
    // We assume that getBoundingClientRect is available when computed position is fixed
    offset = elem.getBoundingClientRect();

  } else {
    if (!offsetParent) {
      // Get *real* offsetParent
      offsetParent = offsetParent(elem);
    }

    // Get correct offsets
    offset = getOffset(elem);
    if ( offsetParent.nodeName !== 'HTML') {
      parentOffset = getOffset(offsetParent);
    }

    // Add offsetParent borders
    parentOffset.top += parseInt(getComputedStyles(offsetParent).borderTopWidth, 10);
    parentOffset.left += parseInt(getComputedStyles(offsetParent).borderLeftWidth, 10);
  }

  // Subtract parent offsets and element margins
  return {
    top: offset.top - parentOffset.top - parseInt(getComputedStyles(elem).marginTop, 10),
    left: offset.left - parentOffset.left - parseInt(getComputedStyles(elem).marginLeft, 10)
  };
}

/**
 * Get parent element
 *
 * @param {HTMLElement?} elem
 * @returns {HTMLElement}
 */
function offsetParent(elem) {
  var docElem = document.documentElement;
  var offsetParent = elem.offsetParent || docElem;

  while ( offsetParent && ( offsetParent.nodeName !== 'HTML' &&
    getComputedStyles(offsetParent).position === 'static' ) ) {
    offsetParent = offsetParent.offsetParent;
  }

  return offsetParent || docElem;
}

module.exports = {
  getComputedStyles: getComputedStyles,
  getOffset: getOffset,
  getPosition: getPosition,
  offsetParent: offsetParent
};
},{}],86:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This file contains an unmodified version of:
 * https://github.com/facebook/react/blob/v0.12.0/src/utils/joinClasses.js
 *
 * This source code is licensed under the BSD-style license found here:
 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
 * An additional grant of patent rights can be found here:
 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
 */

"use strict";

/**
 * Combines multiple className strings into one.
 * http://jsperf.com/joinclasses-args-vs-array
 *
 * @param {...?string} classes
 * @return {string}
 */
function joinClasses(className/*, ... */) {
  if (!className) {
    className = '';
  }
  var nextClass;
  var argLength = arguments.length;
  if (argLength > 1) {
    for (var ii = 1; ii < argLength; ii++) {
      nextClass = arguments[ii];
      if (nextClass) {
        className = (className ? className + ' ' : '') + nextClass;
      }
    }
  }
  return className;
}

module.exports = joinClasses;

},{}],87:[function(require,module,exports){
/**
 * Represents a cancellation caused by navigating away
 * before the previous transition has fully resolved.
 */
"use strict";

function Cancellation() {}

module.exports = Cancellation;
},{}],88:[function(require,module,exports){
'use strict';

var invariant = require('invariant');
var canUseDOM = require('can-use-dom');

var History = {

  /**
   * The current number of entries in the history.
   *
   * Note: This property is read-only.
   */
  length: 1,

  /**
   * Sends the browser back one entry in the history.
   */
  back: function back() {
    invariant(canUseDOM, 'Cannot use History.back without a DOM');

    // Do this first so that History.length will
    // be accurate in location change listeners.
    History.length -= 1;

    window.history.back();
  }

};

module.exports = History;
},{"can-use-dom":17,"invariant":22}],89:[function(require,module,exports){
/* jshint -W084 */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PathUtils = require('./PathUtils');

function deepSearch(route, pathname, query) {
  // Check the subtree first to find the most deeply-nested match.
  var childRoutes = route.childRoutes;
  if (childRoutes) {
    var match, childRoute;
    for (var i = 0, len = childRoutes.length; i < len; ++i) {
      childRoute = childRoutes[i];

      if (childRoute.isDefault || childRoute.isNotFound) continue; // Check these in order later.

      if (match = deepSearch(childRoute, pathname, query)) {
        // A route in the subtree matched! Add this route and we're done.
        match.routes.unshift(route);
        return match;
      }
    }
  }

  // No child routes matched; try the default route.
  var defaultRoute = route.defaultRoute;
  if (defaultRoute && (params = PathUtils.extractParams(defaultRoute.path, pathname))) return new Match(pathname, params, query, [route, defaultRoute]);

  // Does the "not found" route match?
  var notFoundRoute = route.notFoundRoute;
  if (notFoundRoute && (params = PathUtils.extractParams(notFoundRoute.path, pathname))) return new Match(pathname, params, query, [route, notFoundRoute]);

  // Last attempt: check this route.
  var params = PathUtils.extractParams(route.path, pathname);
  if (params) return new Match(pathname, params, query, [route]);

  return null;
}

var Match = (function () {
  _createClass(Match, null, [{
    key: 'findMatch',

    /**
     * Attempts to match depth-first a route in the given route's
     * subtree against the given path and returns the match if it
     * succeeds, null if no match can be made.
     */
    value: function findMatch(routes, path) {
      var pathname = PathUtils.withoutQuery(path);
      var query = PathUtils.extractQuery(path);
      var match = null;

      for (var i = 0, len = routes.length; match == null && i < len; ++i) match = deepSearch(routes[i], pathname, query);

      return match;
    }
  }]);

  function Match(pathname, params, query, routes) {
    _classCallCheck(this, Match);

    this.pathname = pathname;
    this.params = params;
    this.query = query;
    this.routes = routes;
  }

  return Match;
})();

module.exports = Match;
},{"./PathUtils":91}],90:[function(require,module,exports){
'use strict';

var PropTypes = require('./PropTypes');

/**
 * A mixin for components that modify the URL.
 *
 * Example:
 *
 *   var MyLink = React.createClass({
 *     mixins: [ Router.Navigation ],
 *     handleClick(event) {
 *       event.preventDefault();
 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
 *     },
 *     render() {
 *       return (
 *         <a onClick={this.handleClick}>Click me!</a>
 *       );
 *     }
 *   });
 */
var Navigation = {

  contextTypes: {
    router: PropTypes.router.isRequired
  },

  /**
   * Returns an absolute URL path created from the given route
   * name, URL parameters, and query values.
   */
  makePath: function makePath(to, params, query) {
    return this.context.router.makePath(to, params, query);
  },

  /**
   * Returns a string that may safely be used as the href of a
   * link to the route with the given name.
   */
  makeHref: function makeHref(to, params, query) {
    return this.context.router.makeHref(to, params, query);
  },

  /**
   * Transitions to the URL specified in the arguments by pushing
   * a new URL onto the history stack.
   */
  transitionTo: function transitionTo(to, params, query) {
    this.context.router.transitionTo(to, params, query);
  },

  /**
   * Transitions to the URL specified in the arguments by replacing
   * the current URL in the history stack.
   */
  replaceWith: function replaceWith(to, params, query) {
    this.context.router.replaceWith(to, params, query);
  },

  /**
   * Transitions to the previous URL.
   */
  goBack: function goBack() {
    return this.context.router.goBack();
  }

};

module.exports = Navigation;
},{"./PropTypes":92}],91:[function(require,module,exports){
'use strict';

var invariant = require('invariant');
var assign = require('object-assign');
var qs = require('qs');

var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
var paramInjectTrailingSlashMatcher = /\/\/\?|\/\?\/|\/\?(?![^\/=]+=.*$)/g;
var queryMatcher = /\?(.*)$/;

var _compiledPatterns = {};

function compilePattern(pattern) {
  if (!(pattern in _compiledPatterns)) {
    var paramNames = [];
    var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
      if (paramName) {
        paramNames.push(paramName);
        return '([^/?#]+)';
      } else if (match === '*') {
        paramNames.push('splat');
        return '(.*?)';
      } else {
        return '\\' + match;
      }
    });

    _compiledPatterns[pattern] = {
      matcher: new RegExp('^' + source + '$', 'i'),
      paramNames: paramNames
    };
  }

  return _compiledPatterns[pattern];
}

var PathUtils = {

  /**
   * Returns true if the given path is absolute.
   */
  isAbsolute: function isAbsolute(path) {
    return path.charAt(0) === '/';
  },

  /**
   * Joins two URL paths together.
   */
  join: function join(a, b) {
    return a.replace(/\/*$/, '/') + b;
  },

  /**
   * Returns an array of the names of all parameters in the given pattern.
   */
  extractParamNames: function extractParamNames(pattern) {
    return compilePattern(pattern).paramNames;
  },

  /**
   * Extracts the portions of the given URL path that match the given pattern
   * and returns an object of param name => value pairs. Returns null if the
   * pattern does not match the given path.
   */
  extractParams: function extractParams(pattern, path) {
    var _compilePattern = compilePattern(pattern);

    var matcher = _compilePattern.matcher;
    var paramNames = _compilePattern.paramNames;

    var match = path.match(matcher);

    if (!match) return null;

    var params = {};

    paramNames.forEach(function (paramName, index) {
      params[paramName] = match[index + 1];
    });

    return params;
  },

  /**
   * Returns a version of the given route path with params interpolated. Throws
   * if there is a dynamic segment of the route path for which there is no param.
   */
  injectParams: function injectParams(pattern, params) {
    params = params || {};

    var splatIndex = 0;

    return pattern.replace(paramInjectMatcher, function (match, paramName) {
      paramName = paramName || 'splat';

      // If param is optional don't check for existence
      if (paramName.slice(-1) === '?') {
        paramName = paramName.slice(0, -1);

        if (params[paramName] == null) return '';
      } else {
        invariant(params[paramName] != null, 'Missing "%s" parameter for path "%s"', paramName, pattern);
      }

      var segment;
      if (paramName === 'splat' && Array.isArray(params[paramName])) {
        segment = params[paramName][splatIndex++];

        invariant(segment != null, 'Missing splat # %s for path "%s"', splatIndex, pattern);
      } else {
        segment = params[paramName];
      }

      return segment;
    }).replace(paramInjectTrailingSlashMatcher, '/');
  },

  /**
   * Returns an object that is the result of parsing any query string contained
   * in the given path, null if the path contains no query string.
   */
  extractQuery: function extractQuery(path) {
    var match = path.match(queryMatcher);
    return match && qs.parse(match[1]);
  },

  /**
   * Returns a version of the given path without the query string.
   */
  withoutQuery: function withoutQuery(path) {
    return path.replace(queryMatcher, '');
  },

  /**
   * Returns a version of the given path with the parameters in the given
   * query merged into the query string.
   */
  withQuery: function withQuery(path, query) {
    var existingQuery = PathUtils.extractQuery(path);

    if (existingQuery) query = query ? assign(existingQuery, query) : existingQuery;

    var queryString = qs.stringify(query, { arrayFormat: 'brackets' });

    if (queryString) return PathUtils.withoutQuery(path) + '?' + queryString;

    return PathUtils.withoutQuery(path);
  }

};

module.exports = PathUtils;
},{"invariant":22,"object-assign":121,"qs":122}],92:[function(require,module,exports){
'use strict';

var assign = require('react/lib/Object.assign');
var ReactPropTypes = window.React.PropTypes;
var Route = require('./Route');

var PropTypes = assign({}, ReactPropTypes, {

  /**
   * Indicates that a prop should be falsy.
   */
  falsy: function falsy(props, propName, componentName) {
    if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
  },

  /**
   * Indicates that a prop should be a Route object.
   */
  route: ReactPropTypes.instanceOf(Route),

  /**
   * Indicates that a prop should be a Router object.
   */
  //router: ReactPropTypes.instanceOf(Router) // TODO
  router: ReactPropTypes.func

});

module.exports = PropTypes;
},{"./Route":94,"react/lib/Object.assign":128}],93:[function(require,module,exports){
/**
 * Encapsulates a redirect to the given route.
 */
"use strict";

function Redirect(to, params, query) {
  this.to = to;
  this.params = params;
  this.query = query;
}

module.exports = Redirect;
},{}],94:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var assign = require('react/lib/Object.assign');
var invariant = require('invariant');
var warning = require('./warning');
var PathUtils = require('./PathUtils');

var _currentRoute;

var Route = (function () {
  _createClass(Route, null, [{
    key: 'createRoute',

    /**
     * Creates and returns a new route. Options may be a URL pathname string
     * with placeholders for named params or an object with any of the following
     * properties:
     *
     * - name                     The name of the route. This is used to lookup a
     *                            route relative to its parent route and should be
     *                            unique among all child routes of the same parent
     * - path                     A URL pathname string with optional placeholders
     *                            that specify the names of params to extract from
     *                            the URL when the path matches. Defaults to `/${name}`
     *                            when there is a name given, or the path of the parent
     *                            route, or /
     * - ignoreScrollBehavior     True to make this route (and all descendants) ignore
     *                            the scroll behavior of the router
     * - isDefault                True to make this route the default route among all
     *                            its siblings
     * - isNotFound               True to make this route the "not found" route among
     *                            all its siblings
     * - onEnter                  A transition hook that will be called when the
     *                            router is going to enter this route
     * - onLeave                  A transition hook that will be called when the
     *                            router is going to leave this route
     * - handler                  A React component that will be rendered when
     *                            this route is active
     * - parentRoute              The parent route to use for this route. This option
     *                            is automatically supplied when creating routes inside
     *                            the callback to another invocation of createRoute. You
     *                            only ever need to use this when declaring routes
     *                            independently of one another to manually piece together
     *                            the route hierarchy
     *
     * The callback may be used to structure your route hierarchy. Any call to
     * createRoute, createDefaultRoute, createNotFoundRoute, or createRedirect
     * inside the callback automatically uses this route as its parent.
     */
    value: function createRoute(options, callback) {
      options = options || {};

      if (typeof options === 'string') options = { path: options };

      var parentRoute = _currentRoute;

      if (parentRoute) {
        warning(options.parentRoute == null || options.parentRoute === parentRoute, 'You should not use parentRoute with createRoute inside another route\'s child callback; it is ignored');
      } else {
        parentRoute = options.parentRoute;
      }

      var name = options.name;
      var path = options.path || name;

      if (path && !(options.isDefault || options.isNotFound)) {
        if (PathUtils.isAbsolute(path)) {
          if (parentRoute) {
            invariant(path === parentRoute.path || parentRoute.paramNames.length === 0, 'You cannot nest path "%s" inside "%s"; the parent requires URL parameters', path, parentRoute.path);
          }
        } else if (parentRoute) {
          // Relative paths extend their parent.
          path = PathUtils.join(parentRoute.path, path);
        } else {
          path = '/' + path;
        }
      } else {
        path = parentRoute ? parentRoute.path : '/';
      }

      if (options.isNotFound && !/\*$/.test(path)) path += '*'; // Auto-append * to the path of not found routes.

      var route = new Route(name, path, options.ignoreScrollBehavior, options.isDefault, options.isNotFound, options.onEnter, options.onLeave, options.handler);

      if (parentRoute) {
        if (route.isDefault) {
          invariant(parentRoute.defaultRoute == null, '%s may not have more than one default route', parentRoute);

          parentRoute.defaultRoute = route;
        } else if (route.isNotFound) {
          invariant(parentRoute.notFoundRoute == null, '%s may not have more than one not found route', parentRoute);

          parentRoute.notFoundRoute = route;
        }

        parentRoute.appendChild(route);
      }

      // Any routes created in the callback
      // use this route as their parent.
      if (typeof callback === 'function') {
        var currentRoute = _currentRoute;
        _currentRoute = route;
        callback.call(route, route);
        _currentRoute = currentRoute;
      }

      return route;
    }

    /**
     * Creates and returns a route that is rendered when its parent matches
     * the current URL.
     */
  }, {
    key: 'createDefaultRoute',
    value: function createDefaultRoute(options) {
      return Route.createRoute(assign({}, options, { isDefault: true }));
    }

    /**
     * Creates and returns a route that is rendered when its parent matches
     * the current URL but none of its siblings do.
     */
  }, {
    key: 'createNotFoundRoute',
    value: function createNotFoundRoute(options) {
      return Route.createRoute(assign({}, options, { isNotFound: true }));
    }

    /**
     * Creates and returns a route that automatically redirects the transition
     * to another route. In addition to the normal options to createRoute, this
     * function accepts the following options:
     *
     * - from         An alias for the `path` option. Defaults to *
     * - to           The path/route/route name to redirect to
     * - params       The params to use in the redirect URL. Defaults
     *                to using the current params
     * - query        The query to use in the redirect URL. Defaults
     *                to using the current query
     */
  }, {
    key: 'createRedirect',
    value: function createRedirect(options) {
      return Route.createRoute(assign({}, options, {
        path: options.path || options.from || '*',
        onEnter: function onEnter(transition, params, query) {
          transition.redirect(options.to, options.params || params, options.query || query);
        }
      }));
    }
  }]);

  function Route(name, path, ignoreScrollBehavior, isDefault, isNotFound, onEnter, onLeave, handler) {
    _classCallCheck(this, Route);

    this.name = name;
    this.path = path;
    this.paramNames = PathUtils.extractParamNames(this.path);
    this.ignoreScrollBehavior = !!ignoreScrollBehavior;
    this.isDefault = !!isDefault;
    this.isNotFound = !!isNotFound;
    this.onEnter = onEnter;
    this.onLeave = onLeave;
    this.handler = handler;
  }

  /**
   * Appends the given route to this route's child routes.
   */

  _createClass(Route, [{
    key: 'appendChild',
    value: function appendChild(route) {
      invariant(route instanceof Route, 'route.appendChild must use a valid Route');

      if (!this.childRoutes) this.childRoutes = [];

      this.childRoutes.push(route);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = '<Route';

      if (this.name) string += ' name="' + this.name + '"';

      string += ' path="' + this.path + '">';

      return string;
    }
  }]);

  return Route;
})();

module.exports = Route;
},{"./PathUtils":91,"./warning":120,"invariant":22,"react/lib/Object.assign":128}],95:[function(require,module,exports){
'use strict';

var invariant = require('invariant');
var canUseDOM = require('can-use-dom');
var getWindowScrollPosition = require('./getWindowScrollPosition');

function shouldUpdateScroll(state, prevState) {
  if (!prevState) return true;

  // Don't update scroll position when only the query has changed.
  if (state.pathname === prevState.pathname) return false;

  var routes = state.routes;
  var prevRoutes = prevState.routes;

  var sharedAncestorRoutes = routes.filter(function (route) {
    return prevRoutes.indexOf(route) !== -1;
  });

  return !sharedAncestorRoutes.some(function (route) {
    return route.ignoreScrollBehavior;
  });
}

/**
 * Provides the router with the ability to manage window scroll position
 * according to its scroll behavior.
 */
var ScrollHistory = {

  statics: {

    /**
     * Records curent scroll position as the last known position for the given URL path.
     */
    recordScrollPosition: function recordScrollPosition(path) {
      if (!this.scrollHistory) this.scrollHistory = {};

      this.scrollHistory[path] = getWindowScrollPosition();
    },

    /**
     * Returns the last known scroll position for the given URL path.
     */
    getScrollPosition: function getScrollPosition(path) {
      if (!this.scrollHistory) this.scrollHistory = {};

      return this.scrollHistory[path] || null;
    }

  },

  componentWillMount: function componentWillMount() {
    invariant(this.constructor.getScrollBehavior() == null || canUseDOM, 'Cannot use scroll behavior without a DOM');
  },

  componentDidMount: function componentDidMount() {
    this._updateScroll();
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    this._updateScroll(prevState);
  },

  _updateScroll: function _updateScroll(prevState) {
    if (!shouldUpdateScroll(this.state, prevState)) return;

    var scrollBehavior = this.constructor.getScrollBehavior();

    if (scrollBehavior) scrollBehavior.updateScrollPosition(this.constructor.getScrollPosition(this.state.path), this.state.action);
  }

};

module.exports = ScrollHistory;
},{"./getWindowScrollPosition":110,"can-use-dom":17,"invariant":22}],96:[function(require,module,exports){
'use strict';

var PropTypes = require('./PropTypes');

/**
 * A mixin for components that need to know the path, routes, URL
 * params and query that are currently active.
 *
 * Example:
 *
 *   var AboutLink = React.createClass({
 *     mixins: [ Router.State ],
 *     render() {
 *       var className = this.props.className;
 *
 *       if (this.isActive('about'))
 *         className += ' is-active';
 *
 *       return React.DOM.a({ className: className }, this.props.children);
 *     }
 *   });
 */
var State = {

  contextTypes: {
    router: PropTypes.router.isRequired
  },

  /**
   * Returns the current URL path.
   */
  getPath: function getPath() {
    return this.context.router.getCurrentPath();
  },

  /**
   * Returns the current URL path without the query string.
   */
  getPathname: function getPathname() {
    return this.context.router.getCurrentPathname();
  },

  /**
   * Returns an object of the URL params that are currently active.
   */
  getParams: function getParams() {
    return this.context.router.getCurrentParams();
  },

  /**
   * Returns an object of the query params that are currently active.
   */
  getQuery: function getQuery() {
    return this.context.router.getCurrentQuery();
  },

  /**
   * Returns an array of the routes that are currently active.
   */
  getRoutes: function getRoutes() {
    return this.context.router.getCurrentRoutes();
  },

  /**
   * A helper method to determine if a given route, params, and query
   * are active.
   */
  isActive: function isActive(to, params, query) {
    return this.context.router.isActive(to, params, query);
  }

};

module.exports = State;
},{"./PropTypes":92}],97:[function(require,module,exports){
/* jshint -W058 */

'use strict';

var Cancellation = require('./Cancellation');
var Redirect = require('./Redirect');

/**
 * Encapsulates a transition to a given path.
 *
 * The willTransitionTo and willTransitionFrom handlers receive
 * an instance of this class as their first argument.
 */
function Transition(path, retry) {
  this.path = path;
  this.abortReason = null;
  // TODO: Change this to router.retryTransition(transition)
  this.retry = retry.bind(this);
}

Transition.prototype.abort = function (reason) {
  if (this.abortReason == null) this.abortReason = reason || 'ABORT';
};

Transition.prototype.redirect = function (to, params, query) {
  this.abort(new Redirect(to, params, query));
};

Transition.prototype.cancel = function () {
  this.abort(new Cancellation());
};

Transition.from = function (transition, routes, components, callback) {
  routes.reduce(function (callback, route, index) {
    return function (error) {
      if (error || transition.abortReason) {
        callback(error);
      } else if (route.onLeave) {
        try {
          route.onLeave(transition, components[index], callback);

          // If there is no callback in the argument list, call it automatically.
          if (route.onLeave.length < 3) callback();
        } catch (e) {
          callback(e);
        }
      } else {
        callback();
      }
    };
  }, callback)();
};

Transition.to = function (transition, routes, params, query, callback) {
  routes.reduceRight(function (callback, route) {
    return function (error) {
      if (error || transition.abortReason) {
        callback(error);
      } else if (route.onEnter) {
        try {
          route.onEnter(transition, params, query, callback);

          // If there is no callback in the argument list, call it automatically.
          if (route.onEnter.length < 4) callback();
        } catch (e) {
          callback(e);
        }
      } else {
        callback();
      }
    };
  }, callback)();
};

module.exports = Transition;
},{"./Cancellation":87,"./Redirect":93}],98:[function(require,module,exports){
/**
 * Actions that modify the URL.
 */
'use strict';

var LocationActions = {

  /**
   * Indicates a new location is being pushed to the history stack.
   */
  PUSH: 'push',

  /**
   * Indicates the current location should be replaced.
   */
  REPLACE: 'replace',

  /**
   * Indicates the most recent entry should be removed from the history stack.
   */
  POP: 'pop'

};

module.exports = LocationActions;
},{}],99:[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');

/**
 * A scroll behavior that attempts to imitate the default behavior
 * of modern browsers.
 */
var ImitateBrowserBehavior = {

  updateScrollPosition: function updateScrollPosition(position, actionType) {
    switch (actionType) {
      case LocationActions.PUSH:
      case LocationActions.REPLACE:
        window.scrollTo(0, 0);
        break;
      case LocationActions.POP:
        if (position) {
          window.scrollTo(position.x, position.y);
        } else {
          window.scrollTo(0, 0);
        }
        break;
    }
  }

};

module.exports = ImitateBrowserBehavior;
},{"../actions/LocationActions":98}],100:[function(require,module,exports){
/**
 * A scroll behavior that always scrolls to the top of the page
 * after a transition.
 */
"use strict";

var ScrollToTopBehavior = {

  updateScrollPosition: function updateScrollPosition() {
    window.scrollTo(0, 0);
  }

};

module.exports = ScrollToTopBehavior;
},{}],101:[function(require,module,exports){
/**
 * This component is necessary to get around a context warning
 * present in React 0.13.0. It sovles this by providing a separation
 * between the "owner" and "parent" contexts.
 */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = window.React;

var ContextWrapper = (function (_React$Component) {
  _inherits(ContextWrapper, _React$Component);

  function ContextWrapper() {
    _classCallCheck(this, ContextWrapper);

    _get(Object.getPrototypeOf(ContextWrapper.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ContextWrapper, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ContextWrapper;
})(React.Component);

module.exports = ContextWrapper;
},{}],102:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');
var Route = require('./Route');

/**
 * A <DefaultRoute> component is a special kind of <Route> that
 * renders when its parent matches but none of its siblings do.
 * Only one such route may be used at any given level in the
 * route hierarchy.
 */

var DefaultRoute = (function (_Route) {
  _inherits(DefaultRoute, _Route);

  function DefaultRoute() {
    _classCallCheck(this, DefaultRoute);

    _get(Object.getPrototypeOf(DefaultRoute.prototype), 'constructor', this).apply(this, arguments);
  }

  // TODO: Include these in the above class definition
  // once we can use ES7 property initializers.
  // https://github.com/babel/babel/issues/619

  return DefaultRoute;
})(Route);

DefaultRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.falsy,
  children: PropTypes.falsy,
  handler: PropTypes.func.isRequired
};

DefaultRoute.defaultProps = {
  handler: RouteHandler
};

module.exports = DefaultRoute;
},{"../PropTypes":92,"./Route":106,"./RouteHandler":107}],103:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = window.React;
var assign = require('react/lib/Object.assign');
var PropTypes = require('../PropTypes');

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * <Link> components are used to create an <a> element that links to a route.
 * When that route is active, the link gets an "active" class name (or the
 * value of its `activeClassName` prop).
 *
 * For example, assuming you have the following route:
 *
 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
 *
 * You could use the following component to link to that route:
 *
 *   <Link to="showPost" params={{ postID: "123" }} />
 *
 * In addition to params, links may pass along query string parameters
 * using the `query` prop.
 *
 *   <Link to="showPost" params={{ postID: "123" }} query={{ show:true }}/>
 */

var Link = (function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    _classCallCheck(this, Link);

    _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
  }

  // TODO: Include these in the above class definition
  // once we can use ES7 property initializers.
  // https://github.com/babel/babel/issues/619

  _createClass(Link, [{
    key: 'handleClick',
    value: function handleClick(event) {
      var allowTransition = true;
      var clickResult;

      if (this.props.onClick) clickResult = this.props.onClick(event);

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

      if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

      event.preventDefault();

      if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.params, this.props.query);
    }

    /**
     * Returns the value of the "href" attribute to use on the DOM element.
     */
  }, {
    key: 'getHref',
    value: function getHref() {
      return this.context.router.makeHref(this.props.to, this.props.params, this.props.query);
    }

    /**
     * Returns the value of the "class" attribute to use on the DOM element, which contains
     * the value of the activeClassName property when this <Link> is active.
     */
  }, {
    key: 'getClassName',
    value: function getClassName() {
      var className = this.props.className;

      if (this.getActiveState()) className += ' ' + this.props.activeClassName;

      return className;
    }
  }, {
    key: 'getActiveState',
    value: function getActiveState() {
      return this.context.router.isActive(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = assign({}, this.props, {
        href: this.getHref(),
        className: this.getClassName(),
        onClick: this.handleClick.bind(this)
      });

      if (props.activeStyle && this.getActiveState()) props.style = props.activeStyle;

      return React.DOM.a(props, this.props.children);
    }
  }]);

  return Link;
})(React.Component);

Link.contextTypes = {
  router: PropTypes.router.isRequired
};

Link.propTypes = {
  activeClassName: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.route]).isRequired,
  params: PropTypes.object,
  query: PropTypes.object,
  activeStyle: PropTypes.object,
  onClick: PropTypes.func
};

Link.defaultProps = {
  activeClassName: 'active',
  className: ''
};

module.exports = Link;
},{"../PropTypes":92,"react/lib/Object.assign":128}],104:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');
var Route = require('./Route');

/**
 * A <NotFoundRoute> is a special kind of <Route> that
 * renders when the beginning of its parent's path matches
 * but none of its siblings do, including any <DefaultRoute>.
 * Only one such route may be used at any given level in the
 * route hierarchy.
 */

var NotFoundRoute = (function (_Route) {
  _inherits(NotFoundRoute, _Route);

  function NotFoundRoute() {
    _classCallCheck(this, NotFoundRoute);

    _get(Object.getPrototypeOf(NotFoundRoute.prototype), 'constructor', this).apply(this, arguments);
  }

  // TODO: Include these in the above class definition
  // once we can use ES7 property initializers.
  // https://github.com/babel/babel/issues/619

  return NotFoundRoute;
})(Route);

NotFoundRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.falsy,
  children: PropTypes.falsy,
  handler: PropTypes.func.isRequired
};

NotFoundRoute.defaultProps = {
  handler: RouteHandler
};

module.exports = NotFoundRoute;
},{"../PropTypes":92,"./Route":106,"./RouteHandler":107}],105:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypes = require('../PropTypes');
var Route = require('./Route');

/**
 * A <Redirect> component is a special kind of <Route> that always
 * redirects to another route when it matches.
 */

var Redirect = (function (_Route) {
  _inherits(Redirect, _Route);

  function Redirect() {
    _classCallCheck(this, Redirect);

    _get(Object.getPrototypeOf(Redirect.prototype), 'constructor', this).apply(this, arguments);
  }

  // TODO: Include these in the above class definition
  // once we can use ES7 property initializers.
  // https://github.com/babel/babel/issues/619

  return Redirect;
})(Route);

Redirect.propTypes = {
  path: PropTypes.string,
  from: PropTypes.string, // Alias for path.
  to: PropTypes.string,
  handler: PropTypes.falsy
};

// Redirects should not have a default handler
Redirect.defaultProps = {};

module.exports = Redirect;
},{"../PropTypes":92,"./Route":106}],106:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = window.React;
var invariant = require('invariant');
var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');

/**
 * <Route> components specify components that are rendered to the page when the
 * URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is requested,
 * the tree is searched depth-first to find a route whose path matches the URL.
 * When one is found, all routes in the tree that lead to it are considered
 * "active" and their components are rendered into the DOM, nested in the same
 * order as they are in the tree.
 *
 * The preferred way to configure a router is using JSX. The XML-like syntax is
 * a great way to visualize how routes are laid out in an application.
 *
 *   var routes = [
 *     <Route handler={App}>
 *       <Route name="login" handler={Login}/>
 *       <Route name="logout" handler={Logout}/>
 *       <Route name="about" handler={About}/>
 *     </Route>
 *   ];
 *   
 *   Router.run(routes, function (Handler) {
 *     React.render(<Handler/>, document.body);
 *   });
 *
 * Handlers for Route components that contain children can render their active
 * child route using a <RouteHandler> element.
 *
 *   var App = React.createClass({
 *     render: function () {
 *       return (
 *         <div className="application">
 *           <RouteHandler/>
 *         </div>
 *       );
 *     }
 *   });
 *
 * If no handler is provided for the route, it will render a matched child route.
 */

var Route = (function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    _classCallCheck(this, Route);

    _get(Object.getPrototypeOf(Route.prototype), 'constructor', this).apply(this, arguments);
  }

  // TODO: Include these in the above class definition
  // once we can use ES7 property initializers.
  // https://github.com/babel/babel/issues/619

  _createClass(Route, [{
    key: 'render',
    value: function render() {
      invariant(false, '%s elements are for router configuration only and should not be rendered', this.constructor.name);
    }
  }]);

  return Route;
})(React.Component);

Route.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  handler: PropTypes.func,
  ignoreScrollBehavior: PropTypes.bool
};

Route.defaultProps = {
  handler: RouteHandler
};

module.exports = Route;
},{"../PropTypes":92,"./RouteHandler":107,"invariant":22}],107:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = window.React;
var ContextWrapper = require('./ContextWrapper');
var assign = require('react/lib/Object.assign');
var PropTypes = require('../PropTypes');

var REF_NAME = '__routeHandler__';

/**
 * A <RouteHandler> component renders the active child route handler
 * when routes are nested.
 */

var RouteHandler = (function (_React$Component) {
  _inherits(RouteHandler, _React$Component);

  function RouteHandler() {
    _classCallCheck(this, RouteHandler);

    _get(Object.getPrototypeOf(RouteHandler.prototype), 'constructor', this).apply(this, arguments);
  }

  // TODO: Include these in the above class definition
  // once we can use ES7 property initializers.
  // https://github.com/babel/babel/issues/619

  _createClass(RouteHandler, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        routeDepth: this.context.routeDepth + 1
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._updateRouteComponent(this.refs[REF_NAME]);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._updateRouteComponent(this.refs[REF_NAME]);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._updateRouteComponent(null);
    }
  }, {
    key: '_updateRouteComponent',
    value: function _updateRouteComponent(component) {
      this.context.router.setRouteComponentAtDepth(this.getRouteDepth(), component);
    }
  }, {
    key: 'getRouteDepth',
    value: function getRouteDepth() {
      return this.context.routeDepth;
    }
  }, {
    key: 'createChildRouteHandler',
    value: function createChildRouteHandler(props) {
      var route = this.context.router.getRouteAtDepth(this.getRouteDepth());

      if (route == null) return null;

      var childProps = assign({}, props || this.props, {
        ref: REF_NAME,
        params: this.context.router.getCurrentParams(),
        query: this.context.router.getCurrentQuery()
      });

      return React.createElement(route.handler, childProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var handler = this.createChildRouteHandler();
      // <script/> for things like <CSSTransitionGroup/> that don't like null
      return handler ? React.createElement(
        ContextWrapper,
        null,
        handler
      ) : React.createElement('script', null);
    }
  }]);

  return RouteHandler;
})(React.Component);

RouteHandler.contextTypes = {
  routeDepth: PropTypes.number.isRequired,
  router: PropTypes.router.isRequired
};

RouteHandler.childContextTypes = {
  routeDepth: PropTypes.number.isRequired
};

module.exports = RouteHandler;
},{"../PropTypes":92,"./ContextWrapper":101,"react/lib/Object.assign":128}],108:[function(require,module,exports){
(function (process){
/* jshint -W058 */
'use strict';

var React = window.React;
var warning = require('./warning');
var invariant = require('invariant');
var canUseDOM = require('can-use-dom');
var LocationActions = require('./actions/LocationActions');
var ImitateBrowserBehavior = require('./behaviors/ImitateBrowserBehavior');
var HashLocation = require('./locations/HashLocation');
var HistoryLocation = require('./locations/HistoryLocation');
var RefreshLocation = require('./locations/RefreshLocation');
var StaticLocation = require('./locations/StaticLocation');
var ScrollHistory = require('./ScrollHistory');
var createRoutesFromReactChildren = require('./createRoutesFromReactChildren');
var isReactChildren = require('./isReactChildren');
var Transition = require('./Transition');
var PropTypes = require('./PropTypes');
var Redirect = require('./Redirect');
var History = require('./History');
var Cancellation = require('./Cancellation');
var Match = require('./Match');
var Route = require('./Route');
var supportsHistory = require('./supportsHistory');
var PathUtils = require('./PathUtils');

/**
 * The default location for new routers.
 */
var DEFAULT_LOCATION = canUseDOM ? HashLocation : '/';

/**
 * The default scroll behavior for new routers.
 */
var DEFAULT_SCROLL_BEHAVIOR = canUseDOM ? ImitateBrowserBehavior : null;

function hasProperties(object, properties) {
  for (var propertyName in properties) if (properties.hasOwnProperty(propertyName) && object[propertyName] !== properties[propertyName]) return false;

  return true;
}

function hasMatch(routes, route, prevParams, nextParams, prevQuery, nextQuery) {
  return routes.some(function (r) {
    if (r !== route) return false;

    var paramNames = route.paramNames;
    var paramName;

    // Ensure that all params the route cares about did not change.
    for (var i = 0, len = paramNames.length; i < len; ++i) {
      paramName = paramNames[i];

      if (nextParams[paramName] !== prevParams[paramName]) return false;
    }

    // Ensure the query hasn't changed.
    return hasProperties(prevQuery, nextQuery) && hasProperties(nextQuery, prevQuery);
  });
}

function addRoutesToNamedRoutes(routes, namedRoutes) {
  var route;
  for (var i = 0, len = routes.length; i < len; ++i) {
    route = routes[i];

    if (route.name) {
      invariant(namedRoutes[route.name] == null, 'You may not have more than one route named "%s"', route.name);

      namedRoutes[route.name] = route;
    }

    if (route.childRoutes) addRoutesToNamedRoutes(route.childRoutes, namedRoutes);
  }
}

function routeIsActive(activeRoutes, routeName) {
  return activeRoutes.some(function (route) {
    return route.name === routeName;
  });
}

function paramsAreActive(activeParams, params) {
  for (var property in params) if (String(activeParams[property]) !== String(params[property])) return false;

  return true;
}

function queryIsActive(activeQuery, query) {
  for (var property in query) if (String(activeQuery[property]) !== String(query[property])) return false;

  return true;
}

/**
 * Creates and returns a new router using the given options. A router
 * is a ReactComponent class that knows how to react to changes in the
 * URL and keep the contents of the page in sync.
 *
 * Options may be any of the following:
 *
 * - routes           (required) The route config
 * - location         The location to use. Defaults to HashLocation when
 *                    the DOM is available, "/" otherwise
 * - scrollBehavior   The scroll behavior to use. Defaults to ImitateBrowserBehavior
 *                    when the DOM is available, null otherwise
 * - onError          A function that is used to handle errors
 * - onAbort          A function that is used to handle aborted transitions
 *
 * When rendering in a server-side environment, the location should simply
 * be the URL path that was used in the request, including the query string.
 */
function createRouter(options) {
  options = options || {};

  if (isReactChildren(options)) options = { routes: options };

  var mountedComponents = [];
  var location = options.location || DEFAULT_LOCATION;
  var scrollBehavior = options.scrollBehavior || DEFAULT_SCROLL_BEHAVIOR;
  var state = {};
  var nextState = {};
  var pendingTransition = null;
  var dispatchHandler = null;

  if (typeof location === 'string') location = new StaticLocation(location);

  if (location instanceof StaticLocation) {
    warning(!canUseDOM || process.env.NODE_ENV === 'test', 'You should not use a static location in a DOM environment because ' + 'the router will not be kept in sync with the current URL');
  } else {
    invariant(canUseDOM || location.needsDOM === false, 'You cannot use %s without a DOM', location);
  }

  // Automatically fall back to full page refreshes in
  // browsers that don't support the HTML history API.
  if (location === HistoryLocation && !supportsHistory()) location = RefreshLocation;

  var Router = React.createClass({

    displayName: 'Router',

    statics: {

      isRunning: false,

      cancelPendingTransition: function cancelPendingTransition() {
        if (pendingTransition) {
          pendingTransition.cancel();
          pendingTransition = null;
        }
      },

      clearAllRoutes: function clearAllRoutes() {
        Router.cancelPendingTransition();
        Router.namedRoutes = {};
        Router.routes = [];
      },

      /**
       * Adds routes to this router from the given children object (see ReactChildren).
       */
      addRoutes: function addRoutes(routes) {
        if (isReactChildren(routes)) routes = createRoutesFromReactChildren(routes);

        addRoutesToNamedRoutes(routes, Router.namedRoutes);

        Router.routes.push.apply(Router.routes, routes);
      },

      /**
       * Replaces routes of this router from the given children object (see ReactChildren).
       */
      replaceRoutes: function replaceRoutes(routes) {
        Router.clearAllRoutes();
        Router.addRoutes(routes);
        Router.refresh();
      },

      /**
       * Performs a match of the given path against this router and returns an object
       * with the { routes, params, pathname, query } that match. Returns null if no
       * match can be made.
       */
      match: function match(path) {
        return Match.findMatch(Router.routes, path);
      },

      /**
       * Returns an absolute URL path created from the given route
       * name, URL parameters, and query.
       */
      makePath: function makePath(to, params, query) {
        var path;
        if (PathUtils.isAbsolute(to)) {
          path = to;
        } else {
          var route = to instanceof Route ? to : Router.namedRoutes[to];

          invariant(route instanceof Route, 'Cannot find a route named "%s"', to);

          path = route.path;
        }

        return PathUtils.withQuery(PathUtils.injectParams(path, params), query);
      },

      /**
       * Returns a string that may safely be used as the href of a link
       * to the route with the given name, URL parameters, and query.
       */
      makeHref: function makeHref(to, params, query) {
        var path = Router.makePath(to, params, query);
        return location === HashLocation ? '#' + path : path;
      },

      /**
       * Transitions to the URL specified in the arguments by pushing
       * a new URL onto the history stack.
       */
      transitionTo: function transitionTo(to, params, query) {
        var path = Router.makePath(to, params, query);

        if (pendingTransition) {
          // Replace so pending location does not stay in history.
          location.replace(path);
        } else {
          location.push(path);
        }
      },

      /**
       * Transitions to the URL specified in the arguments by replacing
       * the current URL in the history stack.
       */
      replaceWith: function replaceWith(to, params, query) {
        location.replace(Router.makePath(to, params, query));
      },

      /**
       * Transitions to the previous URL if one is available. Returns true if the
       * router was able to go back, false otherwise.
       *
       * Note: The router only tracks history entries in your application, not the
       * current browser session, so you can safely call this function without guarding
       * against sending the user back to some other site. However, when using
       * RefreshLocation (which is the fallback for HistoryLocation in browsers that
       * don't support HTML5 history) this method will *always* send the client back
       * because we cannot reliably track history length.
       */
      goBack: function goBack() {
        if (History.length > 1 || location === RefreshLocation) {
          location.pop();
          return true;
        }

        warning(false, 'goBack() was ignored because there is no router history');

        return false;
      },

      handleAbort: options.onAbort || function (abortReason) {
        if (location instanceof StaticLocation) throw new Error('Unhandled aborted transition! Reason: ' + abortReason);

        if (abortReason instanceof Cancellation) {
          return;
        } else if (abortReason instanceof Redirect) {
          location.replace(Router.makePath(abortReason.to, abortReason.params, abortReason.query));
        } else {
          location.pop();
        }
      },

      handleError: options.onError || function (error) {
        // Throw so we don't silently swallow async errors.
        throw error; // This error probably originated in a transition hook.
      },

      handleLocationChange: function handleLocationChange(change) {
        Router.dispatch(change.path, change.type);
      },

      /**
       * Performs a transition to the given path and calls callback(error, abortReason)
       * when the transition is finished. If both arguments are null the router's state
       * was updated. Otherwise the transition did not complete.
       *
       * In a transition, a router first determines which routes are involved by beginning
       * with the current route, up the route tree to the first parent route that is shared
       * with the destination route, and back down the tree to the destination route. The
       * willTransitionFrom hook is invoked on all route handlers we're transitioning away
       * from, in reverse nesting order. Likewise, the willTransitionTo hook is invoked on
       * all route handlers we're transitioning to.
       *
       * Both willTransitionFrom and willTransitionTo hooks may either abort or redirect the
       * transition. To resolve asynchronously, they may use the callback argument. If no
       * hooks wait, the transition is fully synchronous.
       */
      dispatch: function dispatch(path, action) {
        Router.cancelPendingTransition();

        var prevPath = state.path;
        var isRefreshing = action == null;

        if (prevPath === path && !isRefreshing) return; // Nothing to do!

        // Record the scroll position as early as possible to
        // get it before browsers try update it automatically.
        if (prevPath && action === LocationActions.PUSH) Router.recordScrollPosition(prevPath);

        var match = Router.match(path);

        warning(match != null, 'No route matches path "%s". Make sure you have <Route path="%s"> somewhere in your routes', path, path);

        if (match == null) match = {};

        var prevRoutes = state.routes || [];
        var prevParams = state.params || {};
        var prevQuery = state.query || {};

        var nextRoutes = match.routes || [];
        var nextParams = match.params || {};
        var nextQuery = match.query || {};

        var fromRoutes, toRoutes;
        if (prevRoutes.length) {
          fromRoutes = prevRoutes.filter(function (route) {
            return !hasMatch(nextRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
          });

          toRoutes = nextRoutes.filter(function (route) {
            return !hasMatch(prevRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
          });
        } else {
          fromRoutes = [];
          toRoutes = nextRoutes;
        }

        var transition = new Transition(path, Router.replaceWith.bind(Router, path));
        pendingTransition = transition;

        var fromComponents = mountedComponents.slice(prevRoutes.length - fromRoutes.length);

        Transition.from(transition, fromRoutes, fromComponents, function (error) {
          if (error || transition.abortReason) return dispatchHandler.call(Router, error, transition); // No need to continue.

          Transition.to(transition, toRoutes, nextParams, nextQuery, function (error) {
            dispatchHandler.call(Router, error, transition, {
              path: path,
              action: action,
              pathname: match.pathname,
              routes: nextRoutes,
              params: nextParams,
              query: nextQuery
            });
          });
        });
      },

      /**
       * Starts this router and calls callback(router, state) when the route changes.
       *
       * If the router's location is static (i.e. a URL path in a server environment)
       * the callback is called only once. Otherwise, the location should be one of the
       * Router.*Location objects (e.g. Router.HashLocation or Router.HistoryLocation).
       */
      run: function run(callback) {
        invariant(!Router.isRunning, 'Router is already running');

        dispatchHandler = function (error, transition, newState) {
          if (error) Router.handleError(error);

          if (pendingTransition !== transition) return;

          pendingTransition = null;

          if (transition.abortReason) {
            Router.handleAbort(transition.abortReason);
          } else {
            callback.call(Router, Router, nextState = newState);
          }
        };

        if (!(location instanceof StaticLocation)) {
          if (location.addChangeListener) location.addChangeListener(Router.handleLocationChange);

          Router.isRunning = true;
        }

        // Bootstrap using the current path.
        Router.refresh();
      },

      refresh: function refresh() {
        Router.dispatch(location.getCurrentPath(), null);
      },

      stop: function stop() {
        Router.cancelPendingTransition();

        if (location.removeChangeListener) location.removeChangeListener(Router.handleLocationChange);

        Router.isRunning = false;
      },

      getLocation: function getLocation() {
        return location;
      },

      getScrollBehavior: function getScrollBehavior() {
        return scrollBehavior;
      },

      getRouteAtDepth: function getRouteAtDepth(routeDepth) {
        var routes = state.routes;
        return routes && routes[routeDepth];
      },

      setRouteComponentAtDepth: function setRouteComponentAtDepth(routeDepth, component) {
        mountedComponents[routeDepth] = component;
      },

      /**
       * Returns the current URL path + query string.
       */
      getCurrentPath: function getCurrentPath() {
        return state.path;
      },

      /**
       * Returns the current URL path without the query string.
       */
      getCurrentPathname: function getCurrentPathname() {
        return state.pathname;
      },

      /**
       * Returns an object of the currently active URL parameters.
       */
      getCurrentParams: function getCurrentParams() {
        return state.params;
      },

      /**
       * Returns an object of the currently active query parameters.
       */
      getCurrentQuery: function getCurrentQuery() {
        return state.query;
      },

      /**
       * Returns an array of the currently active routes.
       */
      getCurrentRoutes: function getCurrentRoutes() {
        return state.routes;
      },

      /**
       * Returns true if the given route, params, and query are active.
       */
      isActive: function isActive(to, params, query) {
        if (PathUtils.isAbsolute(to)) return to === state.path;

        return routeIsActive(state.routes, to) && paramsAreActive(state.params, params) && (query == null || queryIsActive(state.query, query));
      }

    },

    mixins: [ScrollHistory],

    propTypes: {
      children: PropTypes.falsy
    },

    childContextTypes: {
      routeDepth: PropTypes.number.isRequired,
      router: PropTypes.router.isRequired
    },

    getChildContext: function getChildContext() {
      return {
        routeDepth: 1,
        router: Router
      };
    },

    getInitialState: function getInitialState() {
      return state = nextState;
    },

    componentWillReceiveProps: function componentWillReceiveProps() {
      this.setState(state = nextState);
    },

    componentWillUnmount: function componentWillUnmount() {
      Router.stop();
    },

    render: function render() {
      var route = Router.getRouteAtDepth(0);
      return route ? React.createElement(route.handler, this.props) : null;
    }

  });

  Router.clearAllRoutes();

  if (options.routes) Router.addRoutes(options.routes);

  return Router;
}

module.exports = createRouter;
}).call(this,require('_process'))
},{"./Cancellation":87,"./History":88,"./Match":89,"./PathUtils":91,"./PropTypes":92,"./Redirect":93,"./Route":94,"./ScrollHistory":95,"./Transition":97,"./actions/LocationActions":98,"./behaviors/ImitateBrowserBehavior":99,"./createRoutesFromReactChildren":109,"./isReactChildren":112,"./locations/HashLocation":113,"./locations/HistoryLocation":114,"./locations/RefreshLocation":115,"./locations/StaticLocation":116,"./supportsHistory":119,"./warning":120,"_process":25,"can-use-dom":17,"invariant":22}],109:[function(require,module,exports){
/* jshint -W084 */
'use strict';

var React = window.React;
var assign = require('react/lib/Object.assign');
var warning = require('./warning');
var DefaultRoute = require('./components/DefaultRoute');
var NotFoundRoute = require('./components/NotFoundRoute');
var Redirect = require('./components/Redirect');
var Route = require('./Route');

function checkPropTypes(componentName, propTypes, props) {
  componentName = componentName || 'UnknownComponent';

  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error = propTypes[propName](props, propName, componentName);

      if (error instanceof Error) warning(false, error.message);
    }
  }
}

function createRouteOptions(props) {
  var options = assign({}, props);
  var handler = options.handler;

  if (handler) {
    options.onEnter = handler.willTransitionTo;
    options.onLeave = handler.willTransitionFrom;
  }

  return options;
}

function createRouteFromReactElement(element) {
  if (!React.isValidElement(element)) return;

  var type = element.type;
  var props = assign({}, type.defaultProps, element.props);

  if (type.propTypes) checkPropTypes(type.displayName, type.propTypes, props);

  if (type === DefaultRoute) return Route.createDefaultRoute(createRouteOptions(props));

  if (type === NotFoundRoute) return Route.createNotFoundRoute(createRouteOptions(props));

  if (type === Redirect) return Route.createRedirect(createRouteOptions(props));

  return Route.createRoute(createRouteOptions(props), function () {
    if (props.children) createRoutesFromReactChildren(props.children);
  });
}

/**
 * Creates and returns an array of routes created from the given
 * ReactChildren, all of which should be one of <Route>, <DefaultRoute>,
 * <NotFoundRoute>, or <Redirect>, e.g.:
 *
 *   var { createRoutesFromReactChildren, Route, Redirect } = require('react-router');
 *
 *   var routes = createRoutesFromReactChildren(
 *     <Route path="/" handler={App}>
 *       <Route name="user" path="/user/:userId" handler={User}>
 *         <Route name="task" path="tasks/:taskId" handler={Task}/>
 *         <Redirect from="todos/:taskId" to="task"/>
 *       </Route>
 *     </Route>
 *   );
 */
function createRoutesFromReactChildren(children) {
  var routes = [];

  React.Children.forEach(children, function (child) {
    if (child = createRouteFromReactElement(child)) routes.push(child);
  });

  return routes;
}

module.exports = createRoutesFromReactChildren;
},{"./Route":94,"./components/DefaultRoute":102,"./components/NotFoundRoute":104,"./components/Redirect":105,"./warning":120,"react/lib/Object.assign":128}],110:[function(require,module,exports){
'use strict';

var invariant = require('invariant');
var canUseDOM = require('can-use-dom');

/**
 * Returns the current scroll position of the window as { x, y }.
 */
function getWindowScrollPosition() {
  invariant(canUseDOM, 'Cannot get current scroll position without a DOM');

  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
}

module.exports = getWindowScrollPosition;
},{"can-use-dom":17,"invariant":22}],111:[function(require,module,exports){
'use strict';

exports.DefaultRoute = require('./components/DefaultRoute');
exports.Link = require('./components/Link');
exports.NotFoundRoute = require('./components/NotFoundRoute');
exports.Redirect = require('./components/Redirect');
exports.Route = require('./components/Route');
exports.ActiveHandler = require('./components/RouteHandler');
exports.RouteHandler = exports.ActiveHandler;

exports.HashLocation = require('./locations/HashLocation');
exports.HistoryLocation = require('./locations/HistoryLocation');
exports.RefreshLocation = require('./locations/RefreshLocation');
exports.StaticLocation = require('./locations/StaticLocation');
exports.TestLocation = require('./locations/TestLocation');

exports.ImitateBrowserBehavior = require('./behaviors/ImitateBrowserBehavior');
exports.ScrollToTopBehavior = require('./behaviors/ScrollToTopBehavior');

exports.History = require('./History');
exports.Navigation = require('./Navigation');
exports.State = require('./State');

exports.createRoute = require('./Route').createRoute;
exports.createDefaultRoute = require('./Route').createDefaultRoute;
exports.createNotFoundRoute = require('./Route').createNotFoundRoute;
exports.createRedirect = require('./Route').createRedirect;
exports.createRoutesFromReactChildren = require('./createRoutesFromReactChildren');

exports.create = require('./createRouter');
exports.run = require('./runRouter');
},{"./History":88,"./Navigation":90,"./Route":94,"./State":96,"./behaviors/ImitateBrowserBehavior":99,"./behaviors/ScrollToTopBehavior":100,"./components/DefaultRoute":102,"./components/Link":103,"./components/NotFoundRoute":104,"./components/Redirect":105,"./components/Route":106,"./components/RouteHandler":107,"./createRouter":108,"./createRoutesFromReactChildren":109,"./locations/HashLocation":113,"./locations/HistoryLocation":114,"./locations/RefreshLocation":115,"./locations/StaticLocation":116,"./locations/TestLocation":117,"./runRouter":118}],112:[function(require,module,exports){
'use strict';

var React = window.React;

function isValidChild(object) {
  return object == null || React.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

module.exports = isReactChildren;
},{}],113:[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');
var History = require('../History');

var _listeners = [];
var _isListening = false;
var _actionType;

function notifyChange(type) {
  if (type === LocationActions.PUSH) History.length += 1;

  var change = {
    path: HashLocation.getCurrentPath(),
    type: type
  };

  _listeners.forEach(function (listener) {
    listener.call(HashLocation, change);
  });
}

function ensureSlash() {
  var path = HashLocation.getCurrentPath();

  if (path.charAt(0) === '/') return true;

  HashLocation.replace('/' + path);

  return false;
}

function onHashChange() {
  if (ensureSlash()) {
    // If we don't have an _actionType then all we know is the hash
    // changed. It was probably caused by the user clicking the Back
    // button, but may have also been the Forward button or manual
    // manipulation. So just guess 'pop'.
    var curActionType = _actionType;
    _actionType = null;
    notifyChange(curActionType || LocationActions.POP);
  }
}

/**
 * A Location that uses `window.location.hash`.
 */
var HashLocation = {

  addChangeListener: function addChangeListener(listener) {
    _listeners.push(listener);

    // Do this BEFORE listening for hashchange.
    ensureSlash();

    if (!_isListening) {
      if (window.addEventListener) {
        window.addEventListener('hashchange', onHashChange, false);
      } else {
        window.attachEvent('onhashchange', onHashChange);
      }

      _isListening = true;
    }
  },

  removeChangeListener: function removeChangeListener(listener) {
    _listeners = _listeners.filter(function (l) {
      return l !== listener;
    });

    if (_listeners.length === 0) {
      if (window.removeEventListener) {
        window.removeEventListener('hashchange', onHashChange, false);
      } else {
        window.removeEvent('onhashchange', onHashChange);
      }

      _isListening = false;
    }
  },

  push: function push(path) {
    _actionType = LocationActions.PUSH;
    window.location.hash = path;
  },

  replace: function replace(path) {
    _actionType = LocationActions.REPLACE;
    window.location.replace(window.location.pathname + window.location.search + '#' + path);
  },

  pop: function pop() {
    _actionType = LocationActions.POP;
    History.back();
  },

  getCurrentPath: function getCurrentPath() {
    return decodeURI(
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    window.location.href.split('#')[1] || '');
  },

  toString: function toString() {
    return '<HashLocation>';
  }

};

module.exports = HashLocation;
},{"../History":88,"../actions/LocationActions":98}],114:[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');
var History = require('../History');

var _listeners = [];
var _isListening = false;

function notifyChange(type) {
  var change = {
    path: HistoryLocation.getCurrentPath(),
    type: type
  };

  _listeners.forEach(function (listener) {
    listener.call(HistoryLocation, change);
  });
}

function onPopState(event) {
  if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

  notifyChange(LocationActions.POP);
}

/**
 * A Location that uses HTML5 history.
 */
var HistoryLocation = {

  addChangeListener: function addChangeListener(listener) {
    _listeners.push(listener);

    if (!_isListening) {
      if (window.addEventListener) {
        window.addEventListener('popstate', onPopState, false);
      } else {
        window.attachEvent('onpopstate', onPopState);
      }

      _isListening = true;
    }
  },

  removeChangeListener: function removeChangeListener(listener) {
    _listeners = _listeners.filter(function (l) {
      return l !== listener;
    });

    if (_listeners.length === 0) {
      if (window.addEventListener) {
        window.removeEventListener('popstate', onPopState, false);
      } else {
        window.removeEvent('onpopstate', onPopState);
      }

      _isListening = false;
    }
  },

  push: function push(path) {
    window.history.pushState({ path: path }, '', path);
    History.length += 1;
    notifyChange(LocationActions.PUSH);
  },

  replace: function replace(path) {
    window.history.replaceState({ path: path }, '', path);
    notifyChange(LocationActions.REPLACE);
  },

  pop: History.back,

  getCurrentPath: function getCurrentPath() {
    return decodeURI(window.location.pathname + window.location.search);
  },

  toString: function toString() {
    return '<HistoryLocation>';
  }

};

module.exports = HistoryLocation;
},{"../History":88,"../actions/LocationActions":98}],115:[function(require,module,exports){
'use strict';

var HistoryLocation = require('./HistoryLocation');
var History = require('../History');

/**
 * A Location that uses full page refreshes. This is used as
 * the fallback for HistoryLocation in browsers that do not
 * support the HTML5 history API.
 */
var RefreshLocation = {

  push: function push(path) {
    window.location = path;
  },

  replace: function replace(path) {
    window.location.replace(path);
  },

  pop: History.back,

  getCurrentPath: HistoryLocation.getCurrentPath,

  toString: function toString() {
    return '<RefreshLocation>';
  }

};

module.exports = RefreshLocation;
},{"../History":88,"./HistoryLocation":114}],116:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = require('invariant');

function throwCannotModify() {
  invariant(false, 'You cannot modify a static location');
}

/**
 * A location that only ever contains a single path. Useful in
 * stateless environments like servers where there is no path history,
 * only the path that was used in the request.
 */

var StaticLocation = (function () {
  function StaticLocation(path) {
    _classCallCheck(this, StaticLocation);

    this.path = path;
  }

  // TODO: Include these in the above class definition
  // once we can use ES7 property initializers.
  // https://github.com/babel/babel/issues/619

  _createClass(StaticLocation, [{
    key: 'getCurrentPath',
    value: function getCurrentPath() {
      return this.path;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '<StaticLocation path="' + this.path + '">';
    }
  }]);

  return StaticLocation;
})();

StaticLocation.prototype.push = throwCannotModify;
StaticLocation.prototype.replace = throwCannotModify;
StaticLocation.prototype.pop = throwCannotModify;

module.exports = StaticLocation;
},{"invariant":22}],117:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = require('invariant');
var LocationActions = require('../actions/LocationActions');
var History = require('../History');

/**
 * A location that is convenient for testing and does not require a DOM.
 */

var TestLocation = (function () {
  function TestLocation(history) {
    _classCallCheck(this, TestLocation);

    this.history = history || [];
    this.listeners = [];
    this.needsDOM = false;
    this._updateHistoryLength();
  }

  _createClass(TestLocation, [{
    key: '_updateHistoryLength',
    value: function _updateHistoryLength() {
      History.length = this.history.length;
    }
  }, {
    key: '_notifyChange',
    value: function _notifyChange(type) {
      var change = {
        path: this.getCurrentPath(),
        type: type
      };

      for (var i = 0, len = this.listeners.length; i < len; ++i) this.listeners[i].call(this, change);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(listener) {
      this.listeners.push(listener);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(listener) {
      this.listeners = this.listeners.filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: 'push',
    value: function push(path) {
      this.history.push(path);
      this._updateHistoryLength();
      this._notifyChange(LocationActions.PUSH);
    }
  }, {
    key: 'replace',
    value: function replace(path) {
      invariant(this.history.length, 'You cannot replace the current path with no history');

      this.history[this.history.length - 1] = path;

      this._notifyChange(LocationActions.REPLACE);
    }
  }, {
    key: 'pop',
    value: function pop() {
      this.history.pop();
      this._updateHistoryLength();
      this._notifyChange(LocationActions.POP);
    }
  }, {
    key: 'getCurrentPath',
    value: function getCurrentPath() {
      return this.history[this.history.length - 1];
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '<TestLocation>';
    }
  }]);

  return TestLocation;
})();

module.exports = TestLocation;
},{"../History":88,"../actions/LocationActions":98,"invariant":22}],118:[function(require,module,exports){
'use strict';

var createRouter = require('./createRouter');

/**
 * A high-level convenience method that creates, configures, and
 * runs a router in one shot. The method signature is:
 *
 *   Router.run(routes[, location ], callback);
 *
 * Using `window.location.hash` to manage the URL, you could do:
 *
 *   Router.run(routes, function (Handler) {
 *     React.render(<Handler/>, document.body);
 *   });
 * 
 * Using HTML5 history and a custom "cursor" prop:
 * 
 *   Router.run(routes, Router.HistoryLocation, function (Handler) {
 *     React.render(<Handler cursor={cursor}/>, document.body);
 *   });
 *
 * Returns the newly created router.
 *
 * Note: If you need to specify further options for your router such
 * as error/abort handling or custom scroll behavior, use Router.create
 * instead.
 *
 *   var router = Router.create(options);
 *   router.run(function (Handler) {
 *     // ...
 *   });
 */
function runRouter(routes, location, callback) {
  if (typeof location === 'function') {
    callback = location;
    location = null;
  }

  var router = createRouter({
    routes: routes,
    location: location
  });

  router.run(callback);

  return router;
}

module.exports = runRouter;
},{"./createRouter":108}],119:[function(require,module,exports){
'use strict';

function supportsHistory() {
  /*! taken from modernizr
   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
   * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
   */
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

module.exports = supportsHistory;
},{}],120:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of https://github.com/facebook/react/tree/0.13-stable.
 * An additional grant of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */

"use strict";

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function warning() {};

if (__DEV__) {
  warning = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      console.warn(message);
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;
}).call(this,require('_process'))
},{"_process":25}],121:[function(require,module,exports){
'use strict';

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = Object.keys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

},{}],122:[function(require,module,exports){
module.exports = require('./lib/');

},{"./lib/":123}],123:[function(require,module,exports){
// Load modules

var Stringify = require('./stringify');
var Parse = require('./parse');


// Declare internals

var internals = {};


module.exports = {
    stringify: Stringify,
    parse: Parse
};

},{"./parse":124,"./stringify":125}],124:[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    depth: 5,
    arrayLimit: 20,
    parameterLimit: 1000
};


internals.parseValues = function (str, options) {

    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0, il = parts.length; i < il; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        if (pos === -1) {
            obj[Utils.decode(part)] = '';
        }
        else {
            var key = Utils.decode(part.slice(0, pos));
            var val = Utils.decode(part.slice(pos + 1));

            if (Object.prototype.hasOwnProperty(key)) {
                continue;
            }

            if (!obj.hasOwnProperty(key)) {
                obj[key] = val;
            }
            else {
                obj[key] = [].concat(obj[key]).concat(val);
            }
        }
    }

    return obj;
};


internals.parseObject = function (chain, val, options) {

    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj = {};
    if (root === '[]') {
        obj = [];
        obj = obj.concat(internals.parseObject(chain, val, options));
    }
    else {
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
        var index = parseInt(cleanRoot, 10);
        var indexString = '' + index;
        if (!isNaN(index) &&
            root !== cleanRoot &&
            indexString === cleanRoot &&
            index >= 0 &&
            index <= options.arrayLimit) {

            obj = [];
            obj[index] = internals.parseObject(chain, val, options);
        }
        else {
            obj[cleanRoot] = internals.parseObject(chain, val, options);
        }
    }

    return obj;
};


internals.parseKeys = function (key, val, options) {

    if (!key) {
        return;
    }

    // The regex chunks

    var parent = /^([^\[\]]*)/;
    var child = /(\[[^\[\]]*\])/g;

    // Get the parent

    var segment = parent.exec(key);

    // Don't allow them to overwrite object prototype properties

    if (Object.prototype.hasOwnProperty(segment[1])) {
        return;
    }

    // Stash the parent if it exists

    var keys = [];
    if (segment[1]) {
        keys.push(segment[1]);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {

        ++i;
        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
            keys.push(segment[1]);
        }
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return internals.parseObject(keys, val, options);
};


module.exports = function (str, options) {

    if (str === '' ||
        str === null ||
        typeof str === 'undefined') {

        return {};
    }

    options = options || {};
    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
    var obj = {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        var newObj = internals.parseKeys(key, tempObj[key], options);
        obj = Utils.merge(obj, newObj);
    }

    return Utils.compact(obj);
};

},{"./utils":126}],125:[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    arrayPrefixGenerators: {
        brackets: function (prefix, key) {
            return prefix + '[]';
        },
        indices: function (prefix, key) {
            return prefix + '[' + key + ']';
        },
        repeat: function (prefix, key) {
            return prefix;
        }
    }
};


internals.stringify = function (obj, prefix, generateArrayPrefix) {

    if (Utils.isBuffer(obj)) {
        obj = obj.toString();
    }
    else if (obj instanceof Date) {
        obj = obj.toISOString();
    }
    else if (obj === null) {
        obj = '';
    }

    if (typeof obj === 'string' ||
        typeof obj === 'number' ||
        typeof obj === 'boolean') {

        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        if (Array.isArray(obj)) {
            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
        }
        else {
            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
        }
    }

    return values;
};


module.exports = function (obj, options) {

    options = options || {};
    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

    var keys = [];

    if (typeof obj !== 'object' ||
        obj === null) {

        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in internals.arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    }
    else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    }
    else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
    }

    return keys.join(delimiter);
};

},{"./utils":126}],126:[function(require,module,exports){
// Load modules


// Declare internals

var internals = {};


exports.arrayToObject = function (source) {

    var obj = {};
    for (var i = 0, il = source.length; i < il; ++i) {
        if (typeof source[i] !== 'undefined') {

            obj[i] = source[i];
        }
    }

    return obj;
};


exports.merge = function (target, source) {

    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        }
        else {
            target[source] = true;
        }

        return target;
    }

    if (typeof target !== 'object') {
        target = [target].concat(source);
        return target;
    }

    if (Array.isArray(target) &&
        !Array.isArray(source)) {

        target = exports.arrayToObject(target);
    }

    var keys = Object.keys(source);
    for (var k = 0, kl = keys.length; k < kl; ++k) {
        var key = keys[k];
        var value = source[key];

        if (!target[key]) {
            target[key] = value;
        }
        else {
            target[key] = exports.merge(target[key], value);
        }
    }

    return target;
};


exports.decode = function (str) {

    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};


exports.compact = function (obj, refs) {

    if (typeof obj !== 'object' ||
        obj === null) {

        return obj;
    }

    refs = refs || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0, il = obj.length; i < il; ++i) {
            if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    for (i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        obj[key] = exports.compact(obj[key], refs);
    }

    return obj;
};


exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};


exports.isBuffer = function (obj) {

    if (obj === null ||
        typeof obj === 'undefined') {

        return false;
    }

    return !!(obj.constructor &&
        obj.constructor.isBuffer &&
        obj.constructor.isBuffer(obj));
};

},{}],127:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */

"use strict";

var canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

},{}],128:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

'use strict';

function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  return to;
}

module.exports = assign;

},{}],129:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTransitionEvents
 */

'use strict';

var ExecutionEnvironment = require("./ExecutionEnvironment");

/**
 * EVENT_NAME_MAP is used to determine which event fired when a
 * transition/animation ends, based on the style property used to
 * define that event.
 */
var EVENT_NAME_MAP = {
  transitionend: {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'mozTransitionEnd',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd'
  },

  animationend: {
    'animation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd',
    'MozAnimation': 'mozAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'msAnimation': 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are useable, and if not remove them
  // from the map
  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    var baseEvents = EVENT_NAME_MAP[baseEventName];
    for (var styleName in baseEvents) {
      if (styleName in style) {
        endEvents.push(baseEvents[styleName]);
        break;
      }
    }
  }
}

if (ExecutionEnvironment.canUseDOM) {
  detectEvents();
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var ReactTransitionEvents = {
  addEndEventListener: function(node, eventListener) {
    if (endEvents.length === 0) {
      // If CSS transitions are not supported, trigger an "end animation"
      // event immediately.
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function(endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },

  removeEndEventListener: function(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function(endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

module.exports = ReactTransitionEvents;

},{"./ExecutionEnvironment":127}],"myApp":[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = window.React;

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Root) {
  _react2['default'].render(_react2['default'].createElement(Root, null), document.getElementById('app'));
});
},{"./routes":14,"react-router":111}]},{},[]);
