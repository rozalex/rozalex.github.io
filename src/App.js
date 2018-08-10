import React, { Component } from 'react';
import Header from './components/header/Header';
import Button from './components/button/Button';
import Switch from './components/switch/Switch';
import { Icon } from 'react-icons-kit'
import { fileCodeO } from 'react-icons-kit/fa/fileCodeO'

import './style/App.css';
import './style/App.rtl.css';

class App extends Component {
  constructor() {
    super();

    this.handleSwitch = this.handleSwitch.bind(this);
    this.showSlider = this.showSlider.bind(this);
    this.hideSlider = this.hideSlider.bind(this);

    this.state = {
      direction: "ltr",
      buttonsSlider: false
    }
  }

  handleSwitch() {
    const nextDirection = this.state.direction === 'ltr' ? 'rtl' : 'ltr';
    this.setState({direction: nextDirection});
  }

  showSlider() {
    this.setState({buttonsSlider: true});
  }

  hideSlider() {
    this.setState({buttonsSlider: false});
  }

  render() {
    const data = {
      title: "Priority UX",
      longTitle: "Priority UX long name",
      hebrewTitle: "עברית",
      name: "Alex",
      url: "https://www.w3schools.com/howto/img_avatar.png"
    }

    const { direction, buttonsSlider } = this.state;
    return (
      <div className={`App ${this.state.direction}`}>
          <Header {...data} />
          <main>
            <section>
              <h2>Direction Switch</h2>
              <Switch buttonClass="blue" checked={direction === 'ltr'} handleSwitch={this.handleSwitch} /> 
              <Switch buttonClass="green" checked={direction === 'ltr'} handleSwitch={this.handleSwitch} /> 
              <Switch buttonClass="purple" checked={direction === 'ltr'} handleSwitch={this.handleSwitch} /> 
            </section>
            <section>
              <div className={ buttonsSlider ? "code-snippet-on" : "code-snippet-off" }>
                <div className="slide-menu" onClick={this.hideSlider}>
                  <Icon icon={fileCodeO} />
                </div>
                <div className="code">
                  <div>{`<Button buttonClass='your-class' title={your-title} />`}</div>
                </div>
              </div>
              <div className="slide-menu" onClick={this.showSlider}>
                <Icon icon={fileCodeO} />
              </div>
              <div className="section-title">Buttons</div>
              <Button buttonClass="blue" title={data.hebrewTitle } />
              <Button buttonClass="green" title={data.title } />
              <Button buttonClass="purple" title={data.longTitle } />
            </section>
            <section>
              <h2>Tabs</h2>
            </section>
            <section>
              <h2>Dropdown</h2>
            </section>
          </main>
      </div>
    );
  }
}

export default App;
