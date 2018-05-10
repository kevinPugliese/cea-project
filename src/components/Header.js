import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        LOGO
                    </div>
                    <div className="col-sm">
                        Olá visitante, bem vindo!
                        Faça seu login aqui ou cadastre-se
                        <input type='text' />
                        <button>BUSCAR</button>
                    </div>
                    <div className="col-sm">
                        Minha sacola 0 itens | R$ 0,00
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {})(Header);
