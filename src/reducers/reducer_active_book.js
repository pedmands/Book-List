// state argument is not Application state, but rather only the state
// ActiveBookReducer is responsible for.
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
