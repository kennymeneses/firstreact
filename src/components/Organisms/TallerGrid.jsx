import React from "react"
import TallerCard from '../Molecules/TallerCard'
import withLoader from '../HOC/withLoader'


const TallerGrid = ({talleres}) => (
    <div className="gridtalleres">
        {
        talleres.map(t => (
            <TallerCard 
                id={t.id}
                title={t.titulo}
                image={t.image}
                price={t.price}
                professor={t.profesor}                              
            />
            ))             
        }
        
    </div>

)

export default withLoader("talleres",TallerGrid)