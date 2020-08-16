import React from 'react';

export default class ImageCard extends React.Component {
  render() {
    return (
      <div>
        <img
          alt={this.props.description}
          src={this.props.url}
        />
      </div>
    );
  }
}