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