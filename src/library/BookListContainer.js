import React, { Component } from 'react';
import { Container } from 'flux/utils';
import BookDispatcher from './BookDispatcher';
import BookStore from './BookStore';
import BookList from './BookList';

class BookListContainer extends Component {
  static getStores() {
    return [BookStore];
  }

  static calculateState(prevState) {
    return { books: BookStore.getState() };
  }

  componentDidMount() {
    BookDispatcher.dispatch({
      type: 'books/start-load',
    });
  }

  render() {
    console.log("container books")
    console.log(this.state)
    return (<BookList books={this.state.books} />)
  }
}

export default Container.create(BookListContainer);
