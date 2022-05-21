
const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      let indexExist = state.findIndex(
        (product) => product.productId === action.payload.productId
      );

      if (indexExist < 0) {
        state.push(action.payload);
      } else {
        state[indexExist] = {
          ...state[indexExist],
          quantity: state[indexExist].quantity + action.payload.quantity,
        };
      }
    },

    updateCart: (state, action) => {
      let indexExist = state.findIndex(
        (product) => product.productId === action.payload.productId
      );

      if (indexExist < 0) {
        state.push(action.payload);
      } else {
        state[indexExist] = {
          ...state[indexExist],
          quantity: action.payload.quantity,
        };
      }
    },

    deleteCart: (state, action) => {
      return state.filter((product) => product.productId !== action.payload);
    },

    postCart: () => {},

    postCartSuccess: (state) => {
      return (state = []);
    },
  },
});

export const { addCart, updateCart, deleteCart, postCart, postCartSuccess } =
  cartSlice.actions;
export default cartSlice.reducer;
