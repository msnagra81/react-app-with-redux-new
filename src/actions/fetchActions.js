import {GET_PRODUCTS,LOADING} from './types';
import axios from 'axios'

const getProducts = () => dispatch=>{
    axios.get('http://localhost:3001/Products')
            .then(res => res.data)
            .then(data => dispatch({
                type: GET_PRODUCTS,
                payload: data
            }))
    .catch(err =>console.log(err));
}
const setLoading = ()=>{
    return {
        type: LOADING
    }
}
export {getProducts,setLoading}