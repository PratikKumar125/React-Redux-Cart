import { combineReducers } from "redux";
import ProductsReducers from "./ProductsReducers";
import CartReducers from "./CartReducers";
const SingleReducer = combineReducers({
    products : ProductsReducers,
    cart : CartReducers
});

export default SingleReducer