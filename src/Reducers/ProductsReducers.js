const initialState = {products : []}
export default (state = initialState, action) => {
    switch (action.type) {
        case "SETPRODUCTS":
            return {...state, products : action.payload}
            break;
        default:
            return state;
    }
}