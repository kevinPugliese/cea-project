import React, { Component } from 'react';
import firebase from 'firebase';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { Redirect } from 'react-router';

import Input from '../common/Input';
import { required } from '../../functions/Utils';
import { createProducts } from '../../actions/ProductsActions';

class CategoriesNew extends Component {
    render() {
        const { handleSubmit, createProducts, productSave } = this.props;

        if (productSave) {
            return <Redirect to='/admin/produtos'/>;
        }

        return (
            <form role='form' onSubmit={handleSubmit(createProducts)}>
                <Link to={`/admin/produtos`}>Voltar</Link>
                <p>Produto</p>
                <div className='box-body'>
                    <Field name='name' label='Nome' type='text' component={Input} validate={[required]} />
                    <Field name='freeShipping' label='Frete grátis' type='text' component={Input} validate={[required]} />
                    <Field name='descriptionShort' label='Descrição curta' type='text' component={Input} validate={[required]} />
                    <Field name='descriptionLong' label='Descrição longa' type='text' component={Input} validate={[required]} />
                    <Field name='priceOf' label='Preço de' type='number' component={Input} validate={[required]} />
                    <Field name='pricePer' label='Preço por' type='number' component={Input} validate={[required]} />
                    <Field name='showcase' label='Vitrine' type='text' component={Input} />
                    <Field name='category' label='Categoria' type='text' component={Input} validate={[required]} />
                    <Field name='plots' label='Parcelas' type='text' component={Input} />
                    <Field name='link' label='link' type='text' component={Input} validate={[required]} />
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

CategoriesNew = reduxForm({form: 'categoryForm'})(CategoriesNew);

const mapStateToProps = state => ({
    productSave: state.ProductsReducers.productSave
});

export default connect(mapStateToProps, { createProducts })(CategoriesNew);
