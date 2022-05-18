import "features/Main/style.scss";
import React, { useEffect } from "react";
import { Toaster, toast, LoaderIcon } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFetch } from "Redux/productSlice";

function Products() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    dispatch(getProductsFetch());
  }, []);

  return (
    <div className="product">
      <div>
        <Toaster />
      </div>
      <div className="product_detail">a</div>

      <div className="product_list">b</div>
    </div>
  );
}

export default Products;
