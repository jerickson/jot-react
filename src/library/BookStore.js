// @flow

import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';
import BookAPI from './BookAPI';
import BookDispatcher from './BookDispatcher';
import Book from './Book';


class BookStore extends ReduceStore {
  constructor() {
    super(BookDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {

      ///// Loading /////

      case 'books/start-load':
        BookAPI.loadBooks();
        return state;

      case 'books/loaded':
        console.log("books loaded" + action.books.length)
        console.log(action.books)
        return state.merge(action.books.map(book => [
          book.id,
          book,
        ]));

      case 'books/load-error':
        return state;

      default:
        return state;
    }
  }
}

export default new BookStore();
