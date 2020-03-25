import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Redirect, Link } from 'react-router-dom';
import useForceUpdate from 'use-force-update';
// import {loginToApp} from '../../actions/authActions'


export default function Login (props) {
    const [cookies, setCookie] = useCookies(['name']);
    const forceUpdate = useForceUpdate();
    
        const handleSubmit = (event)=>{
            event.preventDefault();
            var userName = event.target.userName.value;
            var password = event.target.password.value;
            console.log("Submitted login details");
            // props.loginToApp(userName,password);
            setCookie('name', "newName", { path: '/' });
            props.history.push('/');    
            window.location.reload();
            // console.log(props.history)
        }
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center mb-5">Sign In</h5>
                                    <form className="form-signin" onSubmit={handleSubmit}>
                                        <div className="form-label-group">
                                        <label for="inputEmail">Email address</label>
                                            <input type="email" name="userName" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                                        </div>
                                        <div className="form-label-group mt-4">
                                        <label for="inputPassword">Password</label>
                                            <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                            
                                        </div>
                                        <div className="custom-control custom-checkbox mb-4 mt-2">
                                        <label className="custom-control-label" for="customCheck1">Remember password</label>
                                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                                
                                        </div>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                        </form>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
             );
        }              
// const mapStateToProps = state =>({
//     state: state
// })
                    
// export default connect(mapStateToProps,{loginToApp})(Login);