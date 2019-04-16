/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Quote = (props) => {
  const {
    quote, author, email, date, generateQuote, shareQuote,
  } = this.props;
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
        <button className="button is-success is-small" onClick={shareQuote}>Tweet Quote</button>
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
  shareQuote: PropTypes.func,
};

const mapStateToProps = state => {
  const { quote, author, email, date} = state;
};

const mapDispatchToProps = dispatch => {
  return {
    generateQuote: () => {
      dispatch(generateQuote())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
