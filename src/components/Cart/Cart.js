import React, { Component } from 'react';
import {ProductConsumer} from '../../context/context';
import Title from '../functionalComponents/Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'
import { connect } from 'react-redux';

class Cart extends Component {
    render() {
                const cart = this.props.cart;
                if(cart.length >0){
                    return (
                        <React.Fragment>
                            <Title name="Cart" title="items"/>
                            <CartColumns/>
                            <CartList value={cart}/>
                            <CartTotals value={cart} history={this.props.history}/>
                        </React.Fragment>
                    )   
            }
            else{
                return(
                    <React.Fragment>
                            <EmptyCart/>
                    </React.Fragment>
                )
            } 
        } 
    }

    const mapStateToProps = state =>({
        cart: state.fetchData.cart
    })
export default connect(mapStateToProps)(Cart);