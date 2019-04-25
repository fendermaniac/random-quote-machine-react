import React, { Component } from 'react';
import Quote from './components/Quote';
import QuoteCard from './components/QuoteCard';
import QuoteGrid from './components/QuoteGrid';
import { connect } from 'react-redux';
import { generateQuote } from './actions';

class App extends Component {

  componentDidMount() {
    generateQuote()
  }

  render() { 
    return ( 
      <section className="section">
      <div className="container">
        <div className="columns">
        <div className="column is-half is-offset-one-quarter">
        <h1 className="is-size-3 has-text-centered">Random Quote Generator</h1>
        <br/>
        <Quote />
        </div>
        </div>
        <h1 className="is-size-4 has-text-centered">Recent Quotes</h1>
        <br/>
        <div className="columns is-multiline">
        {/* <QuoteGrid /> */}
          {this.props.generatedQuotes.map((item, i) => 
                <div className="column is-half" key={i}>
                <QuoteCard
                  author={item.name} 
                  quote={item.quote} 
                  email={item.email} 
                  date={item.date}
                  i={i}
                  deleteQuote={() => this.deleteQuote(i)}
                  shareQuote={this.shareQuote}
                />
                </div>
          )}
        </div>
        <footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>Random Quote Generator</strong> by <a href="https://github.com/fendermaniac">Joe LoPresti</a>. 
    </p>
  </div>
</footer>
      </div>
      </section>
      
     );
  }
}

const mapStateToProps = state => {

  return {
    generatedQuotes: state.quotes.generatedQuotes,
};
};

const mapDispatchToProps = dispatch => {
  return {
    generateQuote: () => dispatch(generateQuote())
  };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
