import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import "features/Checkout/components/CartList/style.scss";

CartList.propTypes = {
  cart: PropTypes.array,
  onDecreaseClick: PropTypes.func,
  onIncreaseClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

CartList.defaultProps = {
  cart: [],
  onDecreaseClick: null,
  onIncreaseClick: null,
  onDeleteClick: null,
};

function CartList(props) {
  const { cart, onDecreaseClick, onIncreaseClick, onDeleteClick } = props;

  const handleDecrease = (product) => {
    if (onDecreaseClick) onDecreaseClick(product);
  };

  const handleIncrease = (product) => {
    if (onIncreaseClick) onIncreaseClick(product);
  };

  const handleDelete = (product) => {
    if (onDeleteClick) onDeleteClick(product);
  };

  return (
    <ul className="cart_list">
      {cart.map((product, index) => (
        <li className="cart_item" key={index}>
          <div
            className="cart_item__img"
            style={{ backgroundImage: `url(${product.imageUrl})` }}
          ></div>

          <div className="cart_item__content">
            <div className="cart_item__content__top">
              <div className="cart_item__content__top__header">
                <div
                  className="cart_item__content__top__title"
                >
                  {product.productName}
                </div>

                <FontAwesomeIcon
                  icon={faTrashCan}
                  size="sm"
                  fixedWidth
                  className="cart_item__content__top__del"
                  onClick={() => handleDelete(product)}
                />
              </div>

              <div className="cart_item__content__top__body">
                {product.description}
              </div>
            </div>

            <div className="cart_item__content__bot">
              <div className="cart_item__content__bot__list">
                <FontAwesomeIcon
                  icon={faMinus}
                  size="sm"
                  fixedWidth
                  className="cart_item__content__bot__button"
                  onClick={() => handleDecrease(product)}
                />

                <div className="cart_item__content__bot__quantity">
                  {product.quantity}
                </div>

                <FontAwesomeIcon
                  icon={faPlus}
                  size="sm"
                  fixedWidth
                  className="cart_item__content__bot__button"
                  style={{
                    pointerEvents: product.quantity === 99 ? "none" : "",
                    opacity: product.quantity === 99 ? ".2" : "",
                  }}
                  onClick={() => handleIncrease(product)}
                />
              </div>

              <div className="cart_item__content__bot__price">
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
