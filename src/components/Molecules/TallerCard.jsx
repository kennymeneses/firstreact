import React from 'react'
import { Link } from "react-router-dom"
import { addToCart,removeToCart, putbotoncolor, puttext} from '../../redux/actionCreators'
import { connect } from 'react-redux'
import logocarrito from '../../z-images/white-cart.png'


const TallerCard = ({id, title, image, price, professor,addTallerToCart,removeTallerToCart,numdecompras}) => (
    <article className="tallercard">
        <div className="">
            <Link to={`/talleres/${id}`}>
                <img className="imgtaller" src={image} alt={title} />
            </Link>
        </div>
        <div className="">
            <h3 className="">{title}</h3>
            <div className="">
                { professor }
            </div>
            <div className="">
                { `$ ${price} USD`}
            </div>
        </div>
        {
            numdecompras.find(a=> a===id)
            ?
            <button className="btncomprar" style={{backgroundColor:'red'}} onClick={()=>removeTallerToCart(id)} >
                <span id="msgbuy"  className="textocontenido" >Deshacer compra</span>
            </button>
            :
            <button className="btncomprar" style={{backgroundColor:'green'}} onClick={()=>addTallerToCart(id)} >
            <img className="carritoinside" src={logocarrito} />
            <span id="msgbuy"  className="textocontenido" >Comprar</span>
        </button>
        }
    </article>

)



const mapStateToProps = state => (

    {
        numdecompras: state.cartReducer.cart
    }

)

const mapDispatchToProps=(dispatch)=>({
    addTallerToCart(id){
        dispatch(addToCart(id))
    },

    removeTallerToCart(id){
        dispatch(removeToCart(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TallerCard)