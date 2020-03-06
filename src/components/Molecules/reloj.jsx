import React, {Component} from 'react'

class Hora extends Component {

    constructor(props){
        super(props)

        this.state = {
            fecha: new Date(),
            año:0,
            mes:'',
            diames:0,
            dia:0,
            hora:0,
            minuto:0,
            segundo:0    
        }

        this.cambiarfecha=this.cambiarfecha.bind(this)

    }

    cambiarfecha(){
        this.setState({
            año:new Date().getFullYear(),
            mes:new Date().getMonth(),
            diames:new Date().getDate(),
            dia:new Date().getDay(),
            hora:new Date().getHours(),
            minuto:new Date().getMinutes(),
            segundo:new Date().getSeconds()
        })
    }

    render(){

            const nombremeses=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','setiembre','octubre','noviembre','diciembre']
            const nomdiasemana=['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
            const diadelasemana=this.state.dia-1
            const mesactual=this.state.mes
            const segundos = this.state.segundo<10 ? '0' + this.state.segundo : this.state.segundo
            const minutos =this.state.minuto<10 ? '0' + this.state.minuto:this.state.minuto
            const horas=this.state.hora
            const horafinal =horas>12 ? horas-12: horas
            const dianoche= horas>12 ? 'pm':'am'
                return (
            
                        <div className="timer">
                        <div>{nomdiasemana[diadelasemana]} {this.state.diames} {nombremeses[mesactual]} del {this.state.año}</div>
                        <div>{horafinal}:{minutos} {dianoche}</div>
                        
                        </div>

                    )
            }


    componentDidMount(){

            this.intervalofecha=setInterval(() => {
                this.cambiarfecha()
            }, 1000);
                        
                        }

    
    componentWillUnmount(){
        clearInterval(this.intervalofecha)
    }
            
}

export default Hora