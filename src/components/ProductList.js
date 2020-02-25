import React, { Component } from 'react';
import {connect} from 'react-redux';
import Product from './Product';
import Title from './functionalComponents/Title'
import {ProductConsumer} from '../context/context'
import {Link} from 'react-router-dom';
import Loading from './loader/Loading'
import {getProducts,setLoading} from '../actions/fetchActions'

class ProductList extends Component {
    componentDidMount(){
        // this.props.setLoading();
        //  this.props.getProducts();
    }
    render() {
        if(this.props.loading){
            return <Loading loading={this.props.loading}/>
        }
        else{
            return (<React.Fragment>
                        <div className="py-5">
                            <div className="container">
                                <Title name="our" title="products"></Title>
                                <div className="row">
                                    {(this.props.fetchData.map( (product =>{
                                            return <Product key={product.id} product={product}/>
                                        })))
                        }
                                </div>
                            </div>
                        </div>
                    </React.Fragment>)
        }
    }
}

const mapStateToProps = state =>({
    loading: state.fetchData.loading,
    fetchData: state.fetchData.products
})
export default connect(mapStateToProps,{getProducts,setLoading})(ProductList);