import jsonPlaceholder from '../apis/jsonPlaceholder';

//asynchronous action creator
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type : 'FETCHED_POSTS', payload: response });
};
