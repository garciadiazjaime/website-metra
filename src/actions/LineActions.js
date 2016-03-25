import AppDispatcher from '../dispatcher/AppDispatcher';
import LineConstants from '../constants/LineConstants';


export default {

  // ---- LINES
  requestLines(line) {
    AppDispatcher.dispatch({
      actionType: LineConstants.REQUEST_LINES,
      line: line,
    });
  },

  // ---- STATIONS
  requestSations(line) {
    AppDispatcher.dispatch({
      actionType: LineConstants.REQUEST_STATIONS,
      line: line,
    });
  },

  // ---- SCHEDULE
  requestSchedule(line, stationFrom, stationTo, day) {
    AppDispatcher.dispatch({
      actionType: LineConstants.REQUEST_SCHEDULE,
      line: line,
      station_from: stationFrom,
      station_to: stationTo,
      day: day,
    });
  },

};
