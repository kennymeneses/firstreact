import { ADD_TO_CART, GET_COURSE_LIST, USUARIO_LOGIN,USUARIO_LOGOUT,GET_INFO_USUARIO, REMOVE_TO_CART } from "./action"
import React, { Component }  from 'react';
import  { Redirect } from 'react-router-dom'




const addToCart = idproducto =>({
    type:ADD_TO_CART,
    id:idproducto
})

const removeToCart = idproducto =>({
    type:REMOVE_TO_CART,
    id:idproducto
})

const logoutUser = () =>({
    type:USUARIO_LOGOUT,
    usuario:{}
})

const putcolor =(condicion)=>{
    if(condicion>0){
        return 'green'
    }
    else{
        return 'black'
    }
}

const putbotoncolor = (array, id)=>{

    if(array.find(t=>t===id))
    {
        return 'red'
    }
    else
    {
        return 'green'
    }

}

const puttext =(array, id)=>{

    if(array.find(t=>t===id))
    {
        return 'Comprado'
    }
    else
    {
        return 'Comprar'
    }
}

const getTallerList = () =>dispatch =>{

        let miinit={
            method:'GET',
            cache:'default'
            };

        const url= 'http://my-json-server.typicode.com/betoquiroga/json-db/cursos'

    fetch(url,miinit).then(response=>{return response.json()}).then(response=>{
        return dispatch({
            type:GET_COURSE_LIST,
            talleres:response
        })
    })

}

const makepetition = (email, password)=>dispatch=>{

    const data={}
    data.id=1;
    data.correo=email;
    data.contrasenia=password;
    data.tipo=1;
    data.estado=1;

        const miinit={
        method:'POST',                    
        headers: {"Content-type":"application/json"},
        body:JSON.stringify(data)}
                
    const url='https://localhost:44351/api/login';

    fetch(url,miinit).then(response=>{return response.json()}).then(response=>{
        return dispatch({
            type:USUARIO_LOGIN,
            usuario:response
        })
        
    })
        
}

const getuserdata = (objeto)=>dispatch=>{

    let ini = {
        method:'GET',
    headers:{"Authorization": `Bearer ${objeto.token}`},
    cache:'default'
              }
    let url=`https://localhost:44351/api/usuarios/${objeto.id}`;

  fetch(url,ini).then(response=>{return response.json()}).then(response=>{
      console.log(response);return dispatch({
          type:GET_INFO_USUARIO,
          infousuario:response
      })
    })

}




const volverhome = () =><Redirect to='/talleres' />


const avisoerror =(objeto) =>{
    if(objeto.id == 0)
    {
        return objeto.apiMensaje
    }

    if(typeof objeto.expiration != "undefined")
    {
        let fecha= new Date();
        let fechamundial = fecha.toISOString()
            if(objeto.expiration>fechamundial)

            {
                return <Redirect to='/' />
            }
      
    }
    

}

const redireccionar =(objeto)=>{
    if(objeto.id>0)
    {
        return <Redirect to='/' />
    }
}

const logindisplay = (objeto)=>{
    if(typeof objeto.expiration != "undefined")
    {
        let fecha= new Date();
        let fechamundial = fecha.toISOString()
            if(objeto.expiration>fechamundial)

            {
                return 'none'
            }
            else
            {
                return 'block'
            }
      
    }
    else
    {
        return 'block'
    }
}

const usertools = (objeto) =>{

    if(typeof objeto.expiration == "undefined")
    {
        return 'none'
    }

    else
    {
        let fecha= new Date();
        let fechamundial = fecha.toISOString()
        if(objeto.expiration>fechamundial)
        {
            return 'block'
        }
        else
        {
            return 'none'
        }
    }
}

export { logindisplay,usertools ,putcolor, addToCart,removeToCart, putbotoncolor, getTallerList, makepetition,getuserdata,volverhome,logoutUser, avisoerror, redireccionar }