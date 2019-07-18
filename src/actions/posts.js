/**
 * actions/post.js
 */

import { ADD_POST, REMOVE_POST } from '../constants/posts';

export const addPost = infoPost => ({
    type: ADD_POST,
    payload: infoPost
});

// REMOVE HERE 1
export const removePost = infoPost => ({
    type: REMOVE_POST,
    payload: infoPost
});