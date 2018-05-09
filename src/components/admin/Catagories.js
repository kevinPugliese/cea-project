import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/CategoriesActions'; 

class Categories extends Component {
    
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderList() {
        const { items } = this.props;
        console.log(items)
        return items.map(item => `<p>${item.name}</p>`);
    }
    
    render() {
        console.log(this.props.items)
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
