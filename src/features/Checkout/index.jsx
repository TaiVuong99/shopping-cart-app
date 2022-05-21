import "features/Checkout/style.scss";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCart, postCart, updateCart } from "Redux/cartSlice";
import CartList from "./components/CartList";

function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  let sub = 0,
    total = 0,
    ship = 0;

  cart.map((product) => {
    sub += product.price * product.quantity;
    ship = 10;
    total = sub + ship;
  });

  const handleDecreaseClick = (product) => {
    if (product.quantity === 1) {
      const confirm = window.confirm(
        "Do you want to remove product from cart ?"
      );
      if (confirm) {
        toast.success("Remove successfully!!");
        dispatch(deleteCart(product.productId));
      }
    } else {
      const newProduct = { ...product, quantity: product.quantity - 1 };
      dispatch(updateCart(newProduct));
    }
  };

  const handleIncreaseClick = (product) => {
    const newProduct = { ...product, quantity: product.quantity + 1 };
    dispatch(updateCart(newProduct));
  };

  const handleDeleteClick = (product) => {
    toast.success("Remove successfully!!");
    dispatch(deleteCart(product.productId));
  };

  const handleCheckoutClick = () => {
    const formOrder = {
      cart,
      sub,
      ship,
      total,
    };
    const confirm = window.confirm("Do you want to purchase ?");
    if (confirm) {
      dispatch(postCart(formOrder));

      const wait = setTimeout(() => {
        toast.success("Thank you for purchased !!");
        donePost(wait);
      }, [2000]);
    }
  };

  const donePost = (wait) => {
    clearTimeout(wait);
    const change = setTimeout(() => {
      changePage(change);
    }, 3000);
  };

  const changePage = (change) => {
    clearTimeout(change);
    navigate("/products");
  };

  return (
    <div className="checkout__container">
      <div>
        <Toaster position="top-center" />
      </div>
      <div className="checkout__title">my shopping cart</div>

      <div className="checkout__content">
        <div className="checkout__content__list">
          {cart.length > 0 ? (
            <CartList
              cart={cart}
              onDecreaseClick={handleDecreaseClick}
              onIncreaseClick={handleIncreaseClick}
              onDeleteClick={handleDeleteClick}
            />
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
                paddingTop: "2rem",
                fontSize: "1.25rem",
                fontWeight: "700",
              }}
            >
              You have no products in cart
            </div>
          )}
        </div>

        <div className="checkout__content__info">
          <div className="checkout__content__info__price">
            <div className="checkout__content__info__price__title">
              Order Info
            </div>

            <div className="checkout__content__info__price__fee">
              <div className="checkout__content__info__price__fee__sub">
                <div className="checkout__content__info__price__fee__t">
                  Subtotal:
                </div>
                <div className="checkout__content__info__price__fee__n">
                  ${sub.toFixed(2)}
                </div>
              </div>

              <div className="checkout__content__info__price__fee__sub">
                <div className="checkout__content__info__price__fee__t">
                  Shipping Cost:
                </div>
                <div className="checkout__content__info__price__fee__n">
                  ${ship}
                </div>
              </div>
            </div>

            <div className="checkout__content__info__price__total">
              <div className="checkout__content__info__price__total__t">
                Total:
              </div>
              <div className="checkout__content__info__price__total__n">
                ${total.toFixed(2)}
              </div>
            </div>
          </div>

          <button
            className="checkout__content__info__done"
            style={{
              opacity: cart.length === 0 ? ".5" : "",
              pointerEvents: cart.length === 0 ? "none" : "",
            }}
            onClick={handleCheckoutClick}
          >
            Checkout
          </button>

          <button
            className="checkout__content__info__back"
            onClick={() => navigate("/products")}
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
