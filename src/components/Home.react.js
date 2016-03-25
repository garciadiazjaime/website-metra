import React from 'react';
import {Button} from 'react-bootstrap';

import SelectStation from './widgets/SelectStation.react';
import SelectLine from './widgets/SelectLine.react';
import SelectDay from './widgets/SelectDay.react';
import LineActions from '../actions/LineActions';
import LineStore from '../stores/LineStore';


function getLineState() {
  return {
    lines: LineStore.getLines(),
    stations: LineStore.getStations(),
    selectedLine: LineStore.getSelectedLine(),
    stationFrom: LineStore.getSelectedStations().stationFrom,
    stationTo: LineStore.getSelectedStations().stationTo,
    day: LineStore.getSelectedStations().day,
  };
}

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state = getLineState();
  }

  componentDidMount() {
    LineStore.addChangeListener(this._onChange);
    LineActions.requestLines();
  }

  componentWillUnmount() {
    LineStore.removeChangeListener(this._onChange);
  }

  handleClick(event) {
    event.preventDefault();
    const selectedRide = this._getRideCodes(this.state.lines, this.state.stations, this.state.selectedLine, this.state.stationFrom, this.state.stationTo, this.state.day);
    this.context.router.transitionTo('schedule', selectedRide);
  }

  _onLineChange(event) {
    LineActions.requestSations(event.target.value);
  }

  _onStationChange(ref, event) {
    LineStore.setStation(ref, parseInt(event.target.value, 10));
    this._onChange();
  }

  _onDayChange(event) {
    LineStore.setDay(parseInt(event.target.value, 10));
    this._onChange();
  }

  _getRideCodes(lines, stations, selectedLine, userStationFrom, userStationTo, day) {
    const dayName = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const line = lines.filter(function(data) {
      return data.id === selectedLine;
    });

    let stationFrom;
    let stationTo;
    let index = 0;
    const len = stations.length;
    for (; index < len; index ++) {
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
      day: dayName[day].toLowerCase(),
    };
  }

  _onChange() {
    this.setState(getLineState());
  }

  render() {
    return (
      <div>
        <p>Welcome to Easy Metra Chicago, where you can consult departure and arrival hours of Metra&#39;s rail service. </p>
        <label>Train line</label>
        <div className="selectWrap">
          <SelectLine data={this.state.lines} name="line" handleChange={this._onLineChange} selectedLine={this.state.selectedLine}/>
        </div>
        <label>Departing station</label>
        <div className="selectWrap">
          <SelectStation data={this.state.stations} handleChange={this._onStationChange.bind(this, 'stationFrom')} selectedStation={this.state.stationFrom} />
        </div>
        <label>Destination station</label>
        <div className="selectWrap">
          <SelectStation data={this.state.stations} handleChange={this._onStationChange.bind(this, 'stationTo')} selectedStation={this.state.stationTo} />
        </div>
        <label>Day</label>
        <div className="selectWrap">
          <SelectDay handleChange={this._onDayChange.bind(this)} selectedDay={this.state.day}/>
        </div>
        <Button onClick={this.handleClick}><span className="rightButtonDecoration">View Schedule</span></Button>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.func.isRequired,
};
