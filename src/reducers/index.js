/**
 * reducers/index.js
 */
import { combineReducers } from 'redux';
import POSTS from './posts'; //reducers/posts.js
import COMMENTS from './comments';//reducers/comments.js

/**
 * Combine ALL reducers FOR register in stores/index.js file
 */
export default combineReducers({
    posts: POSTS,
    comments: COMMENTS
});