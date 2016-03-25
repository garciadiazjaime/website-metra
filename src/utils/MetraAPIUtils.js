const apiURL = 'http://127.0.0.1:8000/api/metra/';

export default {
  getAllLines() {
    return axios.get(apiURL + 'lines/');
  },

  getStationsFromLine(line) {
    return axios.get(apiURL + 'stations/?line=' + line);
  },

  getSchedule(line, stationFrom, stationTo, day) {
    return axios.get(apiURL + 'rides/?line=' + line + '&station_from=' + stationFrom + '&station_to=' + stationTo + '&day=' + day);
  },

};
