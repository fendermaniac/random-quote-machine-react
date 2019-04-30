import { GENERATE_QUOTE, DELETE_QUOTE } from '../actions/types';

const defaultState = 
{ quote: 'Hello World!',
  name: 'Foo Bar',
  email: 'foo@baz.com',
  date: Date(Date.now()),
  generatedQuotes: [],
  id: 0

 }

const quotes = (state = defaultState, action) => {
  switch(action.type) {
    case GENERATE_QUOTE : 
      return { ...state, 
        quote: action.payload.body, 
        name: action.payload.name,
        email: action.payload.email,
        date: action.date,
        id: action.payload.id,
        generatedQuotes: [...state.generatedQuotes, {
          quote: action.payload.body, 
          name: action.payload.name,
          email: action.payload.email,
          date: action.date,
          id: action.payload.id
        }]
      } 
    case DELETE_QUOTE : 
        return {
          ...state,
          generatedQuotes: state.generatedQuotes.filter(quote=>quote.id !== action.id)
        }
    default: 
      return state;
  }
}

export default quotes;