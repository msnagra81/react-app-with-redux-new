const axios = require('axios');

const fetchProductsFromDb = (state)=>{
    axios.get('http://172.25.177.97:3001/Products')
            .then(res => res.data)
            .then(data => data)
            .then(data => console.log(data))
            .catch(error => { console.log('erro', error);})
    }

export {fetchProductsFromDb}