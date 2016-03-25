const apiURL = 'https://api-metra.rhcloud.com/api/metra/';

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
