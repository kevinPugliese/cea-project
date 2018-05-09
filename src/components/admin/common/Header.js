import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <div>
        <ul>
            <Link to={`/admin/produtos`}>Produtos</Link>
            <Link to={`/admin/categorias`}>Categorias</Link>
            <Link to={`/admin/banners`}>Banners</Link>
            
        </ul>
    </div>
)
