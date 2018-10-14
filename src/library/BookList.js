import React, { Component } from "react";
import { arrayOf, object } from 'prop-types';
import BookItem from './BookItem'


export default class BookList extends React.Component {

  static propTypes = {
    books: arrayOf(object).isRequired
  }

  static defaultProps = {
    books: [{ book: {} }]
  }

  render() {
    const listItems = this.props.books.valueSeq().map((book) =>
      <li key={book.id}>
        <BookItem book={book} />
      </li>
    );
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}
