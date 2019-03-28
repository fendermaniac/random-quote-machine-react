/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const QuoteCard = (props) => {
  const {
    author, email, date, quote, shareQuote, deleteQuote,
  } = props;
  return (
    <div className="box" key={date}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Mock" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{author}</strong>
              <small>{email}</small>
              <br />
              <small><em>{date}</em></small>
              <br />
              {quote}
            </p>
          </div>
        </div>
      </article>
      <br />
      <div className="buttons">
        <button className="button is-success is-small" onClick={shareQuote}>Tweet Quote</button>
        <button className="button is-danger is-small" onClick={deleteQuote}>Delete Quote</button>
      </div>
    </div>
  );
};

QuoteCard.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  email: PropTypes.string,
  date: PropTypes.string,
  deleteQuote: PropTypes.func,
  shareQuote: PropTypes.func,
};

export default QuoteCard;
