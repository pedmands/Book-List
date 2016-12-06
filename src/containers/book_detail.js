import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // Boot-up early return to avoid returning state, which is null at Boot-up
    if(!this.props.book) {
      return <div>Select a book to get started!</div>;
    }
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <h3>By {this.props.book.author}</h3>
        <h5>Pages: {this.props.book.pages}</h5>
        <p>{this.props.book.description}</p>
      </div>
    );
  }// render()
}// BookDetail

function mapStateToProps(state){
  return {
    book: state.activeBook // references the activeBook piece of state defined by the reducer in reduxers/index
  };
}

export default connect(mapStateToProps)(BookDetail);
