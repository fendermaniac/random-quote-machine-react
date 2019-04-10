import { GENERATE_QUOTE, DELETE_QUOTE } from '../actions/types';

const defaultState = 
{ quote: 'Hello World',
  name: 'Me',
  email: 'foo@bar.com',
  date: Date(Date.now()),
  generatedQuotes: []

 }

const quotes = (state = defaultState, action) => {
  switch(action.type) {
    case GENERATE_QUOTE : 
      return {
        quote: action.body,
        name: action.name,
        email: action.email,
        date: action.date,
        generatedQuotes: [...state.generatedQuotes, {
          quote: action.quote,
          name: action.name,
          email: action.email,
          date: action.date
        }]
      } 
    case DELETE_QUOTE : 
        return {
          generatedQuotes: [...state.generatedQuotes.filter(quote => quote !== action.payload)]}
    default: 
      return state;
  }
}

export default quotes;