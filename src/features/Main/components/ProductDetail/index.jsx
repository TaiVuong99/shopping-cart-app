import "features/Main/components/ProductDetail/style.scss";
import PropTypes from "prop-types";
import React from "react";

import {
  faPlus,
  faMinus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

ProductDetail.propTypes = {
  productActive: PropTypes.object,
  quantity: PropTypes.number,
  onDecreaseClick: PropTypes.func,
  onIncreaseClick: PropTypes.func,
  onAddCartClick: PropTypes.func,
};

ProductDetail.defaultProps = {
  productActive: {},
  quantity: null,
  onDecreaseClick: null,
  onIncreaseClick: null,
  onAddCartClick: null,
};

function ProductDetail(props) {
  const {
    productActive,
    quantity,
    onDecreaseClick,
    onIncreaseClick,
    onAddCartClick,
  } = props;

  // console.log(Object.keys(productActive).length === 0)
  const handleAddCartClick = () => {
    const formInfo = {
      ...productActive,
      quantity,
    };

    if (onAddCartClick) onAddCartClick(formInfo);
  };

  return (
    <>
      <div
        className="detail__img"
        style={{ backgroundImage: `url(${productActive.imageUrl})` }}
      ></div>

      <div className="detail__content">
        <div className="detail__content__top">
          <div className="detail__content__top__title">
            {productActive.productName}
          </div>
          <div className="detail__content__top__body">
            {productActive.description}
          </div>
        </div>

        <div className="detail__content__bot">
          <div className="detail__content__bot__left">
            <FontAwesomeIcon
              icon={faMinus}
              size="lg"
              fixedWidth
              className="detail__content__bot__left__button"
              style={{
                pointerEvents: quantity === 1 ? "none" : "",
                opacity: quantity === 1 ? ".2" : "",
              }}
              onClick={() => onDecreaseClick()}
            />

            <div className="detail__content__bot__left__quantity">
              {quantity}
            </div>

            <FontAwesomeIcon
              icon={faPlus}
              size="lg"
              fixedWidth
              className="detail__content__bot__left__button"
              style={{
                pointerEvents: quantity === 99 ? "none" : "",
                opacity: quantity === 99 ? ".2" : "",
              }}
              onClick={() => onIncreaseClick()}
            />
          </div>

          <div className="detail__content__bot__right">
            <div className="detail__content__bot__right__price">
              ${(productActive.price * quantity).toFixed(2)}
            </div>

            <button
              className="detail__content__bot__right__add"
              onClick={handleAddCartClick}
            >
              <FontAwesomeIcon icon={faCartShopping} size="lg" fixedWidth /> Add
              to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
