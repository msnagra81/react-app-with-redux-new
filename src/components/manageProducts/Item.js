import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteProduct} from '../../actions/ManageProductActions'
import { deleteConfirmation, confirmOnDelete } from '../common/Alerts';
import { store } from 'react-notifications-component';
// import { confirmOnDelete } from "../common/Alerts";

class Item extends Component {
    render() {
        const {id, img, title, price, total, count} = this.props.product;
        // const{decrementQty, incrementQty, removeItem} = this.props;
        // const {product, cartItems} = this.props;
        
        const handleDelete =async function(){
            if(await confirmOnDelete()){
                store.addNotification({
                    title: "Deleted Successfully",
                    message: " ",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    // animationIn: ["animated", "fadeIn"],
                    // animationOut: ["animated", "fadeOut"],
                    dismiss: {
                      duration: 2000,
                      onScreen: true
                    }
                  });
                // deleteAction();
                // window.location.reload();
            }
            // deleteConfirmation(this.props.deleteProduct,id);      
        }
        const deleteAction=()=>{
            this.props.deleteProduct(id);
        }
        
        return (
            <div className="row my-1 text-capitalize text-center pt-0 border">
            <div className="col-10 mx-auto col-lg-2">
                <img style={{width:"5rem",height: "5rem"}} className="img-fluid" src={img} alt="product image"/>
            </div>
            <div className="col-10 mx-auto col-lg-2 pt-4" >
                <span className="d-lg-none">Product : </span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2 pt-4">
                <span className="d-lg-none">price : </span>${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 pt-4" onClick="">
            <div className="row"> 
                <div className="col-15">
                <span className="cart-icon text-info"><i class="far fa-edit"></i></span>
                </div>
                <div className="col-15 ml-4" onClick={()=>{handleDelete()}}>
                <span className="cart-icon text-danger"><i class="fas fa-trash-alt"></i></span>
                </div>
            </div>    
            </div>
        </div>  
        );
    }
}
const mapStateToProps=state=>({
    deleteProduct: state.deleteProduct
})

export default connect(mapStateToProps,{deleteProduct})  (Item);