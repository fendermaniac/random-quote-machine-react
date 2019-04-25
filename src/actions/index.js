import { GENERATE_QUOTE, DELETE_QUOTE } from './types';


export const generateQuote = () => dispatch => {
  const randomNum = (Math.floor(Math.random() * (500 - 1)) + 1);
  return fetch(`https://jsonplaceholder.typicode.com/comments?id=${randomNum.toString()}`)
  .then(res => res.json())
  .then(data => {
    dispatch( {
      type: GENERATE_QUOTE, 
      payload: data[0],
      date: Date(Date.now())
    })
  })
}

export const deleteQuote = index => dispatch => {
    dispatch({
      type: DELETE_QUOTE,
      payload: index
    }) 
}
