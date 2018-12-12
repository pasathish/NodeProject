import React, { Component } from 'react';
import './App.css';

export default class MergeChangesComponent extends Component {
  removeIndex=[]
  mergeContent=[]
  constructor(props){
    super()
    this.state={"comment":[]};
  }

  addElement(index,event){
    console.log("event",index)
    this.props.method(event,index)
    let span=event.currentTarget.parentElement.getElementsByTagName("span");
    span[1].remove();
    span[0].remove();
  }

  deleteElement(index,event){
    this.removeIndex.push(index);
    event.currentTarget.parentElement.remove();
  }

  componentDidMount(){
    console.log("componentDidUpdate",this.mergeContent)
    let state=this.props.parentScope.state
  state['mergeComponentContent']=this.mergeContent
  this.props.parentScope.setState(state);
  }

render(){
  let index=0;
  let divIndex=0;
  this.mergeContent=[]
  var tempContent="";
  var comment=this.props.comment.map((value,i)=>{
    divIndex++;
    console.log(typeof value)
    if(!value.startsWith("<") && !value.startsWith(">")){
      var tempContent=value;
      value=value.replace(this.props.file1.split("\n")[index],"")
      console.log(this.props.file1.split("\n")[index],"                 ",value)
      index++;
    }
  if(value.trim().startsWith("|")){
  var tempContent="";
    return(<div><div className="text-danger" key={i} index={i}>{tempContent.replace(value)}<span className="btn" onClick={this.addElement(divIndex)}>+</span><span className="btn" onClick={this.deleteElement(divIndex)}>-</span></div>
    <div className="text-success" key={i} index={i+"a"}>{value}<span className="btn" onClick={this.addElement(divIndex)}>+</span><span className="btn" onClick={this.deleteElement(divIndex)}>-</span></div></div>)
  }
  if(value.trim().startsWith(">")){
    this.mergeContent.push(value.replace(">","").substr())
    return(<div className="text-success" key={i} index={i}>{value.replace(">","").substr()}<span className="btn" onClick={this.addElement.bind(this,divIndex)}>+</span><span className="btn" onClick={this.deleteElement.bind(this,divIndex)}>-</span></div>)
  }else if(value.trim().endsWith("<")){
    this.mergeContent.push(value.substr(0,value.length-2))
    return(<div className="text-danger" key={i} index={i}>{value.substr(0,value.length-2)}<span className="btn" onClick={this.addElement.bind(this,divIndex)}>+</span><span className="btn" onClick={this.deleteElement.bind(this,divIndex)}>-</span></div>)
  }else{
    this.mergeContent.push(value)
  return(<div key={i} index={i}>{value}</div>)
  }
  })
return (<div>{comment}</div>);
}
}