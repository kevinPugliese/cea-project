import { PRODUCT_SAVE_FAIL, PRODUCT_SAVE_SUCCESS, FETCH_PRODUCTS } from '../actions/TypeActions';

const INITIAL_STATE = {
    productSave: false,
    errorForm: '',
    items: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FETCH_PRODUCTS:
            return { ...state, productSave: false, items: action.payload };
        
        case PRODUCT_SAVE_SUCCESS:
            return { ...state, productSave: true };

        case PRODUCT_SAVE_FAIL:
            return { ...state, errorForm: action.payload };
        
        default:
            return state;
    }
}
