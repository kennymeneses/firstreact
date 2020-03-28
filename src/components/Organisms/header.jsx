import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Hora from '../Molecules/reloj'
import CartCounter from '../Atoms/CartCounter'
import logoibm from '../../z-images/ibm.png'
import loginlogo from '../../z-images/unnamed.png'
import userlogo from '../../z-images/user.png'
import foto1 from '../../z-images/1.jpg'
import logoutlogo from '../../z-images/logoutblue.png'
import { connect } from 'react-redux'
import {logindisplay, usertools, logoutUser} from '../../redux/actionCreators'

const Banner = ({perfil,infousuario,logoutuser})=>{
    
    return (
        <div className="head">
                    <Hora/>
                    <div className="zonausuario">
                        <div style={{display:logindisplay(perfil)}} className="divlogin"><Link className="linklogin" to="/login"><img src={loginlogo} alt="logo" className="logousuario"/>Login</Link></div>
                        <div style={{display:usertools(perfil)}} className="divusuario"><Link className="linkusuario" to={`/perfil/${infousuario.nombre}`}><img src={userlogo} alt="logo" className="logousuario"/>{infousuario.nombre}</Link></div>
                        <div style={{display:usertools(perfil)}} className="divlogout"><Link className="linklogout" onClick={()=>logoutuser()} to="/"><img src={logoutlogo} alt="logo" className="logologout"/>Logout</Link></div>
                    </div>

                    <nav className="nav">
                            <ul className="menu">
                                <li className="menu-item"><NavLink className="menu-link" to="/"><img src={logoibm} alt="logo" className="logonav"/></NavLink></li>
                                <li className="menu-item"><NavLink className="menu-link" to="/">Home</NavLink></li>
                                <li className="menu-item"><NavLink className="menu-link" to="/">Nuestra Mision </NavLink></li>
                                <li className="menu-item"><NavLink className="menu-link" to="/talleres">Talleres</NavLink></li>
                                <li className="menu-item"><NavLink className="menu-link" to="/jugadores">Jugadores</NavLink></li>
                                <li id="iddesple" className="menu-item"><NavLink className="menu-link" to="/">contactenos</NavLink>
                                    <ul className="submenu">
                                        <li className="menu-item"><NavLink className="submenu-link" to="/">Whatsapp </NavLink></li>
                                        <li className="menu-item"><NavLink className="submenu-link" to="/">Telefono </NavLink></li>
                                        <li className="menu-item"><NavLink className="submenu-link" to="/">Señales de humo</NavLink></li>
                                    </ul>
                                </li>
                                <li className="menu-item"><NavLink className="menu-link" to="/">Logros</NavLink></li>  
                                <li className="menu-item"><NavLink className="menu-link" style={{display:usertools(perfil)}} to="/usuarios">Usuarios</NavLink></li>
                                
                            </ul>
                    </nav>
                    <CartCounter/>

        </div>
)}


const mapStateToProps = state => (
    {
        perfil:state.usuarioReducer.usuario,
        infousuario:state.infousuarioReducer.infousuario
    }
)

const mapDispatchToProps=(dispatch)=>({
        logoutuser(){
            dispatch(logoutUser())
        }
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(Banner)
