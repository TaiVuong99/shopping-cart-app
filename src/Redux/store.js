import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productSlice from "Redux/productSlice";
import mySaga from "./mySaga";

const sagaMiddleWare = createSagaMiddleware()

const store = configureStore({
    reducer: {
        products: productSlice
    },
    middleware: [sagaMiddleWare]
})

sagaMiddleWare.run(mySaga)

export default store;