import { GENERATE_QUOTE, DELETE_QUOTE, SHARE_QUOTE } from '../actions/types';

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
      console.log(action.payload.email)
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
        // , {
        //   quote: action.payload.body, 
        //   name: action.payload.name,
        //   email: action.payload.email,
        //   date: action.date
        // }] 
      } 
    case DELETE_QUOTE : 
        return {
          generatedQuotes: [...state.generatedQuotes.filter(quote => quote !== action.payload)]}
    case SHARE_QUOTE : 
          return state;
    default: 
      return state;
  }
}

export default quotes;