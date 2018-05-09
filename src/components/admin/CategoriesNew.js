import React, { Component } from 'react';
import firebase from 'firebase';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { createCategory } from '../../actions/CategoriesActions'; 

import Input from '../common/Input';
import { required } from '../../functions/Utils';

class ProductsNew extends Component {
    render() {
        const { handleSubmit, createCategory } = this.props;

        return (
            <form role='form' onSubmit={handleSubmit(createCategory)}>
                <Link to={`/admin/categorias`}>Voltar</Link>
                <div className='box-body'>
                    <Field name='category' label='Categoria' type='text' component={Input} validate={[required]} />
                </div>
                <div className='box-footer'>
                    <button type='submit'>
                        Salvar
                    </button>
                </div>
            </form>
        )
    }
}

ProductsNew = reduxForm({form: 'productsForm'})(ProductsNew);
export default connect(null, { createCategory })(ProductsNew);
