import React from "react"
import Jugador from "../Molecules/jugador"
import withLoader from "../HOC/withLoader";

const JugadoresGrid = ({team, infoteam}) =>(
    <div className="displayteam">

        <h1>Equipo</h1>
        <div>
            <h2>Nombre: {infoteam.name}</h2>
            <h2>Fundado: {infoteam.founded}</h2>
            <h2>Estadio: {infoteam.venue}</h2> 
        </div>
        <div className="displayplayers">
            <h1>Plantel</h1><br/>
            {
               team.map(j => (
                    <Jugador 
                        key={j.id}
                        nombre={j.name}
                        posicion={j.position}
                        nacionalidad={j.nationality}
                        numerodecamiseta={j.shirtNumber}                    
                    />
                )) 
            }
        </div>
    </div>

)

export default withLoader("team",JugadoresGrid)