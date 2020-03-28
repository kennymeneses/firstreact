import React, { useState, useEffect, useRef, createRef } from "react"
import { Link, NavLink } from 'react-router-dom'
import { intervalo } from './slideshow1'

const Slideshow = ({foto1,foto2,foto3,foto4})=>{

    const i1= useRef(null)
    const i2= useRef(null)
    const i3= useRef(null)
    const i4= useRef(null)

    const contenedor = useRef(null)

    useEffect(() => {
        

        // contenedor.current.style='width: 90%;'
        intervalo(i1.current,i2.current,i3.current,i4.current)
        
      })

    return(
            <div className="slideshow" ref={contenedor}>
            
                <input type="radio" name="images" id="i1" ref={i1} checked />
                <input type="radio" name="images" id="i2" ref={i2}/>
                <input type="radio" name="images" id="i3" ref={i3}/>
                <input type="radio" name="images" id="i4" ref={i4}/>

                <div id="one" className="slide_img">
                    <Link to ="https://rpp.pe/?ref=rpp" target="_blank"><img  src={foto1} alt="foto" className="fotoslide"/> </Link> 
                </div>

                <div id="two" className="slide_img">
                    <Link to ="https://www.google.com/" target="_blank"><img  src={foto2} alt="foto" className="fotoslide"/> </Link>  
                </div>

                <div id="three" className="slide_img">
                    <Link to ="https://www.viabcp.com" target="_blank"><img  src={foto3} alt="foto" className="fotoslide"/> </Link>
                </div>

                <div id="four" className="slide_img">
                    <Link to ="https://libero.pe/" target="_blank"><img  src={foto4} alt="foto" className="fotoslide"/> </Link>
                </div>

                <div className="navv">
                    <label id="dot1" for="i1" className="dots"></label>
                    <label id="dot2" for="i2" className="dots"></label>
                    <label id="dot3" for="i3" className="dots"></label>
                    <label id="dot4" for="i4" className="dots"></label>
                </div>

            </div>
          )

}


export default (Slideshow)