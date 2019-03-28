import React from 'react';

const Quote = (props) => {
  return ( 
    <div>
      <p>Quote: {props.quote}</p>
      <em>Author: {props.author}</em>
    </div>
   );
}
 
export default Quote;