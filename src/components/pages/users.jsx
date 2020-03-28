import React, { useState, useEffect, useRef } from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Users =({sesion})=>{

    const [correo1,setCorreo1] = useState('')
    const [password1, setPassword1] = useState('')

    useEffect(()=>{

        document.title = "Usuarios"

    });

    return(
            <div className="usuariosmain">Usuarios</div>
    )

}

const mapStateToProps = state => (
    {
        sesion:state.usuarioReducer.usuario
    }
)


const mapDispatchToProps=(dispatch)=>({
    
})


export default connect(mapStateToProps, mapDispatchToProps)(Users)