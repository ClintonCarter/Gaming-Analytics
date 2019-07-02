import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';

export default class Controls extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='controls'>
        <h1>Your Game Analytics</h1>
        <SearchBar setSearchTerm={this.props.setSearchTerm} />
        <FilterBar />
      </div>
    )
  }
}