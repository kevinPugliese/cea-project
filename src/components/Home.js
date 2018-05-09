import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <div>
        HOME
        <Link to={`/admin/produtos`}>
            Details
        </Link>
    </div>
)
