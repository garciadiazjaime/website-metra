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