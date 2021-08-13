import React  from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGif } from '../hooks/useFetchGifs';
 


const GifGrid = ({category}) => {

   const { data :imagenes , loading } = useFetchGif(category);

    return (
        <>
        <h3 className="card animate__animated animate__fadeIn" > {category} </h3>
        {loading  && <p className="card animate__animated animate__flash" > Cargando ...! </p>}

        <div className="card-grid"> 
            {
                imagenes.map((img)=>(
                    <GifGridItem key={ img.id } {...img} /> 
                ))
            }  
        </div>
        </>

    )
}
 

export default GifGrid;

