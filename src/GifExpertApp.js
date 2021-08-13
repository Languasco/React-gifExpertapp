import React, { useState } from 'react';
import AddCategory from '../src/components/AddCategory.js';
import GifGrid from '../src/components/GifGrid.js';
 
const GifExpertApp = ()=>{

    const [categorias, setCategorias] = useState(['Dragon Ball'])
    return (
       <div>
           <h2>Gif Expert App</h2>
           {/* agregando un componente */}
           <AddCategory  setCategories = {setCategorias} />
           <hr/>       
           <ol>
                {
                    categorias.map((cat)=>( 
                         <GifGrid  
                            key= {cat} 
                            category = {cat} 
                        />
                    ))
                }
           </ol>
       </div>
    )

}

export default GifExpertApp;