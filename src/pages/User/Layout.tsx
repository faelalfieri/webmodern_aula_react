
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.scss'; // Estilos do layout, se necessário

const Layout: React.FC = () => {
    return (
        <div className="layout">
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/user/create">Create User</Link></li>
                    <li><Link to="/roles">Roles</Link></li>
                </ul>
            </nav>
            <main>
                <Outlet /> {/* Este espaço será preenchido pelas rotas */}
            </main>
        </div>
    );
};

export default Layout;