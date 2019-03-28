import React, { Component } from 'react';
import Quote from './Quote';
import QuoteCard from './QuoteCard';
import './App.css';


// https://randomstoicquotesapi.herokuapp.com/api/v1/quotes

class App extends Component {
  state = { 
      quote: 'Hello World',
      name: 'Me',
      email: 'foo@bar.com',
      date: Date(Date.now()),
      generatedQuotes: []
     }

  componentDidMount() {

  }
  
  generateQuote = () => {
    const randomNum = Math.floor(Math.random() * (500 - 1)) + 1;
    fetch(`https://jsonplaceholder.typicode.com/comments?id=${randomNum.toString()}`)
    .then(res => res.json())
    .then(data => this.setState({
      quote: data[0].body,
      name: data[0].name,
      email: data[0].email,
      date: Date(Date.now()),
      generatedQuotes: 
        [...this.state.generatedQuotes, { 
          quote: data[0].body,
          name: data[0].name,
          email: data[0].email,
          date: Date(Date.now()) }
        ]
    }));
  }

  shareQuote = () => {
    window.open( `https://twitter.com/intent/tweet?text=${this.state.quote} Quote by: ${this.state.name}`);
  }

  deleteQuote = (e) => {
    console.log(e.target.value)
  }

  render() { 
    return ( 
      <div className="container">
        <div className="columns">
        <div className="column is-half is-offset-one-quarter">
        <h1 className="is-size-3 has-text-centered">Random Quote Generator</h1>
        <Quote 
          quote={this.state.quote} 
          author={this.state.name} 
          email={this.state.email} 
          date={this.state.date} 
          generateQuote={this.generateQuote}
          shareQuote={this.shareQuote}
          />
        </div>
        </div>
        <h1 className="is-size-4 has-text-centered">Recent Quotes</h1>
        <br/>
        <div className="columns is-multiline">
        
          {this.state.generatedQuotes.map(item => 
                <div className="column is-half" key={item.date}>
                <QuoteCard
                  author={item.author} 
                  quote={item.quote} 
                  email={item.email} 
                  date={item.date}
                  deleteQuote={this.deleteQuote}
                  shareQuote={this.shareQuote}
                />
                </div>
          )}
        </div>
      </div>

     );
  }
}
 
export default App;
