import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <h2>
                    Learning React Router + useContext
                </h2>
                <li>
                    <NavLink exact to="./" activeClassName="isActive" >Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="./about" activeClassName="isActive">About</NavLink>
                </li>
                <li>
                    <NavLink exact to="./login" activeClassName="isActive" >Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}

// si usaramos anchor tags con hrefs, la pagina completa se renderiza cada vez que cambio de pagina.
// el <Link> es el equivalente del <a>, y el 'to' es el equivalente del 'href'. No necesita renderizar
//      la pagina completa cunado cambio de pagina y eso ahorra tiempo de proceso

// la diferencia entre <Link> y <Navlink> es que Navlink permite tener el atributo "activeClassName" para
//      darle estilo a la pagina que coincide con el path, es decir, la que ESTÁ ACTIVA


// export const Navbar = () => {
//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="./">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="./about">About</Link>
//                 </li>
//                 <li>
//                     <Link to="./login">Login</Link>
//                 </li>
//             </ul>
//         </nav>
//     )
// }