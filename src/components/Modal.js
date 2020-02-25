import React, { Component } from 'react';
import {ProductConsumer} from '../context/context';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Modal extends Component {
    render() {
        const value = this.props.value;
        return (
            <div>
                {value =>{
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if(modalOpen){
                        return (<ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="rounded col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5 className="mt-2">item added to the cart</h5>
                                        <img className="img-fluid" src={img} alt="Product Image"/>
                                        <h5>{title}</h5> 
                                        <h5 className="text-muted">price : $ {price}</h5>
                                        <div className="mb-2">
                                        <Link to="/">
                                            <StyledButton onClick={()=>{closeModal()}}>continue shopping</StyledButton>
                                            </Link>
                                        <Link to="/cart">
                                            <StyledButton cart onClick={()=>{closeModal()}}>Go to cart</StyledButton>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>)
                    }
                    else{
                        return null;
                    }
                }}
            </div>
        );
    }
}
const mapStateToProps = state =>({
    value: state

})
export default connect(mapStateToProps)(Modal);

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom:0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal{
    background: var(--mainWhite);
}
`;