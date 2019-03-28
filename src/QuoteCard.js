import React from 'react';

const QuoteCard = (props) => {
    const { author, email, date, quote, shareQuote, deleteQuote } = props;
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
          <strong>{author}</strong> <small>{email}</small> 
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
}
 
export default QuoteCard;