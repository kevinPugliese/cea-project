import React, { Component } from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';

export default class Products extends Component {
    render() {
        return (
            <div>
                <Header />
                <p>Products</p>
                <Link to={`/admin/produtos/novo`}>Novo</Link>
            </div>
        )
    }
}
