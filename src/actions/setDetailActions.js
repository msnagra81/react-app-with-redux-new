import {SET_DETAILS} from './types'

export const setDetails = (product) =>{
    return {
        type: SET_DETAILS,
        payload: product
    }
}

const getItem= (products,id) =>{
    return products.find(item => item.id===id);
}