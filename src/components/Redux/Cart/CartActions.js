import { SET_CART } from "./CartTypes";
export const setCart = ( cart ) => {
    return {
        type: SET_CART,
        payload: cart
    }
}