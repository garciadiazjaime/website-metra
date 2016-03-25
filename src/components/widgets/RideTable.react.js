import React from 'react';
import {Row, Col} from 'react-bootstrap';


export default class RideTable extends React.Component {

  getRideRender(data) {
    return data.map(function(item, index) {
      return (
        <Row key={index}>
          <Col xs={4}>{item.time_start.toLowerCase()}</Col>
          <Col xs={4}>{item.time_end.toLowerCase()}</Col>
          <Col xs={2}><span className="smallerText">{item.train_num}</span></Col>
          <Col xs={2}><span className="smallerText">{item.allow_bikes ? 'Y' : null}</span></Col>
        </Row>
        );
    });
  }

  render() {
    const rideRender = this.props.data.length ? this.getRideRender(this.props.data) : null;

    return (
      <div id={this.props.id}>
        <Row>
          <Col xs={4}>Departure</Col>
          <Col xs={4}>Arrival</Col>
          <Col xs={2}>Train</Col>
          <Col xs={2}>Bike</Col>
        </Row>
        {rideRender}
      </div>
    );
  }
}

RideTable.propTypes = {
  id: React.PropTypes.string,
  data: React.PropTypes.array,
};

