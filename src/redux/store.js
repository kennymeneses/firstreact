import { applyMiddleware, combineReducers, createStore } from 'redux'
import { ADD_TO_CART,REMOVE_TO_CART, GET_COURSE_LIST, USUARIO_LOGIN, GET_INFO_USUARIO, USUARIO_LOGOUT } from './action'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import  { Redirect } from 'react-router-dom'



const initialCart = {
    cart:[]
}

const initialTalleres ={
    talleres:[]
}

const initialUsuario ={
    usuario:{}
}

const initialInfousuario ={
    infousuario:{}
}

const cartReducer = ( state = initialCart,action) => {
    console.log(action)

    if(action.type===ADD_TO_CART)
    {

        if(state.cart.find(c=>c===action.id)) 
        {
            return state
        }

        return{
            ...state,
            cart: state.cart.concat(action.id),            
        }
        
    }

    if(action.type===REMOVE_TO_CART)
    {
        return{
            ...state,
            cart: state.cart.filter(c=>c !== action.id)
        }
    }


    console.log(initialCart.cart)
    return state
    
}

const talleresReducer = (state = initialTalleres, action) =>{
    console.log(action)
    if(action.type === GET_COURSE_LIST){
        return {
            ...state,
            talleres: action.talleres
        }
    }
    return state
}

const usuarioReducer = (state = initialUsuario, action)=>{
    console.log(action)
    if(action.type === USUARIO_LOGIN){
        return {
            ...state,
            usuario: action.usuario
        }
    }

    if(action.type === USUARIO_LOGOUT){
        return {
            ...state,
            usuario:action.usuario,
            
        }
        
    }
    return state

}

const infousuarioReducer = (state = initialInfousuario, action)=>{

    if(action.type === USUARIO_LOGOUT)
    return {
        ...state,
        infousuario:action.usuario
    }

    if(action.type === GET_INFO_USUARIO)
    return {
        ...state,
        infousuario:action.infousuario
    }
    return state
}

export const rootReducer = combineReducers({cartReducer,talleresReducer,usuarioReducer, infousuarioReducer})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// const tienda = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// export default tienda