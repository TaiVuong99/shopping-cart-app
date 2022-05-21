import "features/Main/components/ProductList/style.scss";
import PropTypes from "prop-types";
import React from "react";

ProductList.propTypes = {
  productsList: PropTypes.array,
  onProductClick: PropTypes.func,
};

ProductList.defaultProps = {
  productsList: [],
  onProductClick: null,
};

function ProductList(props) {
  const { productsList, onProductClick } = props;

  const handleClick = (product) => {
    if (onProductClick) onProductClick(product);
  };

  return (
    <ul className="list_group">
      {productsList.map((product, index) => (
        <li className="list_item" key={index}>
          <div
            className="list_item__img"
            style={{ backgroundImage: `url(${product.imageUrl})` }}
          ></div>

          <div className="list_item__content">
            <div className="list_item__content__top">
              <div
                className="list_item__content__top__title"
                onClick={() => handleClick(product)}
              >
                {product.productName}
              </div>
              <div className="list_item__content__top__body">
                {product.description}
              </div>
            </div>

            <div className="list_item__content__bot">
              <div className="list_item__content__bot__price">
                ${product.price}
              </div>
              <button
                className="list_item__content__bot__details"
                onClick={() => handleClick(product)}
              >
                Details
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
