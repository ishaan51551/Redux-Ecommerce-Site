
import fakeStoreapi from '../../apis/fakeStoreApi';
import { ActionTypes } from "../contants/action-types";

export const fetchProducts = () => async (dispatch) => {
    const response = await fakeStoreapi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCT, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakeStoreapi.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}


export const RemoveSelectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,

    }
}