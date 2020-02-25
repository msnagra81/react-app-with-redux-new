 import React, { Component } from 'react';
import {detailProduct} from '../data'
// import {fetchProductsFromDb} from '../db/fetchProducts'
const ProductContext= React.createContext();
const axios = require('axios');
//This will give following components 
//Provider
//Consumer
let storeProducts = []

class ProductProvider extends Component {
    constructor(props){
        super(props) 
        this.state={
            apiData:[],
            products: [],
            detailProduct: {},
            cart:[],
            modalOpen: false,
            modalProduct: detailProduct,
            cartSubtotal: 0,
            cartTax: 0,
            cartTotal: 0
        }
    }
    componentDidMount(){ 
        // this.fetchProductsFromDb();
         
        console.log(this.state.apiData)
        this.setProducts();
    }

    setProducts = ()=>{
        let tempProducts=[];
        storeProducts.forEach(item =>{
            const singleItem={...item}
            tempProducts = [...tempProducts,singleItem]
        });
        this.setState(()=>{
            return {products: tempProducts}
        });
    }
    fetchProductsFromDb = ()=>{
        fetch('http://172.25.177.97:3001/Products')
                .then(res => res.json())
                .then(data => this.setState({apiData: data}))
                .catch(error => { console.log('erro', error);})        
        }
    getItem= (id) =>{
        return this.state.products.find(item => item.id===id);
    }
    handleDetail=(id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct: product}
        })
    }
    addToCart = (id)=>{
        let tempProducts = [...this.state.products]
        const product = tempProducts[tempProducts.indexOf(this.getItem(id))];
        console.log(product)
        product.inCart= true;
        product.count = 1;
        product.total = product.price;
        this.setState(()=>{
            return {products: tempProducts,cart: [...this.state.cart,product]}
        },()=>this.addTotals())
    }
    openModal = (id)=>{
        const product = this.getItem(id);
         this.setState(()=>{
             return {modalProduct: product, modalOpen: true}
         })
    }
    closeModal = ()=>{
        this.setState(()=>{
            return {modalOpen: false}
        })
    }
    incrementQty = (id) => {
        console.log('Incremented quantity');
        const tempCart = [...this.state.cart];
        const cartItem = tempCart[tempCart.indexOf(this.getItem(id))];
        cartItem.count = cartItem.count+1;
        cartItem.total = cartItem.price*(cartItem.count);
        this.setState(()=>{
            return {cart: tempCart }
        },()=>this.addTotals())
    }
    decrementQty = (id) =>{
        console.log('decremented quantity');
        const tempCart = [...this.state.cart];
        const cartItem = tempCart[tempCart.indexOf(this.getItem(id))];
        cartItem.count = cartItem.count-1;
        if(cartItem.count === 0){
            this.removeItem(id);
        }
        else {
            cartItem.total = cartItem.price*(cartItem.count);
            this.setState(()=>{
                return {cart: tempCart}
            },()=>this.addTotals()) 
        }
    }
    removeItem = (id) =>{
        console.log('item removed');
        const tempCart = [...this.state.cart];
        const tempProducts = [...this.state.products];
        const tempProd = tempProducts[tempProducts.indexOf(this.getItem(id))];
        tempProd.count = 0;
        tempProd.inCart = false;
        tempCart.splice(tempCart.indexOf(this.getItem(id)),1);
        this.setState(()=>{
            return {cart: tempCart, products: tempProducts }
        },()=>this.addTotals())               
        
    }
    clearCart = () =>{
        console.log('cart cleared')
        this.setProducts();
        this.setState(()=>{
            return {cart:[]}
        })
    }
    addTotals = ()=>{
        let subTotal=0;
        this.state.cart.map(item =>subTotal += item.total);
        const tempTax = subTotal*0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const cartTotal= subTotal+tax;
        this.setState(()=>{
           return {cartSubtotal: subTotal,
            cartTax: tax,
            cartTotal: cartTotal};
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                incrementQty: this.incrementQty,
                decrementQty: this.decrementQty,
                removeItem: this.removeItem,
                clearCart: this.clearCart   
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer= ProductContext.Consumer;

export {ProductProvider,ProductConsumer};