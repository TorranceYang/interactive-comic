import React, { Component } from 'react';
import './App.css';
import Panel1 from './Panel1';
import Panel2 from './Panel2';

//The way component moving is handled is super sketchy, but I'm in a time crunch so this will work
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPanel: 0,
      panels: [<Panel1 />, <Panel2 />]
    };
  }

  decrement() {
    let num = this.state.currentPanel;
    if(num !== 0) {
      num--;
    }
    this.setState({currentPanel: num});
  }

  increment() {
    let num = this.state.currentPanel;
    if(num !== 10) {
      num++;
    }
    this.setState({currentPanel: num});
  }

  render() {
    return (
      <div className="container center">
        <div className="row">
          <div className="col-sm">
            <button type="button" className="btn btn-dark right" onClick={this.decrement.bind(this)}> &lsaquo; </button>
          </div>
          <div className="col-sm">
            {this.state.panels[this.state.currentPanel]}
          </div>
          <div className="col-sm">
            <button type="button" className="btn btn-dark" onClick={this.increment.bind(this)}> &rsaquo; </button>
          </div>
        </div>
      </div>
      )
  }
}

export default App;
