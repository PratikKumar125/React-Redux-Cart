import React from 'react'
import "../components/Product.css"
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../Actions/ProductActions'
const SingleProduct = ({p}) => {
    const cartState = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    // console.log(cartState);
    const addToCart = () => {
        // console.log({p});
        const cart_item = {p : {...p, quantity : 1}}
        // dispatch(addCart({p}))
        dispatch(addCart(cart_item))
        console.log(cartState);
    }
  return (
    <div>
        <div className="single__card">
          <div className="image_hai">
          <img src={p.image} alt=""/>
          </div>
          <h4>{p.title.slice(0, 38)}</h4>
          {/* <p>{p.description.slice(0, 335)}...</p> */}
          <div className="flex_kardo">
          <h3>${p.price}</h3>
          </div>
          <button className='PRODBUTTON' onClick={addToCart}>ADD CART</button>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
    </div>
  )
}
export default SingleProduct