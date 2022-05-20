import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "features/Checkout/style.scss";
import CartList from "./components/CartList";

function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  return (
    <div className="checkout__container">
      <div className="checkout__title">my shopping cart</div>

      <div className="checkout__content">
        <div className="checkout__content__list">
          <CartList cart={cart} />
        </div>

        <div className="checkout__content__info">
            <div className="checkout__content__info__price">
                <div className="checkout__content__info__price__title">Order Info</div>

                <div className="checkout__content__info__price__fee">
                    <div className="checkout__content__info__price__fee__sub">
                        <div className="checkout__content__info__price__fee__t">Subtotal:</div>
                        <div className="checkout__content__info__price__fee__n">$</div>
                    </div>

                    <div className="checkout__content__info__price__fee__sub">
                    <div className="checkout__content__info__price__fee__t">Shipping Cost:</div>
                        <div className="checkout__content__info__price__fee__n">$</div>
                    </div>
                </div>

                <div className="checkout__content__info__price__total">
                    <div className="checkout__content__info__price__total__t">Total:</div>
                    <div className="checkout__content__info__price__total__n">$</div>
                </div>
            </div>

            <button className="checkout__content__info__done">Checkout</button>

            <button className="checkout__content__info__back">Continue shopping</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
