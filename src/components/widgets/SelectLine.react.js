import React from 'react';


export default class SelectLine extends React.Component {

  render() {
    const optionsRender = this.props.data.map(function(item, index) {
      return (
        <option value={item.id} key={index}>{item.name}</option>
      );
    });
    return (
      <select onChange={this.props.handleChange} value={this.props.selectedLine}>
        {optionsRender}
      </select>
    );
  }
}

SelectLine.propTypes = {
  handleChange: React.PropTypes.func,
  selectedLine: React.PropTypes.string,
  data: React.PropTypes.array,
};
