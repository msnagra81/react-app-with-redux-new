import {ADD_PRODUCT} from './types'
import axios from 'axios';

const addProduct =(title,company,price,info, selecedFile)=>{
    var fileName = selecedFile !== null ? ('img/'+selecedFile.name) : '';
    axios({
        method: 'post',
        url: 'http://localhost:3001/api/addProduct',
        data: {
            modelName: title,
            price: price,
            company: company,
            info: info,
            fileName: fileName
        }
      });

    const formData = new FormData();

    formData.append('file',selecedFile);

    try{
        axios.post('http://localhost:3001/uploadImage', formData,{
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        }).then(res =>console.log(res))
    }
    catch(e)
    {
        console.log(e);
    }
}
export {addProduct}