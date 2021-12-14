import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = ({ items, subTotal, iva, total, currency, removeFromCart }) => {
  return (
    <div>
      <h3>Shopping Cart</h3>

      <div className="cart">
        <div className="panel panel-default">
          <div className="panel-body">
            {items.length > 0 && (
              <div className="cart__body">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onClick={() => removeFromCart(item.id)}
                  />
                ))}
              </div>
            )}
            {items.length === 0 && (
              <div className="alert alert-info">Cart is empty</div>
            )}
            <div className="cart__total">
              SubTotal: {(subTotal * 1).toFixed(4)} {currency}
            </div>
            <div className="cart__total">
              IVA: {(iva * 1).toFixed(4)} {currency}
            </div>
            <div className="cart__total">
              Total: {(total * 1).toFixed(4)} {currency}
            </div>
            <Link to="/compra" > Comprar </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  currency: PropTypes.string,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
