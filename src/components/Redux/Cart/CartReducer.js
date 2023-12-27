import { SET_CART } from "./CartTypes";
const intialState = {
    cart : []
}

const CartReducer = (state=intialState, action) => {
    switch( action.type ) {
        case SET_CART:
            return {
                ...state,
                cart : action.payload
            }
        default:
            return state
    }
}

export default CartReducer;