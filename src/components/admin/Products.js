import React, { Component } from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchProducts } from '../../actions/ProductsActions';

class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    renderItems() {
        return _.map(this.props.items, item => {
            return (
                <li key={item.id} className="list-items">  
                    {item.name}
                    <Link to={`/admin/produtos/fotos/${item.id}`}>Adicionar fotos</Link>
                </li>
            );
        });
    }

    render() {

        return (
            <div>
                <Header />
                <p>Products</p>
                <Link to={`/admin/produtos/novo`}>Novo</Link>
                {this.renderItems()}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    productSave: state.ProductsReducers.productSave,
    items: state.ProductsReducers.items
});

export default connect(mapStateToProps, { fetchProducts })(Products);
