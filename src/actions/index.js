import { GENERATE_QUOTE, DELETE_QUOTE } from './types';


export const generateQuote = () => dispatch => {
  const randomNum = Math.floor(Math.random() * (500 - 1)) + 1;
  fetch(`https://jsonplaceholder.typicode.com/comments?id=${randomNum.toString()}`)
  .then(res => res.json())
  .then(data => {
    const quoteData = {...data[0], date: Date(Date.now())}
    dispatch({ 
      type: GENERATE_QUOTE, 
      payload: quoteData
    })
  })
}

export const deleteQuote = index => dispatch => {
    dispatch({
      type: DELETE_QUOTE,
      payload: index
    }) 
}
