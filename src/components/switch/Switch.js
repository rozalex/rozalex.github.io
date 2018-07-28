import React, { Component } from 'react';
import './style/switch.css';

class Switch extends Component {
  render() {
        const {buttonClass, style, checked } = this.props;
        return (
            <label style={style} className="switch">
                <input type="checkbox" checked={checked} onClick={this.props.handleSwitch}/>
                <span className={`slider round ${buttonClass}`} />
            </label>
        );
    }
  
}

export default Switch;
