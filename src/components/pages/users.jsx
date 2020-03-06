import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import foto1 from '../../Profile-photos/1.jpg';
import foto2 from '../../Profile-photos/2.jpg';
import foto3 from '../../Profile-photos/3.jpg';
import foto4 from '../../Profile-photos/4.jpg';
import foto5 from '../../Profile-photos/5.jpg';
import foto6 from '../../Profile-photos/6.jpg';
import foto7 from '../../Profile-photos/7.jpg';
import foto8 from '../../Profile-photos/8.jpg';
import foto9 from '../../Profile-photos/9.jpg';
import foto10 from '../../Profile-photos/10.jpg';

class Misusuarios extends Component{

    constructor(props){
        super(props)

        this.state = {

        }

    }

        render(){
            return(
                    <div className="usuariosmain">

                        <h1>Usuarios</h1>

                        {/* <div className="usuariosdisplay">
                                <div className="usuariox">
                                    <Link to='/usuarios/1'>
                                    <img className="fotousuario" src={foto1} alt="foto1"/>
                                    </Link>
                                </div>


                                <div className="usuariox">
                                    <Link to='/usuarios/2'>
                                    <img className="fotousuario"src={foto2} alt="foto1"/>
                                    </Link>
                                </div>


                                <div className="usuariox">
                                    <Link to='/usuarios/3'>
                                    <img className="fotousuario"src={foto3} alt="foto1"/>
                                    </Link>
                                </div>


                                <div className="usuariox">
                                    <Link to='/usuarios/4'>
                                    <img className="fotousuario"src={foto4} alt="foto1"/>
                                    </Link>
                                </div>

                                <div className="usuariox">
                                    <Link to='/usuarios/9'>
                                    <img className="fotousuario"src={foto9} alt="foto1"/>
                                    </Link>
                                </div>

                                
                                <div className="usuariox">
                                <Link to='/usuarios/6'>
                                    <img className="fotousuario"src={foto6} alt="foto1"/>
                                    </Link>
                                </div>

                                <div className="usuariox">
                                <Link to='/usuarios/7'>
                                    <img className="fotousuario"src={foto7} alt="foto1"/>
                                </Link>
                                </div>


                                <div className="usuariox">
                                <Link to='/usuarios/8'>
                                    <img className="fotousuario"src={foto8} alt="foto1"/>
                                </Link>
                                </div>

                        </div> */}
                    
                    </div>
            )
        }

}

export default Misusuarios