import React from 'react';

const CartItem = (props) => {
  console.log("In item", props)
  let { item, onUpdateCartQty, onEmptyCart, onRemoveFromCart } = props

  const handleUpdateCartQty = (lineItemId, quantity) => {
    onUpdateCartQty(lineItemId, quantity);
  }

  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  }

  return (
    <div className="cart-item">
      <img className="cart-item image" src={item.image.url} alt={item.name} />
      <div className="cart-item details">
        <h4 className="cart-item details-name">{item.name}</h4>
        <div className="cart-item details-qty">
        <button type="button" style={{color: "white"}} onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
          <p>{item.quantity}</p>
        <button type="button" style={{color: "white"}} onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
        </div>
        <div className="cart-item details-price">{item.line_total.formatted_with_symbol}</div>
      </div>
      <button
        type="button"
        className="rn-button btn-white"
        style={{display: "flex", justifyContent: "center", padding: "0px 30px"}}
        onClick={handleRemoveFromCart}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
