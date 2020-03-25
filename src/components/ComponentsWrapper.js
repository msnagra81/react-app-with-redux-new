import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProducts,setLoading} from '../actions/fetchActions'
import Login from './authentication/Login';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Details from './Details';
import Default from './Default';
import Cart from './Cart/Cart';
import {Switch, Route} from 'react-router-dom'
import store from '../store/store'
import AddProduct from './AddProduct';
import EditDeleteProduct from './manageProducts/EditDeleteProduct';
import { PrivateRoute } from './authentication/PrivateRoute';
import {loginToApp} from '../actions/authActions'
import Cookies from 'js-cookie';
import { LoginRoute } from './authentication/LoginRoute';

class ComponentsWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth: Cookies.get('name')==='newName'
   }
  }
    componentDidMount(){
      console.log('ComponentsWrapper - componentDidMount')
    }
    componentDidUpdate(prevProps){
      console.log('ComponentsWrapper - componentDidUpdate')
    }
    // shouldComponentUpdate(){
    //     return this.props.history.push("/AddProduct");
    // }
    render() {
      console.log('ComponentsWrapper - Render')
        return (
          <div>
          <Navbar auth={this.state.auth}/>
              <Switch>
                <LoginRoute exact path="/login" auth={!this.state.auth} component={Login}></LoginRoute>
                {/* <PrivateRoute path="/" auth={this.state.auth } component={Navbar}></PrivateRoute> */}
                <PrivateRoute exact path="/AddProduct" auth={this.state.auth} component={AddProduct}></PrivateRoute>
                <PrivateRoute exact path="/" auth={this.state.auth } component={ProductList}></PrivateRoute>
                <PrivateRoute exact path="/details" auth={this.state.auth } component={Details}></PrivateRoute>
                <PrivateRoute exact path="/cart" auth={this.state.auth } component={Cart}></PrivateRoute>
                <PrivateRoute exact path="/manageProducts" auth={this.state.auth } component={EditDeleteProduct}></PrivateRoute>
                <PrivateRoute exact auth={this.state.auth } component={Default}></PrivateRoute>
              </Switch>
              </div>
        );
    }
}

// const AppHome = 
// <div>
//   <Navbar/>
//       <Switch>
//         <Route exact path="/login" component={Login}></Route>
//       <Route exact path="/AddProduct" component={AddProduct}></Route>
//         <Route exact path="/" component={ProductList}></Route>
//         <Route exact path="/details" component={Details}></Route>
//         <Route exact path="/cart" component={Cart}></Route>
//         <Route exact path="/manageProducts" component={EditDeleteProduct}></Route>
//         <Route exact component={Default}></Route>
//       </Switch>
//       </div>

// const renderApp = store.getState().auth.authenticated? <AppHome/>: <Login/>;


const mapStateToProps = state =>({
    state: state.auth
})
export default  connect(mapStateToProps,{getProducts,setLoading,loginToApp})(ComponentsWrapper);