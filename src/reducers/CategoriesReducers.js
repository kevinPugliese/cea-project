import { FETCH_CATEGORIES, CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAIL } from '../actions/TypeActions';

const INITIAL_STATE = {
    items: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return { ...state, items: action.payload };
        
        default:
            return state;
    }
}
