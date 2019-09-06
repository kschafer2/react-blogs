import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

//Thunk allows action creators to return functions as well as actions

//NEW ACTION CREATOR SOLUTION (implemented)
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

//asynchronous action creator
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type : 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch ({ type : 'FETCH_USER', payload: response.data});
};

//MEMOIZATION SOLUTION (not implemented)
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
//
// // "private" function
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//
//   dispatch ({ type : 'FETCH_USER', payload: response.data});
// });
