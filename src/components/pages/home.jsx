import React, { useState, useEffect, useRef } from "react"
import { getuserdata } from '../../redux/actionCreators'
import { connect } from 'react-redux'
import Slideshow from '../Organisms/slideshow.jsx'
import pic1 from '../../z-images/1.jpg'
import pic2 from '../../z-images/2.jpg'
import pic3 from '../../z-images/3.jpg'
import pic4 from '../../z-images/4.jpg'


const Index =({perfil,infousuario,addInfodelusuario})=>{

    useEffect(() => {
        console.log('inicio')
        let fecha= new Date();
        let fechamundial = fecha.toISOString()

        if(typeof perfil.expiration != "undefined" && perfil.expiration>fechamundial && typeof infousuario.nombre == "undefined")
        {
            addInfodelusuario(perfil)
        }

        return console.log('final')
      },[])


            return (
                        <div className="home">
                            <Slideshow foto1={pic1} foto2={pic2} foto3={pic3} foto4={pic4}/>
                        </div>
                    )

            }

const mapStateToProps = state => (
                {
                    perfil:state.usuarioReducer.usuario,
                    infousuario:state.infousuarioReducer.infousuario
                }
            )
            
            
const mapDispatchToProps=(dispatch)=>({
    addInfodelusuario(objeto){
        dispatch(getuserdata(objeto))
    }
            
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)