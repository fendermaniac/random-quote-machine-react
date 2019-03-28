import React, { Component } from 'react';
import Quote from './Quote';
import './App.css';


// https://randomstoicquotesapi.herokuapp.com/api/v1/quotes

class App extends Component {
  state = { 
      quote: 'Hello World',
      author: 'Me'
     }

  componentDidMount() {
    this.generateQuote();
  }
  
  generateQuote = () => {
    const randomNum = Math.floor(Math.random() * (500 - 1)) + 1;
    fetch(`https://jsonplaceholder.typicode.com/comments?id=${randomNum.toString()}`)
    .then(res => res.json())
    .then(data => this.setState({
      quote: data[0].body,
      name: data[0].name
    }));
  }

  shareQuote = () => {
    window.open( `https://twitter.com/intent/tweet?text=${this.state.quote} Quote by: ${this.state.name}`);
  }

  render() { 
    return ( 
      <div>
        <Quote quote={this.state.quote} author={this.state.name}/>
        <button onClick={this.generateQuote}>New Quote</button>
        <button onClick={this.shareQuote}>Tweet Quote</button>
      </div>
     );
  }
}
 
export default App;
