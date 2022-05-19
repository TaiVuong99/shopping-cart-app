import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        productsList : [],
        isLoading: false,
    },
    reducers: {
        getProductsFetch: (state) => {
            state.isLoading = true;
        },

        getProductsSucces: (state, action) => {
            state.productsList = action.payload;
            state.isLoading = false;
        }
    }
})

const {actions, reducer} = productSlice;

export const {getProductsFetch, getProductsSucces} = actions;
export default reducer;