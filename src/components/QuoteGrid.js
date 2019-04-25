import React from 'react';
import { connect } from 'react-redux';
import { deleteQuote } from '../actions';

const QuoteGrid = ({generatedQuotes}) => 
 <div>{ generatedQuotes }</div>


const mapStateToProps = state => {

    return {
      generatedQuotes: state.quotes.generatedQuotes,
  };
  };

const mapDispatchToProps = dispatch => {
    return {
      deleteQuote: () => dispatch(deleteQuote())    
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(QuoteGrid);
