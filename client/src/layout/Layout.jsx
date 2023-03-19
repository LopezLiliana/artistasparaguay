import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Layout = ({children}) => {
        return(

            
            <div className='layout'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/artistas">Inicio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/artistas/todos">Artistas <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/canciones/todos">Canciones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/canciones/new">Nueva Cancion</a>
                    </li>
                    </ul>
                </div>
                </nav>
            <main className='container'>{children}</main>
            </div>
        )
    };
    export default Layout;