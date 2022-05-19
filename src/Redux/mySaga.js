import axios from "axios";
import toast, { LoaderIcon } from "react-hot-toast";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getProductsSucces } from "Redux/productSlice";
import { getCartSuccess, postCartSucess } from "./cartSlice";

function* workGetProductsFetch() {
  toast.success("Loading data...", {
    icon: <LoaderIcon />,
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

  const products = yield call(() => axios.get(`${process.env.REACT_APP_DB_URL}`));

  yield delay(2000);

  yield put(getProductsSucces(products.data));
}

function* workGetCartFetch() {
  const cart = yield call(() => axios.get(`${process.env.REACT_APP_CART_URL}`));
  yield put(getCartSuccess(cart.data));
}

function* workPostCart(action) {
  const postRequest = yield call(() => axios.post(`${process.env.REACT_APP_CART_URL}`, action.payload))
  yield put(postCartSucess(postRequest.data))

  // console.log(postRequest)
  // const cart = yield call(() => axios.get(`${process.env.REACT_APP_CART_URL}`));
  // yield put(getCartSuccess(cart.data));
}

function* mySaga() {
  yield takeLatest("products/getProductsFetch", workGetProductsFetch);

  yield takeLatest("cart/getCart", workGetCartFetch);

  yield takeLatest("cart/postCart", workPostCart);
}

export default mySaga;
