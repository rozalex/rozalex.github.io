import React, { Component } from 'react';
import './style/button.css';

class Button extends Component {
  render() {
    const { title, buttonClass, style } = this.props;
    return (
      <a href="#" style={style} className={`button ${buttonClass}`}>{title}</a>
    );
  }
}

export default Button;
