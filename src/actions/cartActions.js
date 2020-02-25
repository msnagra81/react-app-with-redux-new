import {ADD_TO_CART,INCREMENT_QTY, DECREMENT_QTY,REMOVE_ITEM} from './types'

export const addItemToCart =(cart,product)=> dispatch =>{
    product.inCart= true;
    product.count = 1;
    product.total = product.price;
    dispatch({
        type: ADD_TO_CART,
        payload: [...cart,product]
    })
}

export const incrementQty = (cart,product) => dispatch =>{
    console.log('Incremented quantity');
    const tempCart = [...cart];
   
    const cartItem = tempCart[tempCart.indexOf(product)];
    cartItem.count = cartItem.count+1;
    cartItem.total = cartItem.price*(cartItem.count);
    dispatch({
        type: INCREMENT_QTY,
        payload: tempCart
    })
    // ,()=>this.addTotals())
}
export const decrementQty = (cart,product) => dispatch =>{
    console.log('decremented quantity');
    const tempCart = [...cart];
    const cartItem = tempCart[tempCart.indexOf(product)];
    cartItem.count = cartItem.count-1;
    if(cartItem.count === 0){
        console.log('Inside the if condition')
        console.log('item removed');
        // const tempCart = [...cart];
        product.count = 0;
        product.inCart = false;
        tempCart.splice(tempCart.indexOf(product,1));
        dispatch({
                type: REMOVE_ITEM,
                payload: tempCart
    })
    }
    else {
        cartItem.total = cartItem.price*(cartItem.count);
        dispatch({
            type: DECREMENT_QTY,
            payload: tempCart
        })
        // ,()=>this.addTotals()) 
    }
}
export const removeItem = (cart,product) => dispatch=>{
    console.log('item removed');
    const tempCart = [...cart];
    product.count = 0;
    product.inCart = false;
    tempCart.splice(tempCart.indexOf(product,1));
    dispatch({
            type: REMOVE_ITEM,
            payload: tempCart
    })
    // ,()=>this.addTotals())               
    
}
// clearCart = () =>{
//     console.log('cart cleared')
//     this.setProducts();
//     this.setState(()=>{
//         return {cart:[]}
//     })
// }
// addTotals = ()=>{
//     let subTotal=0;
//     this.state.cart.map(item =>subTotal += item.total);
//     const tempTax = subTotal*0.1;
//     const tax = parseFloat(tempTax.toFixed(2));
//     const cartTotal= subTotal+tax;
//     this.setState(()=>{
//        return {cartSubtotal: subTotal,
//         cartTax: tax,
//         cartTotal: cartTotal};
//     })
// }