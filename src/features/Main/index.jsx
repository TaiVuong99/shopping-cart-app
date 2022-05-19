import "features/Main/style.scss";
import React, { useEffect, useState } from "react";
import { Toaster, toast, LoaderIcon } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFetch } from "Redux/productSlice";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { v4 as uuid } from "uuid";
import { postCart } from "Redux/cartSlice";

function Products() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  const isLoading = useSelector((state) => state.products.isLoading);

  // console.log(pro)
  const [productActive, setProductActive] = useState({
    productId: 1,
    description: "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
    imageUrl: "https://res.cloudinary.com/dyotzt92h/image/upload/v1632673370/Fsoft-academy/favpng_vitamin-c-vitamin-e-serum-skin_s1igc2.png",
    price: 23.99,
    productName: "True Skin Vitamin C",
  });

  // const [productActive, setProductActive] = useState(productsList[0]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProductsFetch());

    // setProductActive(productsList[0])
  }, []);

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
    // const uid = uuid()
    // console.log(uid)
    // const uid = uuid().substring(0, 13)

    const formAdd = {
      pay: false,
      productsInCart: [{...formInfo}],
    }
    // console.log(uid)
    // console.log(formInfo);
    // console.log(uuid());

    dispatch(postCart(formAdd))
  };

  return (
    <div className="product">
      <div>
        <Toaster />
      </div>

      {!isLoading && (
        <>
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
