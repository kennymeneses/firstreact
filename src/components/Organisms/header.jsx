import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import Hora from '../Molecules/reloj'

class Banner extends Component{

render(){

    return(
            <div className="head">
                <Hora/>
                <nav className="nav">
                        <ul className="menu">
                            <li className="menu-item"><NavLink className="menu-link" to="/">Home</NavLink></li>
                            <li className="menu-item"><NavLink className="menu-link" to="/">Nuestra Mision </NavLink></li>
                            <li className="menu-item"><NavLink className="menu-link" to="/">Productos</NavLink></li>
                            <li className="menu-item"><NavLink className="menu-link" to="/jugadores">Jugadores</NavLink></li>
                            <li className="menu-item"><NavLink className="menu-link" to="/usuarios">Usuarios</NavLink></li>
                            <li className="menu-item"><NavLink className="menu-link" to="/">Contactenos</NavLink></li>
                                
                        </ul>
                </nav>

            </div>
         )
        }
        
}

export default Banner