import React, { Component } from 'react';
import Title from '../functionalComponents/Title';
import Items from './Items';


class EditDeleteProduct extends Component {
    render() {
        return (
            <div>
                <Title name="Manage" title="Products"/>
                <Items/>
            </div>
        );
    }
}

export default EditDeleteProduct;