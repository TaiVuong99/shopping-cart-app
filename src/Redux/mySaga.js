import axios from "axios";
import toast, { LoaderIcon } from "react-hot-toast";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getProductsSucces } from "Redux/productSlice";
import { v4 as uuid } from "uuid";
import { postCartSuccess } from "./cartSlice";

function* workGetProductsFetch() {
  toast.success("Loading data...", {
    icon: <LoaderIcon />,
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

  const products = yield call(() =>
    axios.get(`${process.env.REACT_APP_DB_URL}`)
  );

  yield put(getProductsSucces(products.data));
}

function* workPostCart(action) {
  toast.success("Posting your order...", {
    icon: <LoaderIcon />,
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

  const formPost = {
    orderId: uuid(),
    subTotal: +action.payload.sub.toFixed(2),
    shippingFee: action.payload.ship,
    total: +action.payload.total.toFixed(2),
    pay: false,
    productsOrder: action.payload.cart,
  };

  yield call(() => axios.post(`${process.env.REACT_APP_CART_URL}`, formPost));

  yield delay(1000);

  yield put(postCartSuccess());
}

function* mySaga() {
  yield takeLatest("products/getProductsFetch", workGetProductsFetch);

  yield takeLatest("cart/postCart", workPostCart);
}

export default mySaga;
