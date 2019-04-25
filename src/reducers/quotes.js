import { GENERATE_QUOTE, DELETE_QUOTE } from '../actions/types';

const defaultState = 
{ quote: 'Hello World!',
  name: 'Foo Bar',
  email: 'foo@baz.com',
  date: Date(Date.now()),
  generatedQuotes: []

 }

const quotes = (state = defaultState, action) => {
  switch(action.type) {
    case GENERATE_QUOTE : 
      return { ...state, 
        quote: action.payload.body, 
        name: action.payload.name,
        email: action.payload.email,
        date: action.date,
        generatedQuotes: [...state.generatedQuotes, {
          quote: action.payload.body, 
          name: action.payload.name,
          email: action.payload.email,
          date: action.date
        }]
      } 
    case DELETE_QUOTE : console.log(action.payload);
        return {
          ...state,
          generatedQuotes: [...state.generatedQuotes.filter(quote => quote !== state.generatedQuotes[action.payload])]}
    default: 
      return state;
  }
}

export default quotes;