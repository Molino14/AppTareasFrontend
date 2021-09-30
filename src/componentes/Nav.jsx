import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div className="nav-block">
            <ul className="nav">
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>
						Inicio
					</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/usuarios/alta'>
                        Registrarse
                    </Link>
				</li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/usuarios/login'>
                        Login
                    </Link>
				</li>
            </ul>
        </div>
    )
}

export default Nav