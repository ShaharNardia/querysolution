import React, { Component } from 'react';
import IconsRepository from '../Icons/IconsRepository';

class App extends Component {
  constructor(props) {
    super(props);
    this.icon = new IconsRepository();
  }
  render() {
    return (
      <div className="Header">
        <div className='icon'>
          <img
            className="menu"
            alt=""
            src={require(`../img/menu.png`)}
          />
        </div>
        <div className="title">
          <h2>Zemst Brussles</h2>
          <div>4324123</div>
        </div>
        <div className='icon'>
          <img
            className="chat"
            alt=""
            src={require(`../img/chat.png`)}
          />
        </div>
      </div>
    );
  }
}

export default App;
