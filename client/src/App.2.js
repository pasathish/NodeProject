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
    result.then((data)=>{
      console.log(data);
      let result=data["thankyou"].toString();
      this.setState({hello:result});
    });
    
  }

  setValue(){
    this.setState({hello:this.refs.textValue});
  }
  render() {

    return (<textarea ref="textValue" className=" bg-dark form-control text-white" onChange={this.setValue.bind(this)} style={{height:"600px"}} value={this.state.hello}></textarea>);
  }
}

export default App;
