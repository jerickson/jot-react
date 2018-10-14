import Book from './Book';
import BookDispatcher from './BookDispatcher';
import axios from 'axios'

const BookAPI = {
  loadBooks() {
    axios.get(`http://api.jot.com.test/books`)
      .then(response => {
        BookDispatcher.dispatch({
          type: 'books/loaded',
          books: response.data.map(rawBook => new Book(rawBook)),
        });
      })
      .catch(error => {
        BookDispatcher.dispatch({
          type: 'books/load-error',
          error,
        });
      });
  },
};


export default BookAPI;
