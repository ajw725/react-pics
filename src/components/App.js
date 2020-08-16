import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

export default class App extends React.Component {
  state = { images: [] };

  handleSearch = async (searchTerm) => {
    const resp = await unsplash.get('/search/photos', {
      params: { query: searchTerm }
    });
    this.setState({ images: resp.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar submitHandler={this.handleSearch} />
        Found {this.state.images.length} results
      </div>
    );
  }
}