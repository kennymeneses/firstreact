import TallerGrid from '../Organisms/TallerGrid'
import React, { useState, useEffect, useRef } from "react"
import { connect } from 'react-redux'


const Talleres = ({tallerez}) =><TallerGrid talleres={tallerez} />

const mapStatetoProps = state => ({
    tallerez:state.talleresReducer.talleres
})

export default connect(mapStatetoProps, {})(Talleres)


// const Talleres =()=> {

//     const [talleresvarios, setTalleres]=useState([])

//     useEffect(()=>{

//         let miinit={
//             method:'GET',
//             cache:'default'
//             };

//         const url= 'http://my-json-server.typicode.com/betoquiroga/json-db/cursos'

//         fetch(url,miinit).then(respuest=>{console.log(respuest);return respuest.json()})
//         .then(resp => {console.log(resp);setTalleres(resp)})

//     },[]);

//     return(

//         <TallerGrid talleres={talleresvarios} />
//           )

// }

// export default Talleres

