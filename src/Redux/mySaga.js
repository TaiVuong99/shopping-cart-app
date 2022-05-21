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
  const today = new Date()
  const date = today.getFullYear()+'/'+`0${(today.getMonth()+1)}`.slice(-2)+'/'+`0${today.getDate()}`.slice(-2);
  const time = `0${today.getHours()}`.slice(-2) + ":" + `0${today.getMinutes()}`.slice(-2) + ":" + `0${today.getSeconds()}`.slice(-2);
  const dateTime = date + ' ' + time

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
    dateTime,
    pay: false,
    productsOrder: action.payload.cart,
    subTotal: +action.payload.sub.toFixed(2),
    shippingFee: action.payload.ship,
    total: +action.payload.total.toFixed(2),
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
