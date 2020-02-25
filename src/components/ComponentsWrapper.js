import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProducts,setLoading} from '../actions/fetchActions'

class ComponentsWrapper extends Component {
    componentDidMount(){
        this.props.getProducts()
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
const mapStateToProps = state =>({
    state: state
})
export default  connect(mapStateToProps,{getProducts,setLoading})(ComponentsWrapper);