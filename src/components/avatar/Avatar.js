import React, { Component } from 'react';
import './style/avatar.css';

class Avatar extends Component {
  render() {
    const { name, url } = this.props;
    return (
        <div className="avatar">
          <span>{name}</span>
          <img src={url} alt={name} />
        </div>
    );
  }
}

export default Avatar;
