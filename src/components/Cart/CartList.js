import React, { Component } from 'react';
import {ProductConsumer} from '../../context/context'
import CartItem from './CartItem';

class CartList extends Component {
    render() {
        const cart = this.props.value;
        return (
            <div className="container-fluid">
                {cart.map(item =>{
                    return <CartItem key={item.id} product={item} value={this.props.value}/>
                    }
                )}
            </div>
        );
    }
}

export default CartList;