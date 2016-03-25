import React from 'react';


export default class SelectStation extends React.Component {

  render() {
    const optionsRender = this.props.data.map(function(item, index) {
      return (
        <option value={item.id} key={index}>{item.name}</option>
      );
    });

    return (
      <select onChange={this.props.handleChange} value={this.props.selectedStation}>
        {optionsRender}
      </select>
    );
  }
}

SelectStation.propTypes = {
  data: React.PropTypes.array,
  handleChange: React.PropTypes.func,
  selectedStation: React.PropTypes.string,
};
