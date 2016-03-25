'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

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