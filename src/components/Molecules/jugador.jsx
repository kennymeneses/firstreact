import React from 'react'

const Jugador = ({nombre,posicion,nacionalidad,numerodecamiseta}) =>(

    <article className="jugador">

        <div>

            <h2 >{nombre}</h2>
            <h3>{posicion}</h3>
            <h4>{nacionalidad}</h4>
            <h5>{numerodecamiseta}</h5>

        </div>

    </article>

)

export default Jugador