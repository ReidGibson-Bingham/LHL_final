import React, { Component, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import consumer from "./consumer"



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      userChannel : consumer.subscriptions.create({ channel: "UserChannel", room: "Best Room" },{
        received(data) {
          this.appendLine(data)
        }, 
        appendLine(data) {
          const html = this.createLine(data)
          const element = document.querySelector("[id='chat-room']")
          element.insertAdjacentHTML("beforeend", html)
        }, 
        createLine(data) {
          return `
            <article class="chat-line">
              <span class="speaker">${data["sent_by"]}</span>
              <span class="body">${data["body"]}</span>
            </article>
          `
        }
  
      })
    }

  }

  

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }



  render() {
    return (
      
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={() => {this.state.userChannel.send({ sent_by: "Paul", body: "This is a cool chat app." })}} >
          Fetch Data
        </button>
        <div id="chat-room"> </div>        
      </div>
    );
  }
}

export default App;
