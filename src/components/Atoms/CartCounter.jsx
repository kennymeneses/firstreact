import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logocarrito from '../../z-images/white-cart.png'
import { putcolor } from '../../redux/actionCreators'


const CartCounter = ({numdecompras})=>(

    <Link to='/' className="logocarrito" style={{backgroundColor:putcolor(numdecompras.length)}} ><img className="carrito-main" src={logocarrito} alt="foto"/><span className="contentcompras">:{numdecompras.length}</span> </Link>

)

const mapStateToProps = state => (

    {
        numdecompras:state.cartReducer.cart
    }

)

const mapDispatchToProps = () =>{


}


export default connect(mapStateToProps, {})(CartCounter)