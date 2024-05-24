import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav className="breadcrumbs">
            <Link to="/">Home</Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                    <span key={to}>{value}</span>
                ) : (
                    <Link key={to} to={to}>{value}</Link>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs;
