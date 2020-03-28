import React from "react"
import withCargandoTaller from "../HOC/withCargandotaller"


const SingleTallerGrid=({singletaller})=>(

    <div className="tallerind">
        
        <h1>Curso: {singletaller.titulo}</h1>
        <img className="fotodeltaller" src={singletaller.image} alt="tallerpicture"/>
        <h2>By: {singletaller.profesor}</h2>
        <h3>Precio: {singletaller.price} luquitas</h3>
                
    </div>

)

export default withCargandoTaller("singletaller",SingleTallerGrid)