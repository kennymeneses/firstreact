import React from 'react'
import Index from './pages/home'
import Misusuarios from './pages/users'
import Usuario from './Molecules/user'
import Jugadores from './pages/jugadores'
import Talleres from './pages/Talleres'
import Taller from './pages/Taller'
import Login from './pages/login'
import Perfil from './pages/userperfil'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Banner from './Organisms/header'


const AppRoutes = ()=>(

<Router>
        <Banner/>
          <Switch>
            <Route path ="/" exact component={Index} />
            <Route path ="/usuarios/:id" component={Usuario}/>
            <Route path ="/usuarios" component={Misusuarios} />
            <Route path ="/jugadores" component={Jugadores}/>
            <Route path ="/talleres/:id" component={Taller}/>
            <Route path ="/talleres" component={Talleres}/>
            <Route path ="/login" component = {Login}/> 
            <Route path ="/perfil/:nombre" component = {Perfil}/>
            <Route component={() => (
              <div className="eltaller">
                <h1>Error 404</h1>
                  <span>Página no encontrada</span>  
                </div>
              )} /> 
            </Switch>
        
    </Router>

)

export default AppRoutes