import React, {Component} from 'react'
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

const profesionales=[
    {"id":1,"Nombre":"Margiori Pflucker", "image":foto1,"Profesion":"Human Resources"},
    {"id":2,"Nombre":"Leticia Becks", "image":foto2,"Profesion":"Chief Regional South"},
    {"id":3,"Nombre":"Dayron Quintanilla", "image":foto3,"Profesion":"Developer Manager"},
    {"id":4,"Nombre":"Magda Stone", "image":foto4,"Profesion":"Social Manager"},
    {"id":5,"Nombre":"Veronica Ands", "image":foto5,"Profesion":"Chief Regional South"},
    {"id":6,"Nombre":"Christopher Mains", "image":foto6,"Profesion":"Chief Regional North"},
    {"id":7,"Nombre":"John Stewart", "image":foto7,"Profesion":"Chief Regional West"},
    {"id":8,"Nombre":"Peter Smith", "image":foto8,"Profesion":"Chief Regional Ovest"},
    {"id":9,"Nombre":"Jenny Darmont ", "image":foto9,"Profesion":"Chief Regional Europe"},
    {"id":10,"Nombre":"Paul Domingez", "image":foto10,"Profesion":"Chief Regional SouthAmerica"}
]

const Usuario = ({match}) => {

    const usuarioselec = profesionales.filter(p=>p.id === parseInt(match.params.id))[0]

    return (
    
                <div className="usuarioperfil">
                    <h1>Profesor:{usuarioselec.Nombre}</h1>
                    <img className="fotodelusuario" src={usuarioselec.image} alt="foto_perfil"/>
                    <h2>Profesion:{usuarioselec.Profesion}</h2>
                    <h3>{usuarioselec.image}</h3>
                </div>

    )
  
}




export default Usuario