import { QuoteActions } from '../actions';

const defaultState = 
{ quote: 'Hello World',
  name: 'Me',
  email: 'foo@bar.com',
  date: Date(Date.now()),
  generatedQuotes: []

 }

const quotes = (state = defaultState, action) => {
  switch(action.type) {
    case 'GENERATE_QUOTE' : 
      return {
        quote: action.quote,
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
    case 'DELETE_QUOTE' : 
      return
        [...state.generatedQuotes.filter(quote => quote != action.payload)]
    default: 
      return state;
  }
}

export default quotes;