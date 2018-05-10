import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { verifyLogin } from '../../actions/AuthenticationActions';
import { Redirect } from 'react-router';

import Input from '../common/Input';
import { required } from '../../functions/Utils';

class Login extends Component {
    render() {
        const { handleSubmit, verifyLogin, isLogged, errorLogin } = this.props;

        if (isLogged) {
            return <Redirect to='/admin/produtos'/>;
        }

        return (
            <form role='form' onSubmit={handleSubmit(verifyLogin)}>
                <p>{errorLogin}</p>
                <div className='box-body'>
                    <Field name='email' label='E-mail' type='text' component={Input} validate={[required]} />
                    <Field name='password' label='Senha' type='password' component={Input} validate={[required]} />
                </div>
                <div className='box-footer'>
                    <button type='submit'>
                        Acessar
                    </button>
                </div>
            </form>
        )
    }
}

Login = reduxForm({form: 'loginForm'})(Login);
const mapStateToProps = state => ({
    isLogged: state.AuthenticationReducers.isLogged,
    errorLogin: state.AuthenticationReducers.errorLogin
});
export default connect(mapStateToProps, { verifyLogin })(Login);
