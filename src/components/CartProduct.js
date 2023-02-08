import React from 'react'
import "../components/CART.css"
import { useSelector, useDispatch } from 'react-redux'
import { cartItemQunatityIncrease, cartItemQunatityDecrease, removeCartItem } from '../Actions/ProductActions'
const CartProduct = ({p}) => {
    // const cartState = useSelector((state) => state.cart)
    const dispatch = useDispatch();
  return (
    <div>
        <div className="CART_PRODUCT">
          <img src={p.image} alt=""/>
          <h4>{p.title}</h4>
          <p>{p.description}</p>
          <h3>${p.price}</h3>
          <div className="inc_dec">
            <button onClick={() => dispatch(cartItemQunatityIncrease(p.id))}>+</button>
            <span>{p.quantity}</span>
            <button onClick={() => dispatch(cartItemQunatityDecrease(p.id))}>-</button>
          </div>
          <button className = "REMOVEBUTTON" onClick={() => dispatch(removeCartItem(p.id))}>Remove</button>
        </div>
    </div>
  )
}
export default CartProduct