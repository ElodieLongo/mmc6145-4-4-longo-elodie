import { useReducer } from "react";
import { 
  ADD_BOOK, 
  REMOVE_BOOK, 
  SEARCH_BOOKS 
} from './actions';

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}


// TODO: import actions and implement reducer for each action
function reducer(prevState, action) {
  switch(action.type) {
    case ADD_BOOK: {
      const isAlreadyFavorite = prevState.favoriteBooks.some(book => book.id === action.payload.id);
      if (!isAlreadyFavorite) {
        const updatedFavorites = [...prevState.favoriteBooks, action.payload];
        saveToLocalStorage(updatedFavorites);
        return {
          ...prevState, 
          favoriteBooks: updatedFavorites,
        };
      }
      return prevState;
    }

      case REMOVE_BOOK: {
        const updatedFavorites = prevState.favoriteBooks.filter(book => book.id !== action.payload);
        saveToLocalStorage(updatedFavorites);
        return {
          ...prevState,
          favoriteBooks: updatedFavorites,
        };
     }
      case SEARCH_BOOKS: {
        const searchResults = Array.isArray(action.payload) ? action.payload : [];
      return {
        ...prevState,
        bookSearchResults: searchResults,
      };
    }
    default:
      return prevState;
  }
}

export default reducer;

