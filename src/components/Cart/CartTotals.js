import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PaypalButton from '../PaypalButton'
import { connect } from 'react-redux';
import {getProducts} from '../../actions/fetchActions'

class CartTotals extends Component {
    render(){
    const {cartSubtotal, cartTax, cartTotal, clearCart} = this.props.value;
    const {setInitialState} = this.props;
    return (
       <React.Fragment>
           <div className="container">
               <div className="row">
                   <div className="col-10 mt-2 ml-5 ml-md-auto col-sm-8 text-right">
                       <Link to="/">
                           <button onClick={()=>setInitialState()} className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
                               Clear Cart Totals
                           </button>
                       </Link>
                       <h5>
                           <span className="text-title">SubTotal : </span>
                           <strong>$ {cartSubtotal}</strong>
                       </h5>
                       <h5>
                           <span className="text-title">tax : </span>
                           <strong>$ {cartTax}</strong>
                       </h5>
                       <h5>
                           <span className="text-title">total : </span>
                           <strong>$ {cartTotal}</strong>
                       </h5>
                       <PaypalButton total={cartTotal} clearCart = {clearCart} history={this.props.history}/>
                   </div>
               </div>
           </div>
        
       </React.Fragment>
    );
}
}
const mapDispatchToProps = dispatch =>{
    return {
        setInitialState: () =>dispatch(getProducts())
    }
}

export default connect(null,mapDispatchToProps)(CartTotals);