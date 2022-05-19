import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productSlice from "Redux/productSlice";
import cartSlice from "./cartSlice";
import mySaga from "./mySaga";

const sagaMiddleWare = createSagaMiddleware()

const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice
    },
    middleware: [sagaMiddleWare]
})

sagaMiddleWare.run(mySaga)

export default store;