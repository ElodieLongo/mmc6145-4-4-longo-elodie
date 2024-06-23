// TODO: Load/parse 'favoriteBooks' from localStorage

const savedBooks = localStorage.getItem('favoriteBooks');
const favoriteBooks = savedBooks ? JSON.parse(savedBooks) : []; 


// initial state should have keys bookSearchResults and favoriteBooks
// bookSearchResults should be an empty array
// favoriteBooks should be the value from localStorage or an empty array if localStorage value is falsy

const initialState = {
    bookSearchResults: [],
    favoriteBooks,
};

// TODO: Export initial state object as default
export default initialState;