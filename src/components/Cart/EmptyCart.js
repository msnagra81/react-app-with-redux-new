import React, { Component } from 'react';

class EmptyCart extends Component {
    render() {
        return (
            <div className="container mt-5 text-center">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1 className="text-capitalize">your cart is currently empty</h1>
                    </div>    
                </div>   
            </div>
        );
    }
}

export default EmptyCart;