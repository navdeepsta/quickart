export const userCart = {
    saveToCart : ( updatedItem ) => {
        const cart = localStorage.getItem("cart");
        if(cart) {
            let result = JSON.parse(cart);
            result = result.cart.filter(item => item.uniq_id !== updatedItem.uniq_id);
            if( updatedItem.quantity > 0)
            result.push(updatedItem);
            localStorage.setItem("cart", JSON.stringify({"cart":result}));
        }else{
            localStorage.setItem("cart", JSON.stringify({"cart":[updatedItem]}));
        }
    },

    fetchCart : () => {
        const cart = localStorage.getItem("cart");
        const result = JSON.parse(cart);
        return result.cart;
    },

    removeFromCart : ( item ) => {
        const cart = userCart.fetchCart();
        const updatedCart = cart.filter(product=>product.uniq_id !== item.uniq_id)
        localStorage.setItem("cart", JSON.stringify({"cart":updatedCart}));
    }
}