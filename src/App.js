import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';
import {Provider} from 'react-redux';
import store from './store/store'
import ComponentsWrapper from './components/ComponentsWrapper';
import AddProduct from './components/AddProduct';
import EditDeleteProduct from './components/manageProducts/EditDeleteProduct';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Login from './components/authentication/Login';
require('dotenv').config();



function App() {
  return (
    <Provider store={store}>
      <ReactNotification />
      <ComponentsWrapper/>
      {renderApp}
      <Modal />
    </Provider>
  );
}

const appHome = 
<div>
  <Navbar/>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
      <Route exact path="/AddProduct" component={AddProduct}></Route>
        <Route exact path="/" component={ProductList}></Route>
        <Route exact path="/details" component={Details}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/manageProducts" component={EditDeleteProduct}></Route>
        <Route exact component={Default}></Route>
      </Switch>
      </div>

const renderApp = store.getState().auth.authenticated? appHome: <Login/>;



export default App;
