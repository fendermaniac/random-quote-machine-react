/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generateQuote} from '../actions';

const Quote = ({quote, author, email, date, generateQuote, shareQuote}) => {

  return (
    <div className="box">
      <p>
        <strong>Quote:</strong>
        {' '}
        {quote}
      </p>
      <p>
        <strong>Author:</strong>
        {' '}
        {author}
      </p>
      <p>
        <strong>Email:</strong>
        {' '}
        {email}
      </p>
      <p>
        <strong>Date:</strong>
        {' '}
        {date}
      </p>
      <br />
      <div className="buttons">
        <button className="button is-primary is-small" onClick={generateQuote}>New Quote</button>
        <button className="button is-success is-small" onClick={() => window.open(`https://twitter.com/intent/tweet?text="${quote}" Quote by: ${author}`)}>Tweet Quote</button>
      </div>

    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  email: PropTypes.string,
  date: PropTypes.string,
  generateQuote: PropTypes.func,
};

const mapStateToProps = (state) => {

  return {
    quote: state.quotes.quote,
    author: state.quotes.name,
    email: state.quotes.email,
    date: state.quotes.date,

};
};

const mapDispatchToProps = dispatch => {
  return {
    generateQuote: () => dispatch(generateQuote())    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
