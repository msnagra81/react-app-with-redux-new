import React, { Component } from 'react';
import { css } from "@emotion/core";
import { ClipLoader, RingLoader, MoonLoader, RotateLoader, SyncLoader, FadeLoader } from "react-spinners";
// import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  text-align: center;
`;
 

class Loading extends Component{
    constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="sweet-loading pt-5 mt-5">
        <RingLoader
          css={override}
          size={150}
          //size={"150px"} this also works
          color={"#2a2a72"}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

export default Loading;