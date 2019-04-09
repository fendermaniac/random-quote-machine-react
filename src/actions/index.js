import { GENERATE_QUOTE, DELETE_QUOTE } from './types';

export const generateQuote = (payload) => {
  type: 'GENERATE_QUOTE',
  payload
}

export const deleteQuote = index => {
  type: 'DELETE_QUOTE',
  index
}
