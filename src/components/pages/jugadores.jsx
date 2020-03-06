import React, {Component} from 'react'
import JugadoresGrid from '../Organisms/JugadoresGrid'

class Jugadores extends Component {

    constructor(props){
        super(props)

        this.state = {
            plantilla:[],
            information:[]
        }

    }

    render(){
            const { plantilla }=this.state
            const { information } =this.state
        return (<JugadoresGrid team={plantilla} infoteam={information}/>)        
    }

    componentDidMount(){

        let miinit={
            method:'GET',
            headers: {"X-Auth-Token": "5f5fe128570248a9bd198add1a5b25e4"},
            cache:'default'
            };

            const url= 'http://api.football-data.org/v2/teams/81'

            // const mipeticion= new Request(miinit,url)

            fetch(url,miinit)
            .then(response=>{console.log(response); return response.json()})
            .then(response=>{console.log(response);this.setState({plantilla:response.squad});this.setState({information:response})})
            
    }

}

export default Jugadores