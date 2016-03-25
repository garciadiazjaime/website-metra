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