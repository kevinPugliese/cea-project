import firebase from 'firebase';
import { toastr } from 'react-redux-toastr';
import { FETCH_CATEGORIES, CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAIL } from './TypeActions';

export function fetchCategories() {
    return dispatch => {
        let elements = [];
        firebase.database().ref('category')
            .on('value', snapshot => {
                let item = [];
                snapshot.forEach(element => {
                    elements.push({
                        id: element.key,
                        name: element.val().name
                    });
                });
                dispatch({ type: FETCH_CATEGORIES, payload: elements });
            });
    }
}

export function createCategory(values) {
    console.log(values)
    return dispatch => {
        firebase.database().ref(`/category`)
            .push({ name: values.category })
            .then(value => console.log(value))
            .catch(value => console.error(value));
    }
}
