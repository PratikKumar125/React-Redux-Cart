import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../components/Product.css"
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../Actions/ProductActions'
import SingleProduct from './SingleProduct'
const Products = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.products)
  const [prods, setprods] = useState([])
  console.log(cartState.products);
  const getData = async () => {
    const d = await axios.get("https://fakestoreapi.com/products")
    setprods(d.data)
    dispatch(setProducts(d.data))
  }
  useEffect(() => {
    getData()
  }, [])
  // console.log(prods);
  return (
    <div>
      <h2>WELCOME</h2>
      <div className="MAIN__CARD">
        {
          prods.map((curr) => {
            return <>
              <SingleProduct p={curr} className="MAIN__CARD" />
            </>
          })
        }
      </div>
    </div>
  )
}

export default Products