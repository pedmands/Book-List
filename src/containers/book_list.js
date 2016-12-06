import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
// bindActionCreators takes the return value from an Action Creator and flows it through the Reducers.
// See the mapDispatchToProps function, below.

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)} // Action Creator, bound by mapDispatchToProps
          key={book.title}
          className="list-group-item">
        {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
} // BookList

// Use mapStateToProps to paste the Application state onto BookList's props for renderList() to use when it maps.
// the Application state is defined in ../reducers/index.js, which defines state.books as the array of books in
// BooksReducer ../reducers/reducer_books
function mapStateToProps(state) {
  return {
    books: state.books //defines 'books' for Line 6: return this.props.books.map((book) => {
  };
}


// Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all reducers through dispatch funnel:
  return bindActionCreators({ selectBook: selectBook }, dispatch); // the second selectBook is the action creator imported above.
  // this.props.selectBook in the BookList container will call the selectBook action creator.
}

// connect takes the BookList Component,
// attaches mapStateToProps,
// makes the dispatch method, selectBook, available as a prop,
// and exports it as a Container.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
