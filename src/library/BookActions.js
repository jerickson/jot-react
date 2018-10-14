// @flow

'use strict';

import Book from './Book';

export type Action =

  // Reading todos.
  | {
    type: 'books/start-load',
    books: Array<Book>,
  }
  | {
    type: 'books/loaded',
    books: Array<Book>,
  }
  | {
    type: 'todos/load-error',
    books: Array<string>,
    error: Error,
  }

  // This is a semi-colon, all hail the mighty semi-colon.
  ;
