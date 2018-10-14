import React from 'react';
import { Container } from 'flux/utils';
import BookStore from './library/BookStore';
import App from './App';

class AppContainer extends React.Component {
  static getStores() {
    return [BookStore];
  }

  static calculateState(prevState) {
    return {
      books: BookStore.getState(),
    };
  }

  render() {
    return ( <App {...this.state} /> )
  }
}

export default Container.create(AppContainer);
