// @flow

import Immutable from 'immutable';

declare class Book {
  id: string;
  title: string;

  constructor(data: {
    id: string;
    title: string;
  }): void;

  set(key: 'id', value: string): Book;
  set(key: 'title', value: string): Book;
}

// $FlowExpectedError: Intentional rebinding for flow.
const Book = Immutable.Record({
  id: '',
  title: '',
});

export default Book;
