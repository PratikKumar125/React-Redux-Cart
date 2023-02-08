export const setProducts = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SETPRODUCTS", 
            payload: data
        })
    }
}

export const addCart = (data) => {
    return (dispatch) => {
        dispatch({
            type : "ADDTOCART",
            payload : data
        })
    }
}

export const cartItemQunatityIncrease = (data) => {
    return (dispatch) => {
        dispatch({
            type : "QUANTITY_INCREASE",
            payload : data
        })
    }
}

export const cartItemQunatityDecrease = (data) => {
    return (dispatch) => {
        dispatch({
            type : "QUANTITY_DECREASE",
            payload : data
        })
    }
}

export const removeCartItem = (data) => {
    return (dispatch) => {
        dispatch({
            type : "REMOVE_CART_ITEM",
            payload : data
        })
    }
}
