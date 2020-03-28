import React, {Component} from 'react'

const withCargandoTaller =(propValue,WrappedComponent)=>{

    return class WithloaderII extends Component{

        constructor(props) {
            super(props)
        }

        render(){
            return this.props[propValue].image == null
            ? <h1 className="loading">Loading ....</h1>
            : <WrappedComponent  {...this.props} />
        }

    }
}

export default withCargandoTaller