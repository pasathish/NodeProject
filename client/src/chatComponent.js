import React , {Component}  from 'react';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:5000');

export default class ChatComponent extends Component{
    constructor(){
        super();
        this.state={'chatComments':[]};
        var state=this.state['chatComments'];
        socket.on('message',(data)=>{
            state.push(data);
            console.log(state);
            this.setState({'chatComments':state});
        })
    }

    
    joinGroup(){
        socket.emit('join','group1')
    }
    sendMessage(){
        socket.emit('client-message',this.refs.chat.value);
    }

    render(){

        

        let panelContent=this.state.chatComments.map((value,index)=>
            <div className="panel panel-default" key={index}>{value}</div>
        )


        return(<div className="panel-group">
            {panelContent}
            <textarea ref="chat"></textarea>
            <div>
            <button className="btn btn-primary" onClick={this.joinGroup.bind(this)} >Join</button>
            <button className="btn btn-primary" onClick={this.sendMessage.bind(this)} >Join</button>
            </div></div>)
    }
}