import React, { useState, useEffect, useRef } from "react"
import { connect } from 'react-redux'
import logoibm from '../../z-images/ibm-black.png'
import { Link } from 'react-router-dom'
import { makepetition, avisoerror } from '../../redux/actionCreators'
import { useHistory } from 'react-router-dom';



const Login =({addperfiluser,perfil})=>{

    const [correo1,setCorreo1] = useState('')
    const [password1, setPassword1] = useState('')

    const history = useHistory();
    const evento = () => {
        history.push("/");
    //onMouseUp={()=>evento()}
    }

    useEffect(() => {
            
        // return addinfousuario(perfil)

      })
    
        return (
                <div  className="cuadrologin">
                    <img className="login-logoibm" src={logoibm} alt="logo"/>
                    <div className="login-perfilcorreo">
                        <label className="login-lblcorreo" for="">Email: </label>
                        <input onChange={e=>setCorreo1(e.target.value)} className="login-inputcorreo" type="email"/>
                    </div>
                    <div className="login-perfilpassword">
                        <label className="login-lblpassword" for="">Password: </label>
                        <input onChange={e=>setPassword1(e.target.value)}  className="login-inputpassword" type="password"/>
                    </div>
                    <div className="login-confirmar"><button onClick={()=>addperfiluser(correo1,password1)} className="login-btnconfirmar">Login</button></div>
                    <div className="login-avisorespuesta">{avisoerror(perfil)}</div>
                    <div className="login-Registrarse"><Link className="login-linkregistrarse" to="/">Si no tiene una cuenta registrese aqui</Link></div>
                    <div className="login-returnhome"><Link className="login-linkregresar" to="/">Regresar</Link></div>
                </div>
            )

    // redireccionar(perfil)        
}

const mapStateToProps = state => (
    {
        perfil:state.usuarioReducer.usuario,
        infousuario:state.infousuarioReducer.infousuario
    }
)


const mapDispatchToProps=(dispatch)=>({
    addperfiluser(cuenta,pass){
        dispatch(makepetition(cuenta,pass))
    }

})


export default connect(mapStateToProps, mapDispatchToProps)(Login)