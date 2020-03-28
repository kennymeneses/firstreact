import React, { useState, useEffect, useRef } from "react"

const Carrito =()=>{

    const [count,setcount]=useState(0)

    const comprar=()=>{
        setcount(count+1)
    }


    return(
                <div className="tallerind">
                    <button onClick={comprar.bind(this)}>Comprar</button>
                    
                    <h3>{count}</h3>
                </div>
            )
}

export default Carrito