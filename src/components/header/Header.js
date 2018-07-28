import React, { Component } from 'react';
import Avatar from '../avatar/Avatar';

import './style/header.css';

class Header extends Component {
  render() {
    const { title, name, url } = this.props;
    return (
      <header>
        <span className="title">
          <h1>{title}</h1>
        </span>
        <div className="middle-space"/>
        <Avatar url={url} name={name} />
      </header>
    );
  }
}

export default Header;
