'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var apiURL = 'http://127.0.0.1:8000/api/metra/';

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