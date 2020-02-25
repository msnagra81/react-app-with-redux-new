import {UPDATE_PRODUCT,DELETE_PRODUCT, GET_PRODUCTS} from './types';
import { getProducts } from './fetchActions';
const axios = require('axios');

export const deleteProduct = (id)=>dispatch=>{
    console.log('inside Delete Product method')

    axios({
        method: 'post',
        url: 'http://localhost:3001/deleteProduct',
        data:{
            prodId: id
        }
    })
    .then(axios.get('http://localhost:3001/Products'))
    .then(res=>dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    }))
}