import React from "react";
import { string, object } from 'prop-types';

export default class BookItem extends React.Component {

  static propTypes = {
    book: object.isRequired
  }

  static defaultProps = {
    book: { title: 'Add a book' }
  }

  render() {
    console.log(this.props)
    return (
      <span>{this.props.book.title}</span>
    )
  }
}
