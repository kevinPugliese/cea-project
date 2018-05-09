import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/TypeActions';

const INITIAL_STATE = {
    isLogged: false,
    errorLogin: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLogged: true };
        case LOGIN_FAIL:
            return { ...state, errorLogin: action.payload }
        default:
            return state;
    }
}
