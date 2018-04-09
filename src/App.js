import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pusher from 'pusher-js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      innstilling: 0,
      avlesning: 0,
      status: 'av'
    };
  }

  componentDidMount() {

    const pusher = new Pusher('05b7307f7874f401465b', {
      cluster: 'eu',
      encrypted: true
    });
    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', data => {
      let stat;
      if(data.innstilling > data.avlesning) {
        stat  = "på"
      } else {
        stat = "av"
      }
      this.setState({ 
        innstilling : data.innstilling,
        avlesning : data.avlesning,
        status : stat
       });
       alert(JSON.stringify(data))
    });
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Innstilling: <span>{this.state.innstilling}</span></p>
        <p className="App-intro">Avlesning: <span>{this.state.avlesning}</span></p>
        <p className="App-intro">Status: <span>{this.state.status}</span></p>
      </div>
    );
  }
}

export default App;
