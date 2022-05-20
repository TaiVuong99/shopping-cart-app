import "features/Main/style.scss";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "Redux/cartSlice";
import { getProductsFetch } from "Redux/productSlice";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";

function Products() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);

  const [productActive, setProductActive] = useState();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProductsFetch());
  }, []);

  const firstRender = () => {
    if(!productActive) setProductActive(productsList[0])
  }
  const handleProductClick = (product) => {
    setProductActive(product);
    setQuantity(1);
    // console.log(productActive);
  };

  const handleDecreaseClick = () => {
    setQuantity(quantity - 1);
  };

  const handleIncreaseClick = () => {
    setQuantity(quantity + 1);
  };

  const handleAddCartClick = (formInfo) => {
    // const formAdd = {
    //   pay: false,
    //   productsInCart: [{...formInfo}],
    // }
    toast.success('Added successfully!!', {
      position: "bottom-left"
    })
    
    dispatch(addCart(formInfo))
  };

  return (
    <div className="product">
      <div>
        <Toaster />
      </div>

      {productsList.length > 0 && (
        <>
        {firstRender()}
          <div className="product_detail">
            <ProductDetail
              productActive={productActive}
              quantity={quantity}
              onDecreaseClick={handleDecreaseClick}
              onIncreaseClick={handleIncreaseClick}
              onAddCartClick={handleAddCartClick}
            />
          </div>

          <div className="product_list">
            <ProductList
              productsList={productsList}
              onProductClick={handleProductClick}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
