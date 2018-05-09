import firebase from 'firebase';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './TypeActions';

export function verifyLogin(values) {
    const { email, password } = values;
    return dispatch => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(value => dispatch({ type: LOGIN_SUCCESS }))
            .catch(error => dispatch({ type: LOGIN_FAIL, payload: error.message }));
    }
}
