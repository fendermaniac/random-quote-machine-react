import React, { Component } from 'react';
import Quote from './Quote';
import './App.css';


// https://randomstoicquotesapi.herokuapp.com/api/v1/quotes

class App extends Component {
  state = { 
      quote: '',
      author: ''
     }
  
  generateQuote = () => {
    const randomNum = Math.floor(Math.random() * (32 - 1)) + 1;
    fetch('https://randomstoicquotesapi.herokuapp.com/api/v1/quotes')
    .then(res => res.json())
    .then(data => this.setState({
      quote: data.data.id[randomNum]
    }));
  }

  render() { 
    return ( 
      <div>
        <Quote quote={this.state.quote} author={this.state.author}/>
        <button>New Quote</button>
        <button>Tweet Quote</button>
      </div>
     );
  }
}
 
export default App;
