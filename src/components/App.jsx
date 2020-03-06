import React from 'react';
import '../App.css';
import Hora from './Molecules/reloj'
import Index from './pages/home'
import Misusuarios from './pages/users'
import Usuario from './Molecules/user'
import Jugadores from './pages/jugadores'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Banner from './Organisms/header'

const App = () =>(

    <Router>
        <Banner/>
          <Switch>
            <Route path ="/" exact component={Index} />
            <Route path ="/usuarios/:id" component={Usuario}/>
            <Route path ="/usuarios" component={Misusuarios} />
            <Route path ="/jugadores" component={Jugadores}/>
            </Switch>
        
    </Router>

  );


export default App;
