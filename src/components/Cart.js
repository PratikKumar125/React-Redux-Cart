import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartProduct from './CartProduct'
const Cart = () => {
    const cartState = useSelector((state) => state.cart)
  return (
    <div>
        <h2>WELCOME TO YOUR CART</h2>
        <div className="cartItems">
            {
               cartState.products.map((curr) => {
                return <>
                    <CartProduct p = {curr}/>
                </>
               }) 
            }
        </div>
    </div>
  )
}

export default Cart