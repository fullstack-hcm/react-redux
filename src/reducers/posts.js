import { ADD_POST, REMOVE_POST } from '../constants/posts';

const initState = {
    listPosts: []
};
/**
 * 
 * @param {*} state  
 * @param {*} action => type, data(payload) 
 */
export default function PostReducer(state = initState, action) {
    switch(action.type) {
        case ADD_POST: 
            return  {
                ...state,
                listPosts: [...state.listPosts, action.payload]
            };
        // REMOVE HERE 2
        case REMOVE_POST: 
            return {
                ...state,
                listPosts: state.listPosts.filter(item => !Object.is(item, action.payload))
            };
        default: 
            return state;
    }
}