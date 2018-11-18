import React, { Component } from 'react';
import './App.css';
import ComponentServices from './ComponentServices';
class App extends Component {
  
  //state={};
  constructor(){
    super();
    this.state={hello:"007"};
  }
  componentWillMount(){
    var componentService=new ComponentServices();
    var result = componentService.getGreets();
    console.log(result);
    this.setState(this.state);
  }
  render() {
    return (<div>Hai</div>);
  }
}

export default App;
