import React,{ Component } from "react";
import { render } from "@testing-library/react";

export const PrivateComponent = ({component: Component,...rest}) => (
    (auth)=>{
        console.log('Auth - '+auth)
        if(auth){
            render ( <Component />)
        }
    }
)