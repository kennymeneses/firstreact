import React, { useState, useEffect, useRef } from "react"
import { connect } from 'react-redux'


const Perfil =({infousuario})=>{ 
    
    useEffect(() => {
            
        // return addinfousuario(perfil)
        
      })

  return(
            <div className="miembro-display">

                <div className="miembro-iduser">
                    <label className="miembro-lblid"for="">IdUser: </label>
                    <span className="miembro-id"id="idid">{infousuario.id}</span>
                </div>

                <div className="miembro-nombreuser">
                    <label className="miembro-lblnombre"for="">NombreUser: </label>
                    <span className="miembro-nombre">{infousuario.nombre}</span>
                </div>

                <div className="miembro-fechauser">
                    <label className="miembro-lblfecha"for="">FechadeAlta: </label>
                    <span className="miembro-fecha">{infousuario.fechaCreacion}</span>
                </div>

            </div>
        )

}

const mapStateToProps = state => (
    {
        perfil:state.usuarioReducer.usuario,
        infousuario:state.infousuarioReducer.infousuario
    }
)

export default connect(mapStateToProps, {})(Perfil)