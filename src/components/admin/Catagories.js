import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchCategories } from '../../actions/CategoriesActions'; 

class Categories extends Component {
    
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderList() {
        return _.map(this.props.items, item => {
            return (
                <li key={item.id} className="list-items">  
                    {item.name}
                </li>
            );
        });
    }
    
    render() {
        return (
            <div>
                <Header />
                Categories
                <Link to={`/admin/categorias/novo`}>
                    novo
                </Link>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.CategoriesReducers.items
})

export default connect(mapStateToProps, { fetchCategories })(Categories);
