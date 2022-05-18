import axios from "axios";
import toast, { LoaderIcon } from "react-hot-toast";
import { call, delay, put, takeLatest } from "redux-saga/effects";

import { getProductsSucces } from "Redux/productSlice";

function* workGetProductsFetch() {
  const products = yield call(() =>
    axios.get(`${process.env.REACT_APP_DB_URL}`)
  );

  toast("Loading data...", {
    icon: <LoaderIcon />,
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

  yield delay(4000);

  yield put(getProductsSucces(products.data));
}

function* mySaga() {
  yield takeLatest("products/getProductsFetch", workGetProductsFetch);
}

export default mySaga;
