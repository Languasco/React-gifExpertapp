import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( {setCategories}  )=>{   //--- se esta obteniendo la informacion por referencia del anterior componente
    // ---input todo lo que escribe el user---
    const [inputValue, setInputValue] = useState('');

    //-- evento donde interactura el usuario +------
    const handleInputChange =(e)=>{
        setInputValue(e.target.value);
    }

    //---- cuando presiona enter y se envia la informacion por referencia al otro componente ya modificada
    const handleSubmit =(e)=>{   
        if (e.key === 'Enter') {
            e.preventDefault();

            if(inputValue.trim().length === 0){
                alert('Por favor ingrese un valor');
                return ;
            }
            setCategories((cat)=> [inputValue,...cat]);
            
            //---- limpiando la caja de texto---
            setInputValue('');
        }
    }

    return (
       <form >
           <input 
             type="text"
             value= {inputValue}
             onChange={handleInputChange}
             onKeyDown = {handleSubmit}
           /> 
       </form>
    )
}

AddCategory.propTypes ={
    setCategories : PropTypes.func.isRequired
}
 
export default AddCategory;