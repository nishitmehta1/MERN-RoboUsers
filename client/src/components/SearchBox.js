import React, { Component } from 'react';

class SearchBox extends Component {
  handleChange = event => {
    const value = event.target.value;
    this.props.handleChange(value);
  };
  render() {
    return (
      <div>
        <input
          type='search'
          placeholder='Search by username'
          value={this.props.value}
          className='search form-control'
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default SearchBox;
