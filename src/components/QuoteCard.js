/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteQuote } from '../actions';

const QuoteCard = ({author, email, date, quote, deleteQuote}) => {
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
        <button className="button is-success is-small" onClick={() => window.open(`https://twitter.com/intent/tweet?text="${quote}" Quote by: ${author}`)}>Tweet Quote</button>
        <button className="button is-danger is-small" onClick={(i) => deleteQuote(i)}>Delete Quote</button>
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
};

const mapStateToProps = (state, ownProps) => {
  return {
    quote: ownProps.quote,
    author: ownProps.name,
    email: ownProps.email,
    date: ownProps.date,
    i: ownProps.i,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteQuote: () => dispatch(deleteQuote())    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteCard);
