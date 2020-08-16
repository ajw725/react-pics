import React from 'react';
import SearchBar from './SearchBar';

export default class App extends React.Component {
  handleSearch(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar submitHandler={this.handleSearch} />
      </div>
    );
  }
}