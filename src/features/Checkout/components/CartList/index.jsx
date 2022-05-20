import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

CartList.propTypes = {
  cart: PropTypes.array,
};

CartList.defaultProps = {
  cart: [],
};

function CartList(props) {
  const { cart, onProductClick } = props;

  const handleClick = (product) => {
    if (onProductClick) onProductClick(product);
  };

  return (
    <ul className="list_group">
      {cart.map((product, index) => (
        <li className="list_item" key={index}>
          <div
            className="list_item__img"
            style={{ backgroundImage: `url(${product.imageUrl})` }}
          ></div>

          <div className="list_item__content">
            <div className="list_item__content__top">
              <div
                className="list_item__content__top__title"
                onClick={() =>{}}
              >
                {product.productName}
              </div>

              <div className="list_item__content__top__body">
                {product.description}
              </div>
            </div>

            <div className="list_item__content__bot">
                <div className="detail__content__bot__left__button">-</div>

              <div className="detail__content__bot__left__quantity">
                1
              </div>

              <div className="detail__content__bot__left__button">+</div>

              <div className="list_item__content__bot__price">
                ${product.price}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CartList;
