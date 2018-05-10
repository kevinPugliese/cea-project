import firebase from 'firebase';
import { PRODUCT_SAVE_FAIL, PRODUCT_SAVE_SUCCESS, FETCH_PRODUCTS } from './TypeActions';

export function createProducts(values) {
    return dispatch => {
        firebase.database().ref(`/products`)
            .push(values)
            .then(value => dispatch({ type: PRODUCT_SAVE_SUCCESS }))
            .catch(value => dispatch({ type: PRODUCT_SAVE_FAIL }));
    }
}

export function fetchProducts() {
    return dispatch => {
        let elements = [];
        firebase.database().ref('products')
            .on('value', snapshot => {
                let item = [];
                snapshot.forEach(element => {
                    elements.push({
                        id: element.key,
                        name: element.val().name
                    });
                });
                dispatch({ type: FETCH_PRODUCTS, payload: elements });
            });
    }
}
