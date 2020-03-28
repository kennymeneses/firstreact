import React, { useState, useEffect, useRef } from "react"
import { render } from "@testing-library/react";
import SingleTallerGrid from '../Organisms/SingleTallerGrid'



const Taller =({match}) => {

    const [taller, setTaller]=useState({})

    
    useEffect(()=>{

        let miinit={
            method:'GET',
            cache:'default'
            };

        const url= `http://my-json-server.typicode.com/betoquiroga/json-db/cursos/${match.params.id}`
        fetch(url,miinit).then(response=>{console.log(response);return response.json()}).then(response=>{setTaller(response);console.log(response)})
      } ,[]);

    
    return (
            <div>
            <SingleTallerGrid singletaller= {taller} />
            
            </div>
            )
        
}

export default Taller