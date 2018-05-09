import firebase from 'firebase';

export function createProducts(values) {
    return dispatch => {
        firebase.database().ref(`/products`)
            .push(values)
            .then(value => console.log(value))
            .catch(value => console.error(value));
    }
}
