import React from 'react';
export default class SearchBar extends React.Component {
  state = { searchTerm: '' };

  handleSubmit = (e)  => {
    e.preventDefault();

    if(this.props.submitHandler) {
      this.props.submitHandler(this.state.searchTerm);
    }
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="search-bar">Image Search</label>
            <input
              id="search-bar"
              type="text"
              value={this.state.searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}