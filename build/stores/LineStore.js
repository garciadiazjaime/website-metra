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