const { createSlice } = require("@reduxjs/toolkit");


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        cartActiveId: null,
        isLoading: false,
    },
    reducers: {
        getCart: () => {},

        getCartSuccess: (state, action) => {
            state.cart = action.payload
        },

        postCart: () => {},

        postCartSucess: (state, action) => {
            state.cart = action.payload
            console.log("state: ", state.cart)
            // console.log("action: ", action)
            
        }
    }
})

export const {getCart, getCartSuccess, postCart, postCartSucess} = cartSlice.actions
export default cartSlice.reducer