const { createSlice } = require("@reduxjs/toolkit");

const initialState = []
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            let indexExist = state.findIndex(product => product.productId === action.payload.productId)
            
            if(indexExist < 0) {
                state.push(action.payload)
            } else {
                state[indexExist] = {
                    ...state[indexExist],
                    quantity: state[indexExist].quantity + action.payload.quantity
                }
            }
        },

    }
})

export const {addCart} = cartSlice.actions
export default cartSlice.reducer