export default (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_POSTS':
      return action.payload;
    default:
      return state;
  }
};
