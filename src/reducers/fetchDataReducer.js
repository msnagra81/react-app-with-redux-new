import {GET_PRODUCTS,LOADING,SET_DETAILS, ADD_TO_CART,INCREMENT_QTY,REMOVE_ITEM, DECREMENT_QTY} from '../actions/types'

const initialState = {
            products: [],
            detailProduct: {},
            cart:[],
            modalOpen: false,
            modalProduct: {},
            cartSubtotal: 0,
            cartTax: 0,
            cartTotal: 0,
            loading: true
}

export default function(state= initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                cart:[],
                cartSubtotal: 0,
                cartTax: 0,
                cartTotal: 0,
                cartTotal: 0,
                products : action.payload,
                loading: false
            }
        case LOADING:
                return {
                    ...state,
                    loading: true
                }
        case SET_DETAILS:
            return {
                ...state,
                detailProduct: action.payload,
                loading: false
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload
            } 
        case INCREMENT_QTY:
            return {
                ...state,
                cart: action.payload
            }
        case DECREMENT_QTY:
            return {
                ...state,
                cart: action.payload
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cart: action.payload
            }                             
        default: 
            return initialState;    
    }
}