import React, {Component} from 'react'
import CargandoTalleres from '../Organisms/logintalleres'

const withLoader = (propValue,WrappedComponent) =>{

    return class WithLoader extends Component{

        constructor(props) {
            super(props)
        }

        render(){
            return  this.props[propValue].length === 0
            ? <CargandoTalleres/>
            : <WrappedComponent  {...this.props} />
        }

    }

}

export default withLoader