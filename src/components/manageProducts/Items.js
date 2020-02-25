import React, { Component } from 'react';
import Item from './Item';
import {getProducts,setLoading} from '../../actions/fetchActions'
import { connect } from 'react-redux';

class Items extends Component {
    render() {
        return (
            <div>
                {this.props.fetchData.map((product)=>{
                    return <Item key={product.id} product={product}/>
                })}
            </div>
        );
    }
}

const mapStateToProps = state =>({
    loading: state.fetchData.loading,
    fetchData: state.fetchData.products
})
export default connect(mapStateToProps,{getProducts,setLoading})(Items);