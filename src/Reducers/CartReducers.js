const initialState = {products : []}
export default (state = initialState, action) => {
    switch (action.type) {
        case "ADDTOCART":
            const idx = state.products.findIndex(todo => todo.id === action.payload.p.id)
            if(idx !== -1){
                const newArray = [...state.products];
                newArray[idx].quantity += 1
                return { 
                ...state, 
                products: newArray, 
                }
            }
            console.log(idx);
            return {...state, products : [...state.products ,action.payload.p]}
            break;
        case "QUANTITY_INCREASE":
            const index = state.products.findIndex(todo => todo.id === action.payload)
            const newArray = [...state.products];
            newArray[index].quantity += 1
            return { 
            ...state, 
            products: newArray, 
            }
        case "QUANTITY_DECREASE":
                const ix = state.products.findIndex(todo => todo.id === action.payload)
                const newArr = [...state.products];
                if (newArr[ix].quantity === 1){
                    return state
                }
                newArr[ix].quantity -= 1
                return { 
                ...state, 
                products: newArr, 
                }
        case "REMOVE_CART_ITEM":
            const filteredTodos = state.products.filter(prod => prod.id !== action.payload)
            return { 
             ...state, 
             products: filteredTodos
            }
        default:
            return state;
    }
}