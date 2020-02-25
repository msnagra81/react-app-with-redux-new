import React, { Component } from 'react';
import Title from './functionalComponents/Title'
import {addProduct} from '../actions/postProductActions'

// var fileName='';

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        selectedFile: null,
        fileName: ''
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        var title = event.target.modelName.value;
        var company = event.target.mfg.value;
        var price = event.target.price.value;
        var info = event.target.info.value;
        // console.log(event.target.files[0])
       console.log(title, company, price, info);
        addProduct(title,company,price,info, this.state.selectedFile);
        window.location.reload();
    }
    onChange=(e)=>{
        this.setState({
            selectedFile: e.target.files[0],
            fileName: e.target.files[0].name
        })
        // let reader = new FileReader();
        // reader.readAsDataURL(this.state.selectedFile)

        // reader.onload = e =>{
            
        // }
    }
    render() {
        console.log(process.env.REACT_APP_API_BASE_URL)
        return (
            <div className="container">
                <Title name="Add" title="product"></Title>
                <form className="m" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <div  className=" form-group col-sm required">
                    <label htmlFor="modelName" className="control-label">Model Name</label>
                    <input className="form-control" name="modelName" id="modelName" placeholder="Google Pixel - Black" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <div  className="col-sm">
                        <label htmlFor="Mfg" className="">Manufacturer</label>
                        <input className="form-control" name="mfg" id="Mfg" placeholder="Google" required/>
                    </div>
                    <div  className="col-xs-8">
                        <label htmlFor="price" className="">Price</label>
                        <input className="form-control" name="price" id="price" placeholder="50" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <div  className="col-sm">
                        <label htmlFor="details" className="">Product Details</label>
                        <input className="form-control input-group-lg" name="info" id="details" placeholder="" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="input-group col-sm">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01" onChange={this.onChange}/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">{this.state.fileName}</label>
                        </div>
                    </div>
                     </div>
                    <div className="form-group row pt-4">
                        <div className="col-sm-1">
                        <button type="submit" className="btn btn-primary ">Submit</button>
                        </div>
                        <div className="col-sm-1">
                        <button type="button" className="btn btn-warning">Cancel</button>
                        </div>
                    </div>    
               
                </form>
                
            </div>
        );
    }
}

export default AddProduct;