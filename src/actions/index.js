// Action Creators

export function selectBook(book) {
  // selectBook needs to return an action:
  // and object with a 'type' property (PURPOSE),
  // and a 'payload' property (DATA/INFORMATION).
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
} // selectBook AC
