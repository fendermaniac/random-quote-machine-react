import React from 'react';

const Quote = (props) => {
  const { quote, author, email, date, generateQuote, shareQuote } = props;
  return ( 
    <div className="box">
      <p><strong>Quote:</strong> {quote}</p>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Date:</strong> {date}</p>
      <br />
      <div className="buttons"><button className="button is-primary is-small" onClick={generateQuote}>New Quote</button>
      <button className="button is-success is-small" onClick={shareQuote}>Tweet Quote</button></div>
      
    </div>
   );
}
 
export default Quote;